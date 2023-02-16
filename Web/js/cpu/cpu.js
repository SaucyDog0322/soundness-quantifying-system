window.addEventListener('load', function () {
        let arr1 = window.Lib.csvToArray("data/CPUusrtime.csv");
        let arr2 = window.Lib.csvToArray("data/CPUutil.csv");
        const max = 100; 
        const max1 = 1.4;
        const per1 = 0.014;
        const max2 = 56;
        const per2 = 0.56;

        let point1 = (max1 - arr1[1][2])/per1;
        let point2 = (max2 - arr2[1][2])/per2;

        let point = (point1 + point2)/2; 

        let context = document.querySelector("#data_cpu").getContext('2d')
        new Chart(context, {
          type: 'doughnut',
          data: {
            labels: ["CPU利用余地", "CPU負荷"],
            datasets: [{
              backgroundColor:["#00ff7f","#a9a9a9"],
              data: [point,(max -  point)]
            }]
          },
          options: {
            responsive: false,
          }
        });
});

window.addEventListener('load',function (){
        let arr1 = window.Lib.csvToArray("data/CPUusrtime.csv");
        let arr2 = window.Lib.csvToArray("data/CPUutil.csv");
        const max = 100;
        const max1 = 1.4;
        const per1 = 0.014;
        const max2 = 56;
        const per2 = 0.56;

        let point1 = (max1 - arr1[1][2])/per1;
        let point2 = (max2 - arr2[1][2])/per2;

        var showPoint = document.getElementById("CPUPointTo");
        let point = (point1 + point2)/2;
        CPUPointTo.innerHTML = Math.trunc(point) + "pt";

});
