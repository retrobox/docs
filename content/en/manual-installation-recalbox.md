<div align="center" color="#0094D2">
	<img src="https://raw.githubusercontent.com/RetroBox/RetroBox-Artworks/master/retrobox_logo.png" height="200" alt="W" /><br><br>
    
    
</div>


# Installation of RecalBox on RetroBox

##  Materials :

* A computer connect to Internet

* The RetroBox

* A SD card of MINIMUM 4go

* Micro USB to USB cable

* Mini HDMI to HDMI

* 5V charger

* Manette (compatibility list here: 

[https://github.com/recalbox/recalbox-os/wiki/Compatibility-%28EN%29](https://github.com/recalbox/recalbox-os/wiki/Compatibility-%28EN%29))

* WPA wifi network

## Required files :

* RecalBox : [https://github.com/recalbox/recalbox-os/releases](https://github.com/recalbox/recalbox-os/releases)

* RetroBox files : [http://file.happyblocks.info/retrobox/project/RetroBox%20Files.rar](http://file.happyblocks.info/retrobox/project/RetroBox%20Files.rar)

* Etcher : [https://etcher.io/](https://etcher.io/)

* Putty : [https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

* WinSCP : [https://winscp.net/eng/download.php](https://winscp.net/eng/download.php)

## Preface :

* Be patient, it can take time

* If you have any problem contact us! (On our website or by e-mail: @retrobox.)

## On the computer :

* Burn `recalbox.img` on the sd card with etcher.io

![image alt text](http://retrobox.happyblocks.info/project/Image/manual/RecalBox/EN/image_2.png)

* Go into the boot partition of the SD card then :

Copy these files :

* `waveshare35a.dtbo`

* `waveshare32b.dtbo`

in `/boot/overlays`

![image alt text](http://retrobox.happyblocks.info/project/Image/manual/RecalBox/EN/image_3.png)

* Eject the SD card and insert it into your RetroBox and wait for the first boot

![image alt text](http://retrobox.happyblocks.info/project/Image/manual/RecalBox/EN/image_4.png)

## On the TV :

* Plug the HDMI output on a screen, then run it. (Having plugged in the controller)

* Press the "start" button then go to "Network" and set up your wifi network (WP2 / WPA only and the pc must be connected on the same network, for hidden networks use the tutorial available here: [https://forum.recalbox.com/topic/3389/hidden-wifi-ssid/4](https://forum.recalbox.com/topic/3389/hidden-wifi-ssid/4))

* Then restarted the RetroBox.

## Back on the computer :

* Connect in ssh on the IP address of the RetroBox with the Putty software, then, type this:

* **Login :** root

* **Password :** recalboxroot

* Run the following commands:

![image alt text](http://retrobox.happyblocks.info/project/Image/manual/RecalBox/EN/image_5.png)

`mount -o remount, rw /boot`

`sudo nano /boot/config.txt`

----------------------------------------------------------------------------------

Copy and past :

![image alt text](http://retrobox.happyblocks.info/project/Image/manual/RecalBox/EN/image_6.png)Do CTRL + C to copy the code above, then in putty, right click with the mouse to paste!

`#tft screen`
 
`#Waveshare 3.2 TFT Screen`
`#same resolution for hdmi and tft`
`hdmi_force_hotplug=1`
`hdmi_cvt=320 240 60 1 0 0 0`
`hdmi_group=2`                
`hdmi_mode=1`                 
`hdmi_mode=87`                
 
`dtparam=spi=on`              
`dtoverlay=waveshare32b:rotate=270,speed=82000000`

`dtoverlay=pwm-2chan,pin=19,func=2,pin2=13,func2=4`

![image alt text](http://retrobox.happyblocks.info/project/Image/manual/RecalBox/EN/image_7.png)

----------------------------------------------------------------------------------

Then do CTRL + X to finish editing and press Y to validate.

`cd /usr/bin`

`chmod 755 fbcp`

`fbcp`

`mount -o remount, rw /`

`nano /etc/init.d/S11fbcp`

![image alt text](http://retrobox.happyblocks.info/project/Image/manual/RecalBox/EN/image_8.png)

----------------------------------------------------------------------------------

Copy and past :

`#!/bin/sh`
 <br>
`case "$1" in`<br>
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`start)`<br>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;               `printf "Starting fbcp ... "`<br>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;               `start-stop-daemon -S -q -m -b -p /var/run/fbcp.pid --exec`<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `/usr/bin/fbcp -- -n`<br>
               &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`echo "done."`<br>
         &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;       `;;`<br>
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`stop)`<br>
                `printf "Stopping fbcp ..."`<br>
                `start-stop-daemon -K -q -p /var/run/fbcp.pid`<br>
                `echo "done."`<br>
                `;;`<br>
        `restart)`<br>
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`$0 stop`<br>
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`sleep 1`<br>
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`$0 start`<br>
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`;;`<br>
        `*)`<br>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`echo "usage: $0 {start|stop|restart}"`<br>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`;;`<br>
`esac`<br>


----------------------------------------------------------------------------------

Then do CTRL + X to finish editing and press Y to validate.

cd /etc/init.d/

chmod 755 S11fbcp

nano /recalbox/share/system/recalbox.conf

* Change in the config :

----------------------------------------------------------------------------------

#global.videomode=DMT 87 HDMI
global.videomode=default

#global.ratio=auto
global.ratio=4/3

Look for the line : "controllers.gpio.enabled=0"

Then replace with : "controllers.gpio.enabled=1"

(without "")

Look for the line : "**;**system.power.switch=PIN356ONOFFRESET"

Then replace with : "system.power.switch=PIN356ONOFFRESET"

(Only if you want add a reset button, not included)

(without "")

----------------------------------------------------------------------------------

Then do CTRL + X to finish editing and press Y to validate.

sudo nano /etc/modules

----------------------------------------------------------------------------------

Add this :

i2c-bcm2708

i2c-dev

----------------------------------------------------------------------------------

Then do CTRL + X to finish editing and press Y to validate.

sudo nano /etc/modprobe.d/raspi-blacklist.conf

----------------------------------------------------------------------------------

If you have: "i2c-bcm2708"

Then add a # in front of "i2c-bcm2708"

(without "")

----------------------------------------------------------------------------------

CTRL + X to finish editing and press Y to confirm.

modprobe i2c-bcm2708 i2c-dev

sudo i2cdetect -y 1

sudo modprobe mk_arcade_joystick_rpi map=1,"address : "sudo i2cdetect -y 1”

(without "")

Example  : sudo modprobe mk_arcade_joystick_rpi map=1,0x20

ps aux | grep fbcp

reboot

* Then launch WinSCP and login with the same login as for Putty, then go to:

* /recalbox/system/resources/splash/

* And drag the files from the archive into WinSCP:

* recalboxintro.mp4

* logo.png

* logo-version.png

![image alt text](http://retrobox.happyblocks.info/project/Image/manual/RecalBox/EN/image_9.png)

![image alt text](http://retrobox.happyblocks.info/project/Image/manual/RecalBox/EN/image_10.png)( You do not need a controller anymore )

## Conclusion :

You have successfully installed RecalBox on the RetroBox ! To continue the installation, look on the other manual to know how to install games.

## Problems :

* LISTER LES PROBLÈMES RÉCURRENT

