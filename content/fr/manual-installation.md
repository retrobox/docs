
<div class="image-header">
	<img src="https://static.retrobox.tech/img/logo/illustration.png"/>
</div>


## Matériels

* Un ordinateur connecté à Internet

* La RetroBox (kit ou non)

* Une carte SD de minimum 4 go (8go recommandé)

* Cable USB micro USB to USB

* Mini HDMI to HDMI

* Chargeur 5V

* Manette (Liste de compatibilité ici : [Retropie Wiki](https://github.com/RetroPie/RetroPie-Setup/wiki/Controller-Configuration))

* Un réseau wifi WPA/WEP

## Fichiers nécessaires

* RetroPie : [https://retropie.org.uk/download/](https://retropie.org.uk/download/)

* Win32Diskimager : [https://sourceforge.net/projects/win32diskimager/](https://sourceforge.net/projects/win32diskimager/)

**OU**
* Etcher : [https://etcher.io/](https://etcher.io/)

* Putty : [https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

* WinSCP : [https://winscp.net/eng/download.php](https://winscp.net/eng/download.php)

## Préface

* Soyez patient, cela peut prendre du temps

* Si vous avez le moindre problème contactez nous ! (Sur notre site ou par e-mail : support@retrobox.tech )

## Partie sur ordinateur

* Graver l'image de RetroPie sur la carte sd avec [etcher.io](https://etcher.io/) ou win32diskimager, dans notre cas nous utiliserons Etcher.

![image alt text](https://static.retrobox.tech/img/manual/RetroPie/FR/image_2.png)

#### Créer deux fichier à la racine de votre carte SD (/boot) :
- ```ssh``` sans extension de ficher et rien dedans c'est pour activer le ssh sans aller dans les menu de raspberry
- ```wifikeyfile.txt``` pour se connecter au réseau wifi plus facilement

Le contenu du fichier doit ressembler à ceci :

![image alt text](https://static.retrobox.tech/img/manual/RetroPie/FR/image_7.png)

* Éjecter la carte sd et insérez là dans votre RetroBox et patientez pour le premier démarrage

![image alt text](https://static.retrobox.tech/img/manual/RetroPie/FR/image_3.png)

## Partie sur télévision

* Branchez la RetroBox en HDMI sur un écran, Puis démarré la. (En ayant branché la manette)

* Aller dans le menu RetroPie, puis dans "Wifi"

* Vous avez plusieurs façon de configurer un réseau wifi :

![image alt text](https://static.retrobox.tech/img/manual/RetroPie/FR/image_6.png) ![image alt text](https://static.retrobox.tech/img/manual/RetroPie/FR/image_4.png) ![image alt text](https://static.retrobox.tech/img/manual/RetroPie/FR/image_5.png)

* Avec le fichier "wifikeyfile.txt" que vous avez créé juste avant, importez le en selectionnant "Import wifi credentials...".

* Notez l'adresse ip pour vous connecter plus tard avec putty.

## Retour sur l’ordinateur

* Se connecter en ssh sur l’adresse ip de la RetroBox avec le logiciel Putty, puis, tapez ceci :

* **En login :** pi

* **En mot de passe :** raspberry

![image alt text](https://static.retrobox.tech/img/manual/RetroPie/FR/image_11.png)

## Configuration principale de la RetroBox					

Pour pouvoir utiliser l’écran, il vous faut exécuter certaine commande en SSH.

<br>

1. ```bash
git clone https://github.com/swkim01/waveshare-dtoverlays.git```

2. ```bash
sudo cp waveshare-dtoverlays/waveshare32b.dtbo /boot/overlays/waveshare32b.dtbo```

3. ```bash
sudo nano /boot/config.txt```

----------------------------------------------------------------------------------

#### Ajouter :

```bash
# CONFIG RETROBOX

# Enable audio (loads snd_bcm2835)
dtparam=audio=on
gpu_mem_256=128
gpu_mem_512=256
gpu_mem_1024=256
overscan_scale=1

dtparam=spi=on
dtoverlay=waveshare32b

hdmi_force_hotplug=1
hdmi_cvt=320 240 60 1 0 0 0
hdmi_group=2
hdmi_mode=1
hdmi_mode=87

dtoverlay=pwm-2chan,pin=19,func=2,pin2=13,func2=4
disable_audio_dither=1

dtoverlay=waveshare32b:rotate=270,speed=35000000,fps=60

disable_splash=1
avoid_warnings=1

arm_freq=1010
gpu_freq=300
#lcd_on

```

<div class="docs-alert info">
  <i class="icon fas fa-question-circle"></i>
  <p>Faîtes CTRL+C pour copier le code ci-dessus, puis dans putty, faîtes clique droit pour coller</p>
</div>
<div class="docs-alert info">
  <i class="icon fas fa-greater-than-equal"></i>
  <p>Puis faîtes CTRL + X pour finir l’édition puis appuyez sur Y pour valider.</p>
</div>

----------------------------------------------------------------------------------
### Continuer les commandes avec :

1. ```bash
ls /dev/fb```

2. ```bash
sudo apt-get install cmake```

3. ```bash
git clone https://github.com/tasanakorn/rpi-fbcp```

4. ```bash
cd rpi-fbcp/```

5. ```bash
mkdir build```

6. ```bash
cd build/```

7. ```bash
cmake ..```

8. ```bash
make```

9. ```bash
sudo install fbcp /usr/local/bin/fbcp```

10. ```bash
sudo nano /etc/rc.local```

![image alt text](https://static.retrobox.tech/img/manual/RetroPie/FR/image_16.png)

![image alt text](https://static.retrobox.tech/img/manual/RetroPie/FR/image_14.png)

* Tout en bas de la page, **AVANT** "exit 0" rajoutez :

``bash
/usr/local/bin/fbcp &``

<div class="docs-alert info">
  <i class="icon fas fa-question-circle"></i>
  <p>Faîtes CTRL+C pour copier le code ci-dessus, puis dans putty, faîtes clique droit pour coller</p>
</div>

<div class="docs-alert info">
  <i class="icon fas fa-greater-than-equal"></i>
  <p>Puis faîtes CTRL + X pour finir l’édition puis appuyez sur Y pour valider.</p>
</div>

1. ```bash
sudo reboot```


Une fois redémarré, l’écran et le son devrait être fonctionnel, mais pas le joystick et les boutons.

----------------------------------------------------------------------------------

## Installation rapide de displaySwitch, du theme et de .bashrc

1. ```bash
sudo wget -N https://raw.githubusercontent.com/retrobox/console-modules/master/installdisplayswitch.sh && sudo chmod +x /home/pi/installdisplayswitch.sh && sudo ./installdisplayswitch.sh```

2. ```bash
sudo wget -N https://raw.githubusercontent.com/retrobox/console-modules/master/installretroboxtheme.sh && sudo chmod +x /home/pi/installretroboxtheme.sh && sudo ./installretroboxtheme.sh```

3. ```bash
sudo wget -N https://raw.githubusercontent.com/retrobox/console-modules/master/installbashrc.sh && sudo chmod +x /home/pi/installbashrc.sh && sudo ./installbashrc.sh```

## Configuration des joystick et des boutons

### Installation de "mk_arcade_joystick_rpi":

![image alt text](https://static.retrobox.tech/img/manual/RetroPie/FR/image_17.png)
![image alt text](https://static.retrobox.tech/img/manual/RetroPie/FR/image_19.png)
![image alt text](https://static.retrobox.tech/img/manual/RetroPie/FR/image_20.png)
![image alt text](https://static.retrobox.tech/img/manual/RetroPie/FR/image_24.png)
![image alt text](https://static.retrobox.tech/img/manual/RetroPie/FR/image_23.png)
![image alt text](https://static.retrobox.tech/img/manual/RetroPie/FR/image_22.png)
![image alt text](https://static.retrobox.tech/img/manual/RetroPie/FR/image_21.png)

* Puis redémarrez la console.

* Reconnectez vous sur le PI avec Putty puis exécuter les commandes suivantes :

### Continuer les commandes avec :

1. ```bash
sudo git clone --recursive --depth 1 https://github.com/retrobox/console-modules/ /home/pi/console-modules/```

2. ```bash
sudo \cp -r /home/pi/console-modules/inputsDriver/etc/modules /etc/modules```

3. ```bash
sudo \cp -r /home/pi/console-modules/inputsDriver/etc/modprobe.d/mk_arcade_joystick_rpi.conf /etc/modprobe.d/```

4. ```bash
sudo \cp -r /home/pi/console-modules/inputsDriver/etc/modprobe.d/mk_arcade_joystick.conf /etc/modprobe.d/```

5. ```bash
sudo \cp -r /home/pi/console-modules/inputsDriver/opt/retropie/configs/all/emulationstation/es_input.cfg /opt/retropie/configs/all/emulationstation/```

6. ```bash
sudo \cp -r -a /home/pi/console-modules/inputsDriver/opt/retropie/configs/all/retroarch/autoconfig/. /opt/retropie/configs/all/retroarch/autoconfig/```

7. ```bash
sudo \cp -r -a /home/pi/console-modules/inputsDriver/opt/retropie/configs/all/retroarch-joypads/. /opt/retropie/configs/all/retroarch-joypads/```

<br>

#### Installation de I2C Detect :

1. ```bash
sudo apt-get install i2c-tools```

* Puis regardez l’adresse du chip :

1. ```bash
sudo i2cdetect -y 1```

![image alt text](https://static.retrobox.tech/img/manual/RetroPie/FR/image_25.png)

* Vous avez donc une valeur égale à 0x20 (Si tout va bien)

* Le MCP23017 est bien pris en compte !

# Installation terminée !

<div class="docs-alert info">
  <i class="icon fas fa-question-circle"></i>
  <p>Vous n’avez plus besoin de manette désormais</p>
</div>

----------------------------------------------------------------------------------

## Conclusion

Après avoir réussi l'installation manuelle de RetroPie, vous pouvez désormais suivre ce manuel [ici](installation) pour installer des jeux, si vous avez des problèmes qui ne sont pas listés contactez nous !

## Problèmes

* Asap
