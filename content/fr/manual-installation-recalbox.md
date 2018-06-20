<div align="center" color="#0094D2">
			<img src="https://i.imgur.com/32ObfXb.png"/>
		<br>
	<br>
</div>


# Installation manuelle de RecalBox sur RetroBox

## Matériels :

* Un ordinateur connecter à Internet

* La RetroBox

* Une carte SD de MINIMUM 4go

* Cable USB micro USB to USB

* Mini HDMI to HDMI

* Chargeur 5V

* Manette (Liste de compatibilité ici : [https://github.com/recalbox/recalbox-os/wiki/Compatibility-%28EN%29](https://github.com/recalbox/recalbox-os/wiki/Compatibility-%28EN%29))

* Un réseau wifi WPA

## Fichiers nécessaires :

* RecalBox : [https://github.com/recalbox/recalbox-os/releases](https://github.com/recalbox/recalbox-os/releases)

* RetroBox files : [https://static.retrobox.tech/dependency.zip](https://static.retrobox.tech/dependency.zip)

* Etcher : [https://etcher.io/](https://etcher.io/)

* Putty : [https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

* WinSCP : [https://winscp.net/eng/download.php](https://winscp.net/eng/download.php)

## Préface :

* Soyez patient, cela peut prendre du temps

* Si vous avez le moindre problème contacter nous ! (Sur notre site ou par e-mail : contact@etrobox.tech)

## Partie sur ordinateur :

* Graver recalbox.img sur la carte sd avec etcher.io

![image alt text](https://static.retrobox.tech/img/manual/RecalBox/FR/image_2.png)

* Aller dans la partition boot de la carte SD puis :

Copier les fichiers :

* waveshare35a.dtbo

* waveshare32b.dtbo

dans /boot/overlays

![image alt text](https://static.retrobox.tech/img/manual/RecalBox/FR/image_3.png)

* Ejecter la carte sd et insérez là dans votre RetroBox et patientez pour le premier démarrage

![image alt text](https://static.retrobox.tech/img/manual/RecalBox/FR/image_4.png)

## Partie sur télévision :

* Branchez la RetroBox en HDMI sur un écran, Puis démarré la. (En ayant branché la manette)

* Appuyez sur le bouton "start" puis aller dans “Network” et configurez votre réseau wifi (Attention WP2 / WPA seulement et le pc doit être sur le même réseau, pour les réseaux cachés utiliser le tutoriel disponible ici : [https://forum.recalbox.com/topic/3389/hidden-wifi-ssid/4](https://forum.recalbox.com/topic/3389/hidden-wifi-ssid/4))

* Puis redémarré la.

## Retour sur l’ordinateur :

* Se connecter en ssh sur l’adresse ip de la RetroBox avec le logiciel Putty, puis, tapez ceci :

* **En login :** root

* **En mot de passe :** recalboxroot

* Exécutez les commandes suivantes :

![image alt text](https://static.retrobox.tech/img/manual/RecalBox/FR/image_5.png)

`mount -o remount, rw /boot`

`sudo nano /boot/config.txt`

----------------------------------------------------------------------------------

Copier coller :

![image alt text](https://static.retrobox.tech/img/manual/RecalBox/FR/image_6.png)Faîtes CTRL+C pour copier le code ci-dessus, puis dans putty, faîtes clique droit pour coller !

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

![image alt text](https://static.retrobox.tech/img/manual/RecalBox/FR/image_7.png)

----------------------------------------------------------------------------------

Puis faîtes CTRL + X pour finir l’édition puis appuyez sur Y pour valider.

`cd /usr/bin`

`chmod 755 fbcp`

`fbcp`

`mount -o remount, rw /`

`nano /etc/init.d/S11fbcp`

![image alt text](https://static.retrobox.tech/img/manual/RecalBox/FR/image_8.png)

----------------------------------------------------------------------------------

Copier coller :

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

Puis faîtes CTRL + X pour finir l’édition puis appuyez sur Y pour valider.

`cd /etc/init.d/`

`chmod 755 S11fbcp`

`nano /recalbox/share/system/recalbox.conf`

* Changer dans la config :

----------------------------------------------------------------------------------

`#global.videomode=DMT 87 HDMI`<br>
`global.videomode=default`

`#global.ratio=auto`<br>
`global.ratio=4/3`

Cherchez la ligne : "`controllers.gpio.enabled=0`"

Puis remplacer par : "`controllers.gpio.enabled=1`"

(Sans les "")

Cherchez la ligne : "`**;**system.power.switch=PIN356ONOFFRESET`"

Puis remplacer par : "`system.power.switch=PIN356ONOFFRESET`"

(Sans les "")

----------------------------------------------------------------------------------

Puis faîtes CTRL + X pour finir l’édition puis appuyez sur Y pour valider.

`sudo nano /etc/modules`

----------------------------------------------------------------------------------

Ajouter ceci :

`i2c-bcm2708`

`i2c-dev`

----------------------------------------------------------------------------------

Puis faîtes CTRL + X pour finir l’édition puis appuyez sur Y pour valider.

`sudo nano /etc/modprobe.d/raspi-blacklist.conf`

----------------------------------------------------------------------------------

Si vous avez la ligne : "`i2c-bcm2708`"

Alors ajouter un # devant "`i2c-bcm2708`"

(Sans les "")

----------------------------------------------------------------------------------

Puis faîtes CTRL + X pour finir l’édition puis appuyez sur Y pour valider.

`modprobe i2c-bcm2708 i2c-dev`

`sudo i2cdetect -y 1`

`sudo modprobe mk_arcade_joystick_rpi map=1`,"adresse que vous a donné la commande : "`sudo i2cdetect -y 1`”

(Sans les "")

Exemple  : `sudo modprobe mk_arcade_joystick_rpi map=1,0x20`

`ps aux | grep fbcp`

`reboot`

* Puis lancer WinSCP et connecter vous avec les même login que pour Putty, puis, aller dans :

* `/recalbox/system/resources/splash/`

* Et glisser dans WinSCP les fichiers de l’archive :

* `recalboxintro.mp4`

* `logo.png`

* `logo-version.png`

![image alt text](https://static.retrobox.tech/img/manual/RecalBox/FR/image_9.png)

![image alt text](https://static.retrobox.tech/img/manual/RecalBox/FR/image_10.png)( Vous n’avez plus besoin de manette désormais)

## Conclusion :

Et voilà vous avez réussi l’installation de RetroBox sur la raspberry pi ! Pour continuer l’installation, regarder sur l’autre manuel pour installer des jeux.

## Problèmes :

* LISTER LES PROBLÈMES RÉCURRENT
