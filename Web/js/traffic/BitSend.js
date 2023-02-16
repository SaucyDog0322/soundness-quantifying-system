window.addEventListener('load', function () {
        let arr = window.Lib.csvToArray("data/BitSend.csv");
        const max = 577000000;
        let context = document.querySelector("#BitSen").getContext('2d')
        new Chart(context, {
          type: 'doughnut',
          data: {
            labels: ["残余通信量", "利用通信量"],
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
        let arr = window.Lib.csvToArray("data/BitSend.csv");
        let ave30 = 0;
        const max = 577000000;
        for(let i = 1; i < 11;i++){
        ave30 += Number(arr[i][2]);
        }
        ave30 /= 10;

        let context = document.querySelector("#BitSen30").getContext('2d')
        new Chart(context, {
          type: 'doughnut',
          data: {
            labels: ["残余通信量(30m)", "利用通信量(30m)"],
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
        let arr = window.Lib.csvToArray("data/BitSend.csv");
        const max = 577000000;
        const per = 5770000;
        var showPointSen = document.getElementById("BitSenPoint");
        let point = (max - arr[1][2])/per;
        showPointSen.innerHTML = Math.trunc(point) + "%";
});
window.addEventListener('load',function (){
        let arr = window.Lib.csvToArray("data/BitSend.csv");
        let ave30 = 0;
        const max = 577000000;
        const per = 5770000;
        for(let i = 1; i < 11;i++){
        ave30 += Number(arr[i][2]);
        }
        ave30 /= 10;
        var showPoint30Sen = document.getElementById("BitSen30Point");
        let point = (max - ave30)/per;
        showPoint30Sen.innerHTML = Math.trunc(point) + "%";
});
