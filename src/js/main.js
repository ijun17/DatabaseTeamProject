let starforce_entire=[];
let starforceDS_entire=[];
let starforceDC_entire=[];
let scrollforce_entire=[];
let scrollforceD_entire=[];

function getRates(data){
    let rates=[];
    for(let i=0; i<data.length; i++){
        const F = (data[i].fail !== undefined);
        const B = (data[i].breaks !== undefined);
        let sum = data[i].success + (F ? data[i].fail : 0) + (B ? data[i].breaks : 0); 
        rates.push(per(data[i].success, sum))
    }
    return rates;
}

async function init(){
    renderActionBar();
    fetchData(actionBarList[0][2], function(data){starforce_entire=getRates(data);console.log(starforce_entire);});
    fetchData(actionBarList[1][2], function(data){starforceDC_entire=getRates(data[0]);starforceDS_entire=getRates(data[1]);console.log(starforceDC_entire,starforceDS_entire);});
    fetchData(actionBarList[2][2], function(data){scrollforce_entire=getRates(data);console.log(scrollforce_entire);});
    fetchData(actionBarList[3][2], function(data){scrollforceD_entire=getRates(data);console.log(scrollforceD_entire);});
}

init();