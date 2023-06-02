//chart.js api
function createChart(type,name,lables, datasets){
    const title=document.createElement("h1");
    title.innerText=name;
    wrapper.appendChild(title);
    const canvas = document.createElement("canvas");
    canvas.width=1000;//css로는 적용 안됨
    canvas.height=500;
    canvas.style.margin="50px";
    let ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: type,
        data: {labels: lables, datasets: datasets},
        options: {responsive: false},
    });
    wrapper.appendChild(canvas)
}


function addChartData(lable, data, color){
    return {
        label: lable, //string
        data: data, //[]
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: color,
        borderWidth: 1
    }
}

function getColor(i){
    const color=["red", "orange", "yellow", "chartreuse","green", "skyblue", "blue", "indigo", "blueviolet", "black"];
    if(i<10)return color[i];
    return "black";
}


function renderItemChart(data){
    wrapper.innerHTML = "";

    let datasets=[];
    let datasets2=[];
    for(let i=0,l=data.length/3; i<l; i++){
        datasets.push(addChartData(data[i*3], data[i*3+1], getColor(i)));
        datasets2.push(addChartData(data[i*3], data[i*3+2], getColor(i)));
    }
    createChart("line", "월드아이템 월별 판매 개수",['1월','2월','3월','4월','5월','6월'], datasets);
    createChart("line", "월드아이템 월별 수익",['1월','2월','3월','4월','5월','6월'], datasets2);
}


function renderItemChartPrice(data){
    wrapper.innerHTML = "";
    console.log(data);
    let labels=["판매가격"];
    let datasets=[];
    let datasets2=[];
    for(let i=0,l=data.length; i<l; i++){
        datasets.push(addChartData(data[i].price, [Number(data[i].purchaseCount)*data[i].price], getColor(i)));
        datasets2.push(addChartData(data[i].price, [Number(data[i].purchaseCount)], getColor(i)));
    }
    createChart("bar", "월드아이템 가격별 수익", labels, datasets)
    createChart("bar", "월드아이템 가격별 판매 개수", labels, datasets2)
}