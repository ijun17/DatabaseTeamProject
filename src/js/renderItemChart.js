
function addChartData(lable, data, color){
    return {
        label: lable,
        data: data,
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: color,
        borderWidth: 1
    }
}




function renderItemChart(data){
    wrapper.innerHTML= `<h1 style="margin-left:30px">월드아이템 구매</h1>
    <canvas id="myChart"  style="margin:50px" width="1000" height="500"></canvas>`;
    let canvas = document.getElementById("myChart");
    let ctx = canvas.getContext('2d');

    const color=["red", "orange", "yellow", "chartreuse","green", "skyblue", "blue", "darkblue", "blueviolet", "black"];
    const labels=['1월', '2월', '3월', '4월', '5월', '6월']
    const config={
        type: 'line',
        data: {
            labels: labels,
            datasets: []
        },
        options: {responsive: false}
    }
    for(let i=0,l=Math.min(data.length/2,10); i<l; i++)
        config.data.datasets.push(addChartData(data[i*2], data[i*2+1], color[i]));
    const myChart = new Chart(ctx, config);
}