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

function getFTR(name, counts, rate){
    return `
    <tr>
        <td rowspan="2"><span>${name}</span></td>
        <td rowspan="1"><span>성공</span></td>
        <td rowspan="1"><span>${counts.success}</span></td>
        <td rowspan="1"><span>${rate}</span></td>
        <td rowspan="1"><span>${perS(counts)}</span></td>
    </tr>
    <tr style="color:red">
        <td rowspan="1"><span>실패</span></td>
        <td rowspan="1"><span>${counts.fail}</span></td>
        <td rowspan="1"><span>${100-rate}</span></td>
        <td rowspan="1"><span>${perF(counts)}</span></td>
    </tr>
    `
}

function perS(data){return (data.success/(data.success+data.fail)*100).toFixed(2)}
function perF(data){return (data.fail/(data.success+data.fail)*100).toFixed(2)}

const STARFORCE_RATE=[99.75, 94.50, 89.25, 89.25, 84.00, 78.75, 73.50, 68.25, 63, 57.75, 
    52.50, 47.25, 42.00, 36.75, 31.5, 31.5, 31.5, 31.5, 31.5, 31.5, 31.5, 31.5, 3.15, 2.10, 1.05];
const SCROLLFORCE_RATE=[70,90,50]; //70, 90은 파괴 가능

function renderStarforce(data){
    let innerHTML="";
    for(let i=0; i<data.length; i++)innerHTML += getFTR(i+"성", data[i], STARFORCE_RATE[i])
    wrapper.innerHTML= getFT("스타포스", innerHTML);
}

function renderStarforcePreventBreak(data){
    let innerHTML="";
    for(let i=0; i<data[0].length; i++)innerHTML += getFTR(i+"성", data[0][i], STARFORCE_RATE[i])
    wrapper.innerHTML= getFT("스타포스(파괴방지-코인)", innerHTML);
    innerHTML="";
    for(let i=0; i<data[1].length; i++)innerHTML += getFTR(i+"성", data[1][i], STARFORCE_RATE[i])
    wrapper.innerHTML+= getFT("스타포스(파괴방지-주문서)", innerHTML);
}

function renderScrollforce(data){
        
    wrapper.innerHTML= getFT("주문서 강화", 
        getFTR("악마의 주문서 70%", data[0], SCROLLFORCE_RATE[0])
        + getFTR("신비한 악마의 주문서 90%", data[1], SCROLLFORCE_RATE[1])
        + getFTR("이노센트 주문서 50%", data[2], SCROLLFORCE_RATE[2]));
}

function renderScrollforcePreventBreak(data){
    wrapper.innerHTML= getFT("주문서 강화(파괴방지)", 
        getFTR("악마의 주문서 70%", data[0][0], SCROLLFORCE_RATE[0])
        + getFTR("신비한 악마의 주문서 90%", data[0][1], SCROLLFORCE_RATE[1])
        + getFTR("이노센트 주문서 50%", data[0][2], SCROLLFORCE_RATE[2]));
    // wrapper.innerHTML+= getFT("주문서 강화(파괴방지-코인)", 
    //     getFTR("악마의 주문서 70%", data[1][0], SCROLLFORCE_RATE[0])
    //     + getFTR("신비한 악마의 주문서 90%", data[1][1], SCROLLFORCE_RATE[1])
    //     + getFTR("이노센트 주문서 50%", data[1][2], SCROLLFORCE_RATE[2]));
}