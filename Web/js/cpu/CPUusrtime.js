window.addEventListener('load', function () {
        let arr = window.Lib.csvToArray("data/CPUusrtime.csv");
        const max = 1.4;

        let context = document.querySelector("#CPUusr").getContext('2d')
        new Chart(context, {
          type: 'doughnut',
          data: {
            labels: ["CPU利用可能量", "CPU利用量"],
            datasets: [{
              backgroundColor:["#00ff7f","#a9a9a9"],
              data: [(max - arr[1][2]), arr[1][2]]
            }]
          },
          options: {
            responsive: false,
          }
        });
});
window.addEventListener('load', function () {
        let arr = window.Lib.csvToArray("data/CPUusrtime.csv");
        const max = 1.4;
        let ave30 = 0;
        for(let i = 1; i < 11;i++){
        ave30 += Number(arr[i][2]);
        }

        ave30 /= 10;
        let context = document.querySelector("#CPUusr30").getContext('2d')
        new Chart(context, {
          type: 'doughnut',
          data: {
            labels: ["CPU利用可能量(10m)", "CPU利用量(10m)"],
            datasets: [{
              backgroundColor:["#00ff7f","#a9a9a9"],
              data: [(max - ave30), ave30]
            }]
          },
          options: {
            responsive: false,
          }
       });
});
window.addEventListener('load',function (){
        const max = 1.4;
        const per = 0.014;
        let arr = window.Lib.csvToArray("data/CPUusrtime.csv");
        var showPoint = document.getElementById("CPUusrPoint"); 
        let point = (max - arr[1][2])/per; 
        showPoint.innerHTML = Math.trunc(point) + "%";
});

window.addEventListener('load',function (){
        let arr = window.Lib.csvToArray("data/CPUusrtime.csv");
        let ave30 = 0;
        const max = 1.4;
        const per = 0.014;
        for(let i = 1; i < 11;i++){
        ave30 += Number(arr[i][2]);
        }
        ave30 /= 10;
        var showPoint30 = document.getElementById("CPUusr30Point");
        let point = (max - ave30)/per;
        showPoint30.innerHTML = Math.trunc(point) + "%";
});
