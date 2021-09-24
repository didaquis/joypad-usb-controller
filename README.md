# Joypad-USB-controller

Este proyecto permite detectar dispositivos conectados por USB, así como reconocer patrones en el polling de comunicación con el ordenador. 

El proyecto ha sido desarrollado usando un mando de consola USB (Lakeview Research WiseGroup Ltd, MP-8866 Dual Joypad) y una Raspberry PI (sistema operativo: Raspberry Pi OS) .

## Requisitos para ejecutar el proyecto
* Node.js 14 o superior
* Linux OS (Ubuntu, Raspberry Pi OS, Debian, ...)
* Puerto USB
* Dispositivo USB con botones o pulsadores

## Configurar el proyecto
El proceso de configuración consta de varios pasos. Asegúrate de cumplir los requisitos técnicos para arrancar el proyecto e instalar las dependencias. 

En el primer paso vamos a detectar e identificar tu dispositivo USB. 
En el segundo paso monitorizaremos el dispositivo para identificar las comunicaciones a través del puerto USB.
En el tercer paso modificaremos el fichero de configuración de nuestro dispositivo.

### Primer paso: Detectar los dispositivos USB conectados
Ejecuta el comando `npm run configure-device-step-one`. La aplicación tardará unos instantes en transpilarse y luego se iniciará. Al iniciarsr, comenzará un proceso que dura 20 segundos (deja que el proceso termine, no lo interrumpas). Durante esos segundos suceden dos cosas: 
* La aplicación listará información sobre los dispositivos USB actualmente conectados
* La aplicación estará escuchando todos aquellos dispositivos USB que se conecten o desconecten al equipo. Si algún dispositivo se conecta o desconecta, la aplicación te indicará el valor del "vendorId" y del "productId". 
Vas a necesitar esos valores para monitorizar el dispositivo USB.

### Segundo paso: Monitorizar las comunicaciones de un dispositivo USB conectado
Para realizar este paso necesitas los valores de "vendorId" y "productId" del dispositivo que quiera monitorizar. Si no tienes esos valores, debes realizar el paso anterior. 
Ahora localiza el fichero "monitorDevice.ts" y busca una constante llamada "TARGET_DEVICE". Modifica sus valores con la información del "vendorId" y "productId" del dispositivo que quieras monitorizar. 
Asegúrate de que tu dispositivo USB está conectado. 
Ahora vamos a ejecutar el comando `npm run configure-device-step-two`. La aplicación tardará unos instantes en transpilarse y luego se iniciará.

### Tercer paso: Detectar los dispositivos USB conectados


### Solución a errores comunes: 

> LIBUSB_ERROR_ACCESS

Prueba a usar `sudo` antes del comando que estés utilizando.

> LIBUSB_ERROR_BUSY

La última vez que se ejcutó el programa no finalizó correctamente, y ahora el acceso al puerto está bloqueado


## Información para desarrollo

##### `npm run dev`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

##### `npm run build`

Builds the app at `build`, cleaning the folder first.

##### `npm run start`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.

##### `npm run lint`

This run the linter.

##### `npm run purgue`

Remove the folders: "build", "coverage" and "node_modules".

##### `npm run test`

Execute the test with coverage report.

##### `npm run test:watch`

Execute test using watch option.
