#!/bin/sh
#ファイルの転送
# 下のコードではユーザ名をuser,宛先IPアドレスを1.1.1.1,パスワードをppaassssとしている
  expect -c "
  
  spawn scp /root/data/CPUutil.csv user@1.1.1.1:/home/user/public_html/data
  expect {
    \"Are you sure you want to continue connecting (yes/no)?\" {
      send \"yes\r\"
      expect \"password:\"
      send \"ppaassss\r\"
    } \"password:\" {
      send \"ppaassss\r\"
    }
  }
expect {
    \"denied\" { exit 0 } 
    \"100%\" { exit 1 }
  }  "
