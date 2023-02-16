  // CSVファイル読み込み
(function(){
function csvToArray(filename) {

    // CSVファイルを文字列として取得
    let srt = new XMLHttpRequest();

    srt.open("GET", filename, false);
    try {
      srt.send(null);
    } catch (err) {
      console.log(err)
    }

    // 配列を用意
    let csletr = [];

    // 改行ごとに配列化
    let lines = srt.responseText.split(/\r\n|\n/);

    // 1行ごとに処理
    for (let i = 0; i < lines.length; ++i) {
      let cells = lines[i].split(/\s/);
      if (cells.length != 1) {
        csletr.push(cells);
      }
    }

    return csletr;

  }
  window.Lib = window.Lib|| {};
  window.Lib.csvToArray = csvToArray;
})();
