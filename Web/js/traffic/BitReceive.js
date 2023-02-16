window.addEventListener('load', function () {
        let arr = window.Lib.csvToArray("data/BitReceive.csv");
        const max = 577000000;

        let context = document.querySelector("#BitRec").getContext('2d')
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
        let arr = window.Lib.csvToArray("data/BitReceive.csv");
        const max = 577000000;
        let ave30 = 0;
        for(let i = 1; i < 11;i++){
        ave30 += Number(arr[i][2]);
        }

        ave30 /= 10;
        let context = document.querySelector("#BitRec30").getContext('2d')
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
        const max = 577000000;
        const per = 5770000;
        let arr = window.Lib.csvToArray("data/BitReceive.csv");
        var showPointRec = document.getElementById("BitRecPoint"); 
        let point = (max - arr[1][2])/per; 
        showPointRec.innerHTML = Math.trunc(point) + "%";
});

window.addEventListener('load',function (){
        let arr = window.Lib.csvToArray("data/BitReceive.csv");
        let ave30 = 0;
        const max = 577000000;
        const per = 5770000;
        for(let i = 1; i < 11;i++){
        ave30 += Number(arr[i][2]);
        }
        ave30 /= 10;
        var showPoint30Rec = document.getElementById("BitRec30Point");
        let point = (max - ave30)/per;
        showPoint30Rec.innerHTML = Math.trunc(point) + "%";
});
