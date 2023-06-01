
// 가장 많이 얻은,사용한,구매한 10개 순위
// [아이템이름, 개수]
const itemSample=[
    ["John",123234],
    ["Emily",22343],
    ["Michael", 432],
    ["Jessica",383],
    ["David",234],
    ["Sophia",8],
    ["Daniel",5],
    ["Olivia",4],
    ["James",2],
    ["Emma",1]
];

function addL(name, innerHTML){
    return `<h1 style="margin-left:30px">${name}</h1><ol>${innerHTML}</ol>`
}

function addLi(name, count){
    return `<li>${name}(${count}개)</li>`
}

function renderJangItemGet(){
    let innerHTML="";
    for(let i=0; i<itemSample.length; i++)innerHTML+=addLi(itemSample[i][0], itemSample[i][1])
    wrapper.innerHTML= addL("장비 아이템 획득", innerHTML);
}

function renderSoItemGet(){
    let innerHTML="";
    for(let i=0; i<itemSample.length; i++)innerHTML+=addLi(itemSample[i][0], itemSample[i][1])
    wrapper.innerHTML= addL("소비 아이템 획득", innerHTML);
}

function renderSoItemUse(){
    let innerHTML="";
    for(let i=0; i<itemSample.length; i++)innerHTML+=addLi(itemSample[i][0], itemSample[i][1])
    wrapper.innerHTML= addL("소비 아이템 사용", innerHTML);
}