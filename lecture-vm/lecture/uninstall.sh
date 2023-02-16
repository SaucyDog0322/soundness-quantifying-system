#!/usr/bin/bash

echo  "uninstall start"
echo `date '+%y/%m/%d %H:%M:%S'`
sudo apt-get -y --purge remove git
sudo apt -y autoremove
rm -rf https://github.com/smalruby/smalruby3-gui.git
sudo rm -R smalruby3-gui/ 
echo -e "uninstall finish\n"
echo `date '+%y/%m/%d %H:%M:%S'`
