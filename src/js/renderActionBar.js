const actionBarEle = document.querySelector(".action-bar")

//[이름,renderer,요청키워드]
const actionBarList = [
    ["스타포스",renderStarforce,0],
    ["스타포스(파괴방지)",renderStarforcePreventBreak,1],
    ["주문서 강화",renderScrollforce,2],
    ["주문서 강화(파괴방지)",renderScrollforcePreventBreak,3],
    ["장비 아이템 획득",renderJangItemGet,4],
    ["소비 아이템 획득",renderSoItemGet,5],
    ["소비 아이템 사용",renderSoItemUse,6],
    ["월드아이템 구매",renderItemChart,7]
]

function getData(renderer, type, userid=""){
    const url="";
    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: type+" "+userid
      })
    .then((response)=>response.text())
    .then((text)=>{
        const jsonData = JSON.parse(text);
        renderer(jsonData);
    })
}

function getUserID(){
    let value = document.querySelector("input").value;
    if(value=="")return "*";
    else return value; 
}

function renderActionBar(){
    let btn;
    for(let i=0; i<actionBarList.length; i++){
        btn=document.createElement("button");
        btn.innerText=actionBarList[i][0];
        btn.className="action-button"
        btn.onclick=function(){//actionBarList[i][2];
            console.log(getUserID());
            //actionBarList[i][1]();
            getData(actionBarList[i][1],actionBarList[i][2],getUserID());
        }
        actionBarEle.appendChild(btn);
    }
}
