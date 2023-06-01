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

function getFTR(star, sucess, fail){
    return `
    <tr>
        <td rowspan="2"><span>${star}</span></td>
        <td rowspan="1"><span>성공</span></td>
        <td rowspan="1"><span>${sucess.count}</span></td>
        <td rowspan="1"><span>${sucess.per}</span></td>
        <td rowspan="1"><span>${sucess.realPer}</span></td>
    </tr>
    <tr style="color:red">
        <td rowspan="1"><span>실패</span></td>
        <td rowspan="1"><span>${fail.count}</span></td>
        <td rowspan="1"><span>${fail.per}</span></td>
        <td rowspan="1"><span>${fail.realPer}</span></td>
    </tr>
    `
}

const STARFORCE_RATE=[99.75, 94.50, 89.25, 89.25, 84.00, 78.75, 73.50, 68.25, 63, 57.75, 
    52.50, 47.25, 42.00, 36.75, 31.5, 31.5, 31.5, 31.5, 31.5, 31.5, 31.5, 31.5, 3.15, 2.10, 1.05]

function renderStarforce(){
    let innerHTML="";
    for(let i=0; i<25; i++)innerHTML += getFTR(i+"성", {count:i,per:STARFORCE_RATE[i],realPer:i},{count:i,per:100-STARFORCE_RATE[i],realPer:i})
    wrapper.innerHTML= getFT("스타포스", innerHTML);
}

function renderStarforcePreventBreak(){
    let innerHTML="";
    for(let i=0; i<25; i++)innerHTML += getFTR(i+"성", {count:i,per:STARFORCE_RATE[i],realPer:i},{count:i,per:100-STARFORCE_RATE[i],realPer:i})
    wrapper.innerHTML= getFT("스타포스(파괴방지-코인)", innerHTML);
    innerHTML="";
    for(let i=0; i<25; i++)innerHTML += getFTR(i+"성", {count:i,per:STARFORCE_RATE[i],realPer:i},{count:i,per:100-STARFORCE_RATE[i],realPer:i})
    wrapper.innerHTML+= getFT("스타포스(파괴방지-주문서)", innerHTML);
}

function renderScrollforce(){
    let innerHTML=
        getFTR("악마의 주문서 70%", {count:1,per:70,realPer:1},{count:1,per:30+"(파괴)",realPer:1})
        + getFTR("신비한 악마의 주문서 90%", {count:1,per:90,realPer:1},{count:1,per:10+"(파괴)",realPer:1})
        + getFTR("이노센트 주문서 50%", {count:1,per:50,realPer:1},{count:1,per:50,realPer:1})
    wrapper.innerHTML= getFT("주문서 강화", innerHTML);
}

function renderScrollforcePreventBreak(){
    let innerHTML=
        getFTR("악마의 주문서 70%", {count:1,per:70,realPer:1},{count:1,per:30+"(파괴)",realPer:1})
        + getFTR("신비한 악마의 주문서 90%", {count:1,per:90,realPer:1},{count:1,per:10+"(파괴)",realPer:1})
        + getFTR("이노센트 주문서 50%", {count:1,per:50,realPer:1},{count:1,per:50,realPer:1})
    wrapper.innerHTML= getFT("주문서 강화(파괴방지-주문서)", innerHTML);
    innerHTML=
        getFTR("악마의 주문서 70%", {count:1,per:70,realPer:1},{count:1,per:30+"(파괴)",realPer:1})
        + getFTR("신비한 악마의 주문서 90%", {count:1,per:90,realPer:1},{count:1,per:10+"(파괴)",realPer:1})
        + getFTR("이노센트 주문서 50%", {count:1,per:50,realPer:1},{count:1,per:50,realPer:1})
    wrapper.innerHTML+= getFT("주문서 강화(파괴방지-코인)", innerHTML);
}