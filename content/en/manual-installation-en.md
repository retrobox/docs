<div align="center" color="#0094D2">
	<img src="http://imageshack.com/a/img924/3931/4RxNMI.jpg" height="200"/><br>
</div>

## Required

* A computer connect to the Internet

* The RetroBox

* SD card of MINIMUM 4 GB

* USB cable micro USB to USB

* Mini HDMI to HDMI

* 5V charger

* Controller (compatibility list here :)

* WPA wifi network

## Needed files

* RetroPie :[https://retropie.org.uk/download/](https://retropie.org.uk/download/)

* Etcher : [https://etcher.io/](https://etcher.io/)

* Putty : [https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

* WinSCP : [https://winscp.net/eng/download.php](https://winscp.net/eng/download.php)

## Preface

* Be patient, it can take time

* If you have any problem contact us! (On our website or by e-mail: @retrobox.)

## On the Computer

* Burn retropie.img on the map sd with etcher.io

![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_2.png)

* Eject the SD card and insert it into your RetroBox and wait for the first boot

![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_3.png)


## On the television

* Plug the RetroBox into HDMI on a screen, then start it. (Having plugged in the controller)

* Go to the RetroPie menu, then in "Wifi"

* You have several ways to configure a wifi network:
![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_6.png)![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_4.png)![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_5.png)

* With the file "wifikeyfile.txt", you just have to import it in the menu (save as /boot/wifikeyfile.txt)				![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_7.png)

* By connecting a keyboard

![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_9.png)![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_8.png)![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_10.png)

* Go to "Raspi-Config", then in Connection, then enable SSH

* Restart it, using the support of the RetroBox

## Back to the computer

* Connect in ssh on the IP address of the RetroBox with the Putty software, then, type this:

* **Login :** pi

* **Password :** raspberry

![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_11.png)

## Main configuration of the RetroBox

To be able to use the screen, you have to execute certain commands

in SSH.								

1. *git clone* *[https://github.com/swkim01/waveshare-dtoverlays.git](https://github.com/swkim01/waveshare-dtoverlays.git)*

2. *sudo cp waveshare-dtoverlays/waveshare32b-overlay.dtb /boot/overlays/waveshare32b.dtbo*

3. *sudo nano /boot/config.txt*

----------------------------------------------------------------------------------

*Add :*

1. #Add Screen, overclock and sound

2. *dtparam=i2c_arm=on*

3. *dtparam=i2s=on*

4. *dtparam=spi=on*

5. *dtoverlay=waveshare32b*

6. *hdmi_force_hotplug=1*

7. *hdmi_cvt=320 240 60 1 0 0 0*

8. *hdmi_group=2*

9. *hdmi_mode=1*

10. *hdmi_mode=87*

11. *dtoverlay=pwm-2chan,pin=19,func=2,pin2=13,func2=4*

12. *dtoverlay=waveshare32b:rotate=270,speed=82000000*

13. *arm_freq=1050*

14. *gpu_freq=300*

![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_13.png)Do CTRL + C to copy the code above, then in putty, click right to paste

----------------------------------------------------------------------------------

Then do CTRL + X to finish editing and press Y to validate.

1. *ls /dev/fb**

2. *sudo apt-get install cmake*

3. *git clone* *[https://github.com/tasanakorn/rpi-fbcp](https://github.com/tasanakorn/rpi-fbcp)*

4. *cd rpi-fbcp/*

5. *mkdir build*

6. *cd build/*

7. *cmake ..*

8. *make*

9. *sudo install fbcp /usr/local/bin/fbcp*

10. *sudo nano /etc/rc.local*

![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_14.png)

(At the very bottom of the page, **BEFORE**  "exit 0" add:

**/usr/local/bin/fbcp &**

![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_15.png)Do CTRL + C to copy the code above, then in putty, click right to paste)


----------------------------------------------------------------------------------

Then do CTRL + X to finish editing and press Y to validate.

1. sudo reboot

![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_16.png)


Once restart the screen and the sound should work, but not the joystick, and the buttons

## Configuration of joystick and buttons

Installation of "mk_arcade_joystick_rpi":

![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_17.png)
![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_19.png)![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_20.png)![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_21.png)![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_22.png)![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_23.png)![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_24.png)


Then restart the console

Reconnect to the PI with Putty then execute the following commands:

Installation of I2C Detect:

1. sudo apt-get install i2c-tools

Then look at the chip address:

1. sudo i2cdetect -y 1

![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_25.png)

So you have a value equal to 0x20 (Note this is important)






Installation finished!

![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_27.png)You do not need a controller anymore

## Conclusion

After successful manual installation of RetroPie, you can now follow this manual [HERE](EN-getting-started-with-retropie) to install games, if you have problems that do not list contact us!

## Issues

* Asap
