const actionBarEle = document.querySelector(".action-bar")
const testModeCheckbox = document.getElementById('testModeCheckbox');

//[이름,renderer,요청키워드]
const actionBarList = [
    ["스타포스",renderStarforce,"/starforce"],
    ["스타포스(파괴방지)",renderStarforcePreventBreak,"/starforceD"],
    ["주문서 강화",renderScrollforce,"/scrollforce"],
    ["주문서 강화(파괴방지)",renderScrollforcePreventBreak,"/scrollforceD"],
    ["장비 아이템 획득",renderJangItemGet,"/getItem"],
    ["소비 아이템 획득",renderSoItemGet,"/getItemConsume"],
    ["소비 아이템 사용",renderSoItemUse,"/useItem"],
    ["월드아이템 구매",renderItemChart,"/purchaseItem"]
]

function getUserID(){
    let value = document.getElementById("userid").value;
    if(value.length=="")return "";
    else return "/"+value;
}

async function fetchData(key, callback) {
    let root="http://localhost:3001"
    let url=root+key+getUserID()//'https://minework.shop/now'
    console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            callback(data);
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
            if(testModeCheckbox.checked) actionBarList[i][1](TEST_DATASET[i]);
            else fetchData(actionBarList[i][2], actionBarList[i][1]);
        }
        actionBarEle.appendChild(btn);
    }
}
