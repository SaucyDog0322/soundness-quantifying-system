#!/usr/bin/bash

echo "install start"
echo `date '+%y/%m/%d %H:%M:%S'`
sudo apt-get -y update
sudo apt-get -y install  git
git clone https://github.com/smalruby/smalruby3-gui.git
echo -e "install done\n"
echo `date '+%y/%m/%d %H:%M:%S'`

