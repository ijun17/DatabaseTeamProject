const wrapper = document.querySelector(".wrapper");

function getFT(name, body){
    return `<h1>${name}</h1>
    <table class="starforce-table">
        <thead>
            <tr>
                <th><span>강화 단계</span></th>
                <th><span>강화 결과</span></th>
                <th><span>횟수</span></th>
                <th><span>설정 확률</span></th>
                <th><span>실제 확률</span></th>
                ${getUserID()!=""?"<th><span>편차</span></th>":""}
            </tr>
        </thead>
        <tbody class="starforce-body">${body}</tbody>
    </table>`
}

function getFTRS(name, count, rate, realRate){
    return `
    <td rowspan="1"><span>${name}</span></td>
    <td rowspan="1"><span>${count}</span></td>
    <td rowspan="1"><span>${rate}</span></td>
    <td rowspan="1"><span>${(realRate)}</span></td>`
}

function getFTR(name, counts, successRate, breakRate, successRateEntire){
    const F=(counts.fail!==undefined);
    const B=(counts.breaks!==undefined);
    let rowspan=1+(F?1:0)+(B?1:0) //행 개수
    let sum=counts.success + (F?counts.fail:0) + (B?counts.breaks:0); 
    let head=`<td rowspan="${rowspan}"><span>${name}</span></td>`
    let pyucha=(per(counts.success,sum)-successRateEntire).toFixed(2);
    let pyuchaCSS=(pyucha>0?"blue":"red")
    let tail=(getUserID()!="") ? `<td style="color:${pyuchaCSS}" rowspan="${rowspan}"><span>${pyucha}</span></td>` : ""
    let result=`<tr">${head+getFTRS("성공", counts.success, successRate, per(counts.success,sum))+tail}</tr>`
    if(F)result+=`<tr style="color:gray;background-color: #f9f9f9;">${getFTRS("실패", counts.fail, 100-successRate-breakRate, per(counts.fail,sum))}</tr>`
    if(B)result+=`<tr style="color:red">${getFTRS("파괴", counts.breaks, breakRate, per(counts.breaks,sum))}</tr>`
    return result;
}

function per(num,sum){return (num/sum*100).toFixed(2)}

const STARFORCE_SUCCESS_RATE=[95,90,85,85,80,75,70,65,60,55,50,45,40,35,30,30,30,30,30,30,30,30,5,4,3];
const STARFORCE_BREAK_RATE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,3,3,7,7,10,11,12];

function renderStarforce(data){
    let innerHTML="";
    for(let i=0; i<data.length; i++)innerHTML += getFTR(i+"성", data[i], STARFORCE_SUCCESS_RATE[i],STARFORCE_BREAK_RATE[i],starforce_entire[i])
    wrapper.innerHTML= getFT("스타포스", innerHTML);
}

function renderStarforcePreventBreak(data){
    let innerHTML="";
    for(let i=15; i<20; i++)innerHTML += getFTR(i+"성", data[0][i], STARFORCE_SUCCESS_RATE[i]+STARFORCE_BREAK_RATE[i],0,starforceDC_entire[i])
    wrapper.innerHTML= getFT("스타포스(파괴방지-코인)", innerHTML);
    innerHTML="";
    for(let i=20; i<data[1].length; i++)innerHTML += getFTR(i+"성", data[1][i], STARFORCE_SUCCESS_RATE[i]+STARFORCE_BREAK_RATE[i],0,starforceDS_entire[i])
    wrapper.innerHTML+= getFT("스타포스(파괴방지-주문서)", innerHTML);
}

function renderScrollforce(data){
    wrapper.innerHTML= getFT("주문서 강화", 
        getFTR("악마의 주문서 70%", data[0], 70,30,scrollforce_entire[0])
        + getFTR("신비한 악마의 주문서 90%", data[1], 90,10,scrollforce_entire[1])
        + getFTR("이노센트 주문서 50%", data[2], 50,0,scrollforce_entire[2]));
}

function renderScrollforcePreventBreak(data){
    wrapper.innerHTML= getFT("주문서 강화(파괴방지)", 
        getFTR("악마의 주문서 70%", data[0], 100, 0,scrollforceD_entire[0])
        + getFTR("신비한 악마의 주문서 90%", data[1], 100,0,scrollforceD_entire[1])
        + getFTR("이노센트 주문서 50%", data[2], 50, 0,scrollforceD_entire[2]));
}