let starforce_entire;
let starforceD_entire;
let scrollforce_entire;
let scrollforceD_entire;

async function init(){
    fetchData(actionBarList[0][2], function(data){console.log(data);starforce_entire=data;});
    fetchData(actionBarList[1][2], function(data){console.log(data);starforceD_entire=data;});
    fetchData(actionBarList[2][2], function(data){console.log(data);scrollforce_entire=data;});
    fetchData(actionBarList[3][2], function(data){console.log(data);scrollforceD_entire=data;});
    renderStarforce();
}

init();