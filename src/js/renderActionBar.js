const actionBarEle = document.querySelector(".action-bar")
const testModeCheckbox = document.getElementById('testModeCheckbox');

//[이름,renderer,요청키워드]
const actionBarList = [
    ["스타포스",renderStarforce,"starforce"],
    ["스타포스(파괴방지)",renderStarforcePreventBreak,"starforcePreventBreak"],
    ["주문서 강화",renderScrollforce,"scrollforce"],
    ["주문서 강화(파괴방지)",renderScrollforcePreventBreak,"scrollforcePreventBreak"],
    ["장비 아이템 획득",renderJangItemGet,"um"],
    ["소비 아이템 획득",renderSoItemGet,"jun"],
    ["소비 아이템 사용",renderSoItemUse,"sick"],
    ["월드아이템 구매",renderItemChart,"worldItemBuy"]
]

function getUserID(){
    let value = document.querySelector("input").value;
    return value;
}

async function fetchData(key) {
    let url="http://localhost:3001"//'https://minework.shop/now'
    return fetch(url+"/"+key+"/"+getUserID())
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
}


function renderActionBar(){
    let btn;
    for(let i=0; i<actionBarList.length; i++){
        btn=document.createElement("button");
        btn.innerText=actionBarList[i][0];
        btn.className="action-button"
        btn.onclick=async function(){
            if(testModeCheckbox.checked){
                actionBarList[i][1](TEST_DATASET[i]);
            }else{
                let data = await fetchData(actionBarList[i][2]);
                actionBarList[i][1](data);
            }
        }
        actionBarEle.appendChild(btn);
    }
}
