<div align="center" color="#0094D2">
	<img src="https://raw.githubusercontent.com/RetroBox/RetroBox-Artworks/master/retrobox_logo.png" height="200" alt="W" /><br><br>
    
    
</div>

# Getting started avec RetroPie et RetroBox 

## Achetez une RetroBox :

Pour commander une RetroBox avec quelques accessoires, dirigez-vous vers la boutique [RetroBox Shop](http://retrobox.fr/shop).

Pendant que vous attendez que votre RetroBox arrive, vous pouvez commencer à préparer tous les fichiers, lire les manuels dont vous aurez besoin:

 
Si vous voulez tout installer (compétences sur Linux nécessaires)

* Recalbox : [Manual](FR-installation-manuelle-recalbox) (FR) (Attention, n'est plus supporté)

* Retropie :  [Manual](FR-installation-manuelle-retropie) (FR)

* Si vous voulez juste graver l'image sur la carte SD, aucune configuration est nécessaire

    * Suivez ce guide

## Première étape: Télécharger et graver l'image

Pour le moment, la dernière version est: 1.00 

Vous pouvez télécharger l'image ici: (lien vers gitlab)

Vous aurez besoin de Etcher.io pour la graver, vous pouvez télécharger ce logiciel ici: [https://etcher.io/](https://etcher.io/)

![image alt text](http://retrobox.happyblocks.info/project/Image/getting-started/RetroPie/image_2.png)

Une fois que vous avez gravé l’image, il vous suffit de brancher la carte SD dans la console, et de la démarrer! Cela fonctionnera parfaitement! (normalement)

Si vous avez des erreurs, dites-le nous et nous vous aiderons! `(Email @ ici.)`

## Deuxième étape: Premier démarrage

![image alt text](http://retrobox.happyblocks.info/project/Image/getting-started/RetroPie/image_3.png) ![image alt text](http://retrobox.happyblocks.info/project/Image/getting-started/RetroPie/image_4.png)

Vous avez installé avec succès RetroPie! Attendez de voir le bureau, connectez-la au wifi et passez à l'étape suivante!

Pour vous connecter au wifi, vous avez plusieurs possibilitées :

* En créant un fichier sur la carte SD dans `/boot/` et qui s’appelle : `wifikeyfile.txt`

		Avec les paramètres suivants :

![image alt text](http://retrobox.happyblocks.info/project/Image/getting-started/RetroPie/image_5.png)

Puis, redémarrez la console, allez dans "Wifi" puis dans “import wifi credentials from the text file”.

* Ou en connectant un clavier sur la console, puis aller dans "Connect to wifi network", sélectionner le réseau wifi et indiquer le mot de passe.

![image alt text](http://retrobox.happyblocks.info/project/Image/getting-started/RetroPie/image_6.png)  !![image alt text](http://retrobox.happyblocks.info/project/Image/getting-started/RetroPie/image_7.png)

## Deuxième étape: ajouter des jeux dans la RetroBox

Pour ajouter des jeux, c'est super simple! Vous avez beaucoup de possibilitées:

* **I**. Avec WinSCP, connectez-vous simplement sur la console en sftp, et ajoutez vos propres jeux

			Login : pi

			Password : raspberry

![image alt text](http://retrobox.happyblocks.info/project/Image/getting-started/RetroPie/image_8.png) ![image alt text](http://retrobox.happyblocks.info/project/Image/getting-started/RetroPie/image_9.png)

*  **II**. Avec windows [Samba] (oui c’est possible, aucun login est requis) :

![image alt text](http://retrobox.happyblocks.info/project/Image/getting-started/RetroPie/image_10.png) ![image alt text](http://retrobox.happyblocks.info/project/Image/getting-started/RetroPie/image_11.png)

Pour accéder au serveur SAMBA de la console : Taper `\\RETROPIE` dans la barre de recherche de windows, ou l'adresse IP de la machine.

Il suffit d'aller dans le dossier roms et faites glisser déposer vos roms!

*  **III**. Avec l'application, disponible sur iOS et Android, choisissez simplement votre OS et ajoutez vos propres jeux, avec la liste ou votre propre rom!

[APP PICTURES HERE]

* Plus d'informations ici:

[https://github.com/retropie/retropie-setup/wiki/Transferring-Roms](https://github.com/retropie/retropie-setup/wiki/Transferring-Roms)

## Conclusion :

Yay ! Vous avez réussi à installer RetroPie sur la RetroBox, amusez-vous!

## ![image alt text](http://retrobox.happyblocks.info/project/Image/getting-started/RetroPie/image_12.png) ![image alt text](http://retrobox.happyblocks.info/project/Image/getting-started/RetroPie/image_13.png)

(Crash bandicoot 3 Warped on PS1)

## Autres :

ASAP



