function addL(name, innerHTML){
    return `<h1 style="margin-left:30px">${name}</h1><ol>${innerHTML}</ol>`
}

function addLi(item){
    return `<li>${item.itemName}(${item.getCount}개)</li>`
}

function renderJangItemGet(data){
    let innerHTML="";
    for(let i=0; i<data.length; i++)innerHTML+=addLi(data[i])
    wrapper.innerHTML= addL("장비 아이템 획득", innerHTML);
}

function renderSoItemGet(data){
    let innerHTML="";
    for(let i=0; i<data.length; i++)innerHTML+=addLi(data[i])
    wrapper.innerHTML= addL("소비 아이템 획득", innerHTML);
}

function renderSoItemUse(data){
    let innerHTML="";
    for(let i=0; i<data.length; i++)innerHTML+=addLi(data[i])
    wrapper.innerHTML= addL("소비 아이템 사용", innerHTML);
}