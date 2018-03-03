# alegra-application
A test application for Alegra

## Librerías npm:

La aplicación requiere la instalación de las librerías que por defecto utiliza Ionic.
Para instalarlas ubique el directorio raíz del proyecto desde un terminal y ejecute el siguiente comando:

	$ npm install

## Plugins:

 Cordova Toast: Compatible con Android, iOS and WP8. El plugin permite mostrar un Toast nativo (popup de texto).
Para instalar usando el CLI de Ionic (y el Registro de Plugins de Cordova), ejecutar:

	$ cordova plugin add cordova-plugin-x-toast
	$ cordova prepare

 Cordova Barcode Scanner: Compatible con Android, iOS and WP8. El plugin permite abrir la cámara, escanear el código QR y regresar los datos.
Para instalar usando el CLI de Ionic (y el Registro de Plugins de Cordova), ejecutar:

	$ cordova plugin add https://github.com/phonegap/phonegap-plugin-barcodescanner.git

 Cordova Geolocation: Compatible con Android, iOS and WP8. El plugin permite obtener la geolocalización del usuario.
Para instalar usando el CLI de Ionic (y el Registro de Plugins de Cordova), ejecutar:

	$ cordova plugin add cordova-plugin-geolocation

 Cordova Whitelist: Permite solventar errores de conexión (http 404) durante el desarrollo.
Para instalar usando el CLI de Ionic, ejecutar:

	$ ionic plugin add https://github.com/apache/cordova-plugin-whitelist.git

 Cordova Splashscreen: Permite mostrar el Splashscreen.
Para instalar usando el CLI de Ionic, ejecutar:

	$ cordova plugin add cordova-plugin-splashscreen

 Cordova InAppBrowser: Permite abrir un navegador desde el dispositivo.
Para instalar usando el CLI de Ionic, ejecutar:

	$ cordova plugin add cordova-plugin-inappbrowser
