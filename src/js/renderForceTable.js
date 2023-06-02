const wrapper = document.querySelector(".wrapper");

function getFT(name, body){
    return `<h1 style="margin-left:30px">${name}</h1>
    <table class="starforce-table">
        <thead>
            <tr>
                <th><span>강화 단계</span></th>
                <th><span>강화 결과</span></th>
                <th><span>횟수</span></th>
                <th><span>설정 확률</span></th>
                <th><span>실제 확률</span></th>
            </tr>
        </thead>
        <tbody class="starforce-body">${body}</tbody>
    </table>`
}

function getForceTableRow(name, count, rate, realRate){
    return `
    <td rowspan="1"><span>${name}</span></td>
    <td rowspan="1"><span>${count}</span></td>
    <td rowspan="1"><span>${rate}</span></td>
    <td rowspan="1"><span>${(realRate)}</span></td>`
}

function getFTR(name, counts, successRate, breakRate){
    const F=(counts.fail!==undefined);
    const B=(counts.break!==undefined);
    let rowspan=1+(F?1:0)+(B?1:0) //행 개수
    let sum=counts.success + (F?counts.fail:0) + (B?counts.break:0); 
    let title=`<td rowspan="${rowspan}"><span>${name}</span></td>`
    let result=`<tr>${title+getForceTableRow("성공", counts.success, successRate, per(counts.success,sum))}</tr>`
    if(F)result+=`<tr>${getForceTableRow("실패", counts.fail, 100-successRate-breakRate, per(counts.fail,sum))}</tr>`
    if(B)result+=`<tr>${getForceTableRow("파괴", counts.break, breakRate, per(counts.break,sum))}</tr>`
    return result;
}

function per(num,sum){return (num/sum*100).toFixed(2)}

const STARFORCE_RATE=[95,90,85,85,80,75,70,65,60,55,50,45,40,35,30,30,30,30,30,30,30,30,5,4,3];
const BREAK_RATE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,3,3,7,7,10,11,12];
const SCROLLFORCE_RATE=[70,90,50]; //70, 90은 파괴 가능

function renderStarforce(data){
    let innerHTML="";
    for(let i=0; i<data.length; i++)innerHTML += getFTR(i+"성", data[i], STARFORCE_RATE[i],BREAK_RATE[i])
    wrapper.innerHTML= getFT("스타포스", innerHTML);
}

function renderStarforcePreventBreak(data){
    let innerHTML="";
    for(let i=0; i<data[0].length; i++)innerHTML += getFTR(i+"성", data[i], STARFORCE_RATE[i]+BREAK_RATE[i],0)
    wrapper.innerHTML= getFT("스타포스(파괴방지-코인)", innerHTML);
    innerHTML="";
    for(let i=0; i<data[1].length; i++)innerHTML += getFTR(i+"성", data[i], STARFORCE_RATE[i]+BREAK_RATE[i],0)
    wrapper.innerHTML+= getFT("스타포스(파괴방지-주문서)", innerHTML);
}

function renderScrollforce(data){
    wrapper.innerHTML= getFT("주문서 강화", 
    getScrollFTR("악마의 주문서 70%", data[0], SCROLLFORCE_RATE[0],100-SCROLLFORCE_RATE[0])
        + getScrollFTR("신비한 악마의 주문서 90%", data[1], SCROLLFORCE_RATE[1],100-SCROLLFORCE_RATE[1])
        + getScrollFTR("이노센트 주문서 50%", data[2], SCROLLFORCE_RATE[2],0));
}

function renderScrollforcePreventBreak(data){
    wrapper.innerHTML= getFT("주문서 강화(파괴방지)", 
        getScrollFTR("악마의 주문서 70%", data[0][0], 100, 0)
        + getScrollFTR("신비한 악마의 주문서 90%", data[0][1], 100,0)
        + getScrollFTR("이노센트 주문서 50%", data[0][2], SCROLLFORCE_RATE[2], 0));
}