window.addEventListener('load', function () {
        let arr = window.Lib.csvToArray("data/CPUutil.csv");
        const max = 56;

        let context = document.querySelector("#CPUutil").getContext('2d')
        new Chart(context, {
          type: 'doughnut',
          data: {
            labels: ["CPU可能利用率", "CPU利用率"],
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
        let arr = window.Lib.csvToArray("data/CPUutil.csv");
        const max = 56;
        let ave30 = 0;
        for(let i = 1; i < 11;i++){
        ave30 += Number(arr[i][2]);
        }

        ave30 /= 10;
        let context = document.querySelector("#CPUutil30").getContext('2d')
        new Chart(context, {
          type: 'doughnut',
          data: {
            labels: ["CPU可能利用率(10m)", "CPU利用率(10m)"],
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
        const max = 56;
        const per = 0.56;
        let arr = window.Lib.csvToArray("data/CPUutil.csv");
        var showPointRec = document.getElementById("CPUutilPoint"); 
        let point = (max - arr[1][2])/per; 
        showPointRec.innerHTML = Math.trunc(point) + "%";
});

window.addEventListener('load',function (){
        let arr = window.Lib.csvToArray("data/CPUutil.csv");
        let ave30 = 0;
        const max = 56;
        const per = 0.56;
        for(let i = 1; i < 11;i++){
        ave30 += Number(arr[i][2]);
        }
        ave30 /= 10;
        var showPoint30Rec = document.getElementById("CPUutil30Point");
        let point = (max - ave30)/per;
        showPoint30Rec.innerHTML = Math.trunc(point) + "%";
});
