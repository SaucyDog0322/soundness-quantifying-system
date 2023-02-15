#!/bin/bash
# production
 
# 定数の定義
MYSQL_SCHEMA="zabbix"
ROOT_DIRECTORY="/var/tmp"
CMD_MYSQL="mysql --defaults-extra-file=$ROOT_DIRECTORY/mysql.conf -t --show-warnings $MYSQL_SCHEMA"
 
# SQLの指定
# カラムにアスタリスク（*）を使うとうまくいかなかったので、一つずつ指定
# 調べたいitemIDを代入することステータスを収集できる.今回は11114とした.
QUERY= sudo mysql zabbix -e "SELECT from_unixtime(clock),value FROM history where itemid = '11114' order by clock desc limit 100; "
# シェルを実行、実行ログを受け取る
VALUE=` echo ${QUERY} `

# 処理の終了コードを取得
RESULT=$?
echo $VALUE 
# 結果のチェック
if [ $RESULT -eq 0 ]; then
    exit 0
else
    echo "[ERROR] 予期せぬエラーが発生 異常終了"
    exit 1
fi
