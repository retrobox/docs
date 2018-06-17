<div class="image-header">
	<img src="https://i.imgur.com/32ObfXb.png"/>
</div>

## Achetez une RetroBox

Pour commander une RetroBox avec quelques accessoires, dirigez-vous vers la boutique [RetroBox Shop](https://retrobox.tech/shop).

Pendant que vous attendez que votre RetroBox arrive, vous pouvez commencer a regrouper le matériel nécessaire pour le montage de la console et lire le manuel.

* Un fer à souder, avec de l'étain
* Un tournevis cruciforme, une pince coupante,
* De la patience

Temps estimé au montage ~ 3h - 4h

## Première étape: Ouverture de la boîte et vérification :

Bienvenue dans le monde de Retrobox !

Une fois que vous avez reçu votre colis, il est possible que nous avons oublié un composant, (nous sommes humains, mais je vous rassure cela n'arrive pratiquement jamais) si c'est le cas, contactez nous, nous vous réexpidrons le composant manquant gratuitement, contactez nous : `support@retrobox.tech`)

Voici ce que contient la boîte :
![image alt text](https://static.retrobox.tech/img/box.jpg)

### Listes des composants

|  Pièces | Quantité |  Pièces | Quantité |
|  ------ | ------ |  ------ | ------ |
|  - Ecran 3,2 pouces | 1 |  - PAM8403 Amplificateur | 1 |
|  - Joystik	| 1 |  - Micro USB Female CMS | 1 |
|  - DD06CVSA Circuit | 1 |  - Sachet zip | 1 |
|  - Mini HDMI vers HDMI + USB OTG	| 1 |  - Dissipateur | 1 |
|  - Boutons 6x6x12	| 3 |  - USB Female Type A | 1 |
|  - Jack 3,5mm | 1 |  - Led 3mm | 1 |
|  - Bouton On/Off SK12D07 | 1 |  - Speaker 8 Ohm 1W | 1 |
|  - MCP23017 GPIO	| 1 |  - 12x12 Boutons | 4 |
|  - Resistance de 10K | 4 |	 - Boutons angles droits 12x12 | 2 |		
|  - LM339 Comparateur	| 1 |  - Capuchons pour bouton 6x6 | 3 |
|  - Potentiometre 10k | 1 |  - Entretoise en nylon | 8 |
|  - Batterie 3000mAh	| 1 |  - Chargeur 5V | 1 |
|  - Condensateur de 0,01µf | 2 |  - RetroBox PCB | 1 |
|  - Condensateur de 10µf | 2 |  - Plexiglass | 2 |
|  - Resistance de 270 Ohm | 2 |  - Boîte Noire | 1 |
|  - Resistance de 150 Ohm | 2 |  - Raspberry Pi 0 W | 1 |
|  - Carte SD 8gb | 1 |  - Flyers | 1 |

*Update du 17/06/18*


Si tout est ok, parfait, vous pouvez commencer l'assemblage !

## Description complète des composants :

#### RetroBox's PCB
----------------
La PCB est une plaque qui a elle seule supporte tous les composants !

C'est juste une plaque avec des fils en cuivres pré-intégrés.  
Cela permet d'avoir un beau rendu et de qualité. Petit tips, vous voyer souvent les carte éléctroniques en verte, et bien on peut mettre les couleurs sue l'on veut ! C'est juste pour protèger le cuivre...
![image alt text](https://static.retrobox.tech/img/composants/PCB.png)

#### Bouton 6x6mm
----------------
C'est simplement des boutons, comme pour votre lumière, ils servent pour Start, Select et Restart.

![image alt text](https://static.retrobox.tech/img/composants/6x6_Button.png)

#### Resistances de 10k
----------------
Celle ci servent de pull-up pour le joystick, 5V = 1 ; 0V= 0/. La raspberry compare le courant du pin.

![image alt text](https://static.retrobox.tech/img/composants/10KRESISTOR.png)

#### Bouton 12x12mm
----------------
C'est les mêmes boutons que les 6x6mm, sauf qu'ils sont plus gros ! Ils servent pour A, B, X, Y.

![image alt text](https://static.retrobox.tech/img/composants/12x12_Button.png)

#### Potentiomètre B103
----------------
C'est une résistance variable de 10k ohm pour le son, il dissipe le signal par la chaleur lorsque il n'est pas à fond.

![image alt text](https://static.retrobox.tech/img/composants/B103.png)

#### Mini HDMI vers HDMI
----------------
Cela permet de joeur sur grand écrans ! Comme la convention habituel des ports HDMI sont gros, celui de la raspberry pi étant trop petit, nous avons besoin d'un adaptateur, branchez le à votre TV et démarrez la console !

![image alt text](https://static.retrobox.tech/img/composants/HDMI.png)

#### Dissipateur thermique
----------------
Et oui sa chauffe dans le raspberry pi ! L'overclock du processeur pour jouer au jeux plus fluidement, oblige un dissipateur, sinon le processeur partirai en fumé !

![image alt text](https://static.retrobox.tech/img/composants/HEATSINK.png)

#### Batterie
----------------
Pour avoir la meilleur autonomie (~6h-7h), nous vous avons concocté une batterie de 3000mAh ! Vous ne saurez plus vous arretez...

![image alt text](https://static.retrobox.tech/img/composants/BATTERY.png)

#### Potentiomètre B103
----------------
Cette prise jack de 3.5mm laisse place a une sortie casque, lorsque vous le branché le son de l'enceinte se coupe automatiquement ! Faites attention a vos oreilles, n'écoutez pas trop fort, le son est trop fort sur le casque.

![image alt text](https://static.retrobox.tech/img/composants/JACK.png)

#### Joystick
----------------
Le joystick permet de contrôler la console, comme il est analog, nous avons besoin d'avoir un signal digital, c'est pour cela que le LM339 est là !

![image alt text](https://static.retrobox.tech/img/composants/JOYSTICK.png)

#### LED 3mm
----------------
Elle indique lorsque la console est en marche ou pas.

![image alt text](https://static.retrobox.tech/img/composants/LED.png)

#### Comparrateur LM339
----------------
La puce LM339 transforme le signal analog du joystick vers un signal digital pour le Raspberry Pi.

![image alt text](https://static.retrobox.tech/img/composants/LM339.png)

#### Chargeur 5V
----------------
Ce chargeur micro-USB 5v, permet de charger la console a vitesse grand V ! Fonctionne aussi avec les téléphones !

![image alt text](https://static.retrobox.tech/img/composants/5VCHARGER.png)

#### Condensateur 10nF
----------------
Il sert pour le filtre passe-bas de la console, pour avoir un meilleur son !

![image alt text](https://static.retrobox.tech/img/composants/10NFCAPACITOR.png)

#### Condensateur 10µF
----------------
Idem que le 10µF !

![image alt text](https://static.retrobox.tech/img/composants/10UFCAPACITOR.png)

#### Prise Micro-USB
----------------
C'est la même prise que vos téléphones, elle permet de charger la console.

![image alt text](https://static.retrobox.tech/img/composants/MICROUSB.png)

#### Circuit protecteur et chargeur 5V
----------------
Cette petite plaque gère toute la partie puissance de la console, elle indique le statut de la batterie et la protège des courts circuits ou de décharges profondes !

![image alt text](https://static.retrobox.tech/img/composants/DD06CVSA.png)

#### ISP MCP23017
----------------
La puce MCP23017 permet de rajouter des sorties sur le raspberry pi, il en rajoute 16 !

![image alt text](https://static.retrobox.tech/img/composants/MCP23017.png)

#### L'amplificateur PAM8403
----------------
C'est un petit amplificateur de classe D de 3W, cela permet un son puissant pour les enceinte, ou le casque.

![image alt text](https://static.retrobox.tech/img/composants/PAM8403.png)

#### Le micro-ordinateur Raspberry Pi Zero W
----------------
le Raspberry Pi est le coeur de la console, il gère tous, avec ces 1ghz de processeur et 512mb de ram, on peut donc jouer avec RetroPie

![image alt text](https://static.retrobox.tech/img/composants/RASPBERRY.png)

#### Resistance
----------------
![image alt text](https://static.retrobox.tech/img/composants/RESISTOR1.png)

#### Resistance
----------------
![image alt text](https://static.retrobox.tech/img/composants/RESISTOR2.png)

#### Bouton 12x12mm à angle droit
----------------
Et encore des boutons, cela sont pour les actions L et R de la console.

![image alt text](https://static.retrobox.tech/img/composants/RIGHTANGLE12X12.png)

#### Ecran de 3.2 pouces
----------------
Ce petit écran de 3.2 pouces fonctionne avec un protocole nommé SPI, ce qui nous limite sur la taille de l'écran, pour avoir du 60 FPS, le 3.5 pouces tournaient sur du 20 FPS... Injouable...

![image alt text](https://static.retrobox.tech/img/composants/SCREEN.png)

#### Carte SD
----------------
La carte SD pré-integrée de 8GB suffit pour mettre beaucoup de jeux, assez du moins pour ne pas avoir le temps de tous les essayer...

![image alt text](https://static.retrobox.tech/img/composants/SDCARD.png)

#### Bouton ON/OFF
----------------
Et c'est le dernier boutton, le principal, il gère l'alimentation de la console, ON ou OFF, rien de plus simple !

![image alt text](https://static.retrobox.tech/img/composants/SLIDE_SWITCH.png)

#### Entretoises
----------------
Les entretoises permettent de séparer le plexiglass de la PCB, ce qui protège la console.

![image alt text](https://static.retrobox.tech/img/composants/SPACER.png)

#### Enceinte de 1W
----------------
Cette petit enceinte de 8 ohm et 1 W, à une puissance équivalente à une Gameboy Advance !

![image alt text](https://static.retrobox.tech/img/composants/SPEAKER.png)

#### Port USB type A
----------------
Vous voulez jouer entre amis ? Branchez-y vos manettes dessus ! Ou même des clès USB, Ou encore plus fou, vos téléphones pour les recharger !

![image alt text](https://static.retrobox.tech/img/composants/USb.png)

##### Après avoir faite cette petite présentation des composants de la console, vous alelz pouvoir commencer l'assemblage en cliquand sur suivant !
