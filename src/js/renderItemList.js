function addL(name, innerHTML){
    return `<h1>${name}</h1><ol>${innerHTML}</ol>`
}

function addLi(name,count){
    return `<li>${name}(${count}개)</li>`
}

function renderJangItemGet(data){
    let innerHTML="";
    for(let i=0,l=data.length; i<l; i++)innerHTML+=addLi(data[i].itemName, data[i].getCount)
    wrapper.innerHTML= addL("장비 아이템 획득", innerHTML);
}

function renderSoItemGet(data){
    let innerHTML="";
    for(let i=0,l=data.length; i<l; i++)innerHTML+=addLi(data[i].itemName, data[i].getCount)
    wrapper.innerHTML= addL("소비 아이템 획득", innerHTML);
}

function renderSoItemUse(data){
    let innerHTML="";
    for(let i=0,l=data.length; i<l; i++)innerHTML+=addLi(data[i].itemName, data[i].useCount)
    wrapper.innerHTML= addL("소비 아이템 사용", innerHTML);
}