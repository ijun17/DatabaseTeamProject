
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

    const options={
        responsive: false,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart'
          }
        }
    }

    color=["red", "orange", "yellow", "chartreuse","green", "skyblue", "blue", "darkblue", "blueviolet", "black"]

    const chartData={
        labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
        datasets: []
    }

    for(let i=0; i<10; i++)data.datasets.push(addChartData(data[i].name, data[i].counts, color[i]));
    //data.datasets.push(addChartData("아이템"+i, [Math.random()*20, Math.random()*20, Math.random()*20, Math.random()*20, Math.random()*20, Math.random()*20], color[i]))

    const myChart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: options
    });
}