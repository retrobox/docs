<div class="image-header">
	<img src="https://i.imgur.com/32ObfXb.png"/>
</div>

## Matériels

* Un ordinateur connecter à Internet

* La RetroBox

* Une carte SD de MINIMUM 4 go

* Cable USB micro USB to USB

* Mini HDMI to HDMI

* Chargeur 5V

* Manette (Liste de compatibilité ici :)

* Un réseau wifi WPA

## Fichiers nécessaires

* RetroPie : [https://retropie.org.uk/download/](https://retropie.org.uk/download/)

* RetroBox files : [http://file.happyblocks.info/retrobox/project/RetroBox%20Files.rar](http://file.happyblocks.info/retrobox/project/RetroBox%20Files.rar)

* Etcher : [https://etcher.io/](https://etcher.io/)

* Putty : [https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

* WinSCP : [https://winscp.net/eng/download.php](https://winscp.net/eng/download.php)

## Préface

* Soyez patient, cela peut prendre du temps

* Si vous avez le moindre problème contacter nous ! (Sur notre site ou par e-mail : @retrobox. )

## Partie sur ordinateur

* Graver retropie.img sur la carte sd avec etcher.io

![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_2.png)

* Éjecter la carte sd et insérez là dans votre RetroBox et patientez pour le premier démarrage

![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_3.png)

## Partie sur télévision

* Branchez la RetroBox en HDMI sur un écran, Puis démarré la. (En ayant branché la manette)

* Aller dans le menu RetroPie, puis dans "Wifi"

* Vous avez plusieurs façon de configurer un réseau wifi :

![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_6.png)![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_4.png)![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_5.png)

* Avec le fichier "wifikeyfile.txt", vous avez juste à l’importer dans le menu (enregistrer sous /boot/wifikeyfile.txt)				

![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_7.png)

* En branchant un clavier

![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_9.png)![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_8.png)![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_10.png)

* Aller dans "Raspi-Config", puis dans Connexion, puis activer le SSH

* Redémarrer la, en utilisant le support de la RetroBox

## Retour sur l’ordinateur

* Se connecter en ssh sur l’adresse ip de la RetroBox avec le logiciel Putty, puis, tapez ceci :

* **En login :** pi

* **En mot de passe :** raspberry

![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_11.png)

## Configuration principale de la RetroBox					

Pour pouvoir utiliser l’écran, il vous faut exécuter certaine commande		 

en SSH.										

1. *git clone* *[https://github.com/swkim01/waveshare-dtoverlays.git](https://github.com/swkim01/waveshare-dtoverlays.git)*

2. *sudo cp waveshare-dtoverlays/waveshare32b-overlay.dtb /boot/overlays/waveshare32b.dtbo*

3. *sudo nano /boot/config.txt*

----------------------------------------------------------------------------------

*Ajouter :*

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

<div class="docs-alert info">
  <i class="icon fas fa-question-circle"></i>
  <p>Faîtes CTRL+C pour copier le code ci-dessus, puis dans putty, faîtes clique droit pour coller</p>
</div>

----------------------------------------------------------------------------------

Puis faîtes CTRL + X pour finir l’édition puis appuyez sur Y pour valider.

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

(Tout en bas de la page, **AVANT** "exit 0" rajouter :

**/usr/local/bin/fbcp &**

<div class="docs-alert info">
  <i class="icon fas fa-question-circle"></i>
  <p>Faîtes CTRL+C pour copier le code ci-dessus, puis dans putty, faîtes clique droit pour coller</p>
</div>

----------------------------------------------------------------------------------

Puis faîtes CTRL + X pour finir l’édition puis appuyez sur Y pour valider.

1. sudo reboot

![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_16.png)

Une fois redémarrer l’écran et le son devrait fonctionner, mais pas le joystick, et les boutons

## Configuration des joystick et des boutons

Installation de "mk_arcade_joystick_rpi":

![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_17.png)
![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_19.png)![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_20.png)![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_21.png)![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_22.png)![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_23.png)![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_24.png)

Puis redémarrer la console

Reconnectez vous sur le PI avec Putty puis exécuter les commandes suivantes :

Installation de I2C Detect :

1. sudo apt-get install i2c-tools

Puis regardez l’adresse du chip :

1. sudo i2cdetect -y 1

![image alt text](https://retrobox.happyblocks.info/project/Image/manual/RetroPie/FR/image_25.png)

Vous avez donc une valeur égale à 0x20 (Notez le c’est important)


Installation terminé !

<div class="docs-alert info">
  <i class="icon fas fa-question-circle"></i>
  <p>Vous n’avez plus besoin de manette désormais</p>
</div>

## Conclusion

Après avoir réussi l'installation manuelle de RetroPie, vous pouvez désormais suivre ce manuel [ICI](FR-getting-started-avec-retropie) pour installer des jeux, si vous avez des problèmes qui ne sont pas lister contacter nous !

## Problèmes

* Asap
