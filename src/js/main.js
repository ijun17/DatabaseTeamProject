let starforce_entire;
let starforceD_entire;
let scrollforce_entire;
let scrollforceD_entire;

async function init(){
    //renderStarforce();
    starforce_entire = await fetchData(actionBarList[0][2], (data)=>{console.log(data)});
    starforceD_entire = await fetchData(actionBarList[1][2], (data)=>{console.log(data)});
    scrollforce_entire = await fetchData(actionBarList[2][2], (data)=>{console.log(data)});
    scrollforceD_entire = await fetchData(actionBarList[3][2], (data)=>{console.log(data)});
    renderStarforce();
}


init();