window.addEventListener('load', function () {
        let arr1 = window.Lib.csvToArray("data/BitSend.csv");
        let arr2 = window.Lib.csvToArray("data/BitReceive.csv");
        
        const max = 577000000;
        const arr = (Number(arr1[1][2])+Number(arr2[1][2]))/2;
        console.log(arr);

        let context = document.querySelector("#data_traffic").getContext('2d')
        new Chart(context, {
          type: 'doughnut',
          data: {
            labels: ["残余通信量", "利用通信量"],
            datasets: [{
              backgroundColor:["#00ff7f","#a9a9a9"],
              data: [(max - arr), arr]
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
        let arr1 = window.Lib.csvToArray("data/BitReceive.csv");
        let arr2 = window.Lib.csvToArray("data/BitSend.csv");
        const arr = (Number(arr1[1][2])+Number(arr2[1][2]))/2;
        var trafficPoint = document.getElementById("trafficPointTo"); 
        let point = (max - arr)/per; 
        trafficPoint.innerHTML = Math.trunc(point) + "pt";
});
