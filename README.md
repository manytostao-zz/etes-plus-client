# Aplicación cliente eTES +

Esta aplicación de Angular 5, generada con Angular CLI versión 1.6.7, 
es la capa de presentación del producto *electronic Total Enterprise 
Solution Plus (eTES +)*.

## Desarrollo
Para clonar el repositorio, ejecutar:  
  
`git clone https://dc-tfs-app.datys.cu/tfs/DSGE/EMP_POS/_git/etes-plus-client`  
  
Luego de clonado, instalar por **npm** el *node-sass* para la compilación
de los contenidos *scss*:   
 
`npm install --save node-sass --sass-binary-path=<carpeta_de_binarios>`  
  
donde *<carpeta_de_binarios>* es la dirección absoluta hasta la carpeta
local en que se encuentran los binarios de *node-sass*. Dichos binarios
se pueden descargar del [FTP](http://172.20.10.67:8081) del proyecto eTES +,
para las versiones 8 y 9 de NodeJs.  
  
**Nota**: Los binarios de *node-sass* tienen una correspondencia directa
con la versión instalada de NodeJS; a cada versión de NodeJS le corresponde
una versión de los binarios de *node-sass*, las cuales se pueden encontrar 
en [GitHub](https://github.com/sass/node-sass/releases).  

Luego de instalar *node-sass*, se debe crear en la carpeta local *node-modules/node-sass*
una carpeta vendor, dentro de la cual se crea una nueva carpeta nombrada
como la primera parte del nombre de los binarios. Dentro de esa carpeta se
ubicará una copia de los binarios, pero llevando solo la segunda parte
de su nombre. Ejemplo: si los binarios utilizados para instalar *node-sass*
son **win32-x64-59_binding.node**, luego de instalado se crea la carpeta
*node-modules/node-sass/vendor/win32-x64-59*, dentro de la cual se ubicarán
los binarios solo con el nombre **binding.node**.    
  
Después de instalado *node-sass*, se instalan el resto de dependencias con el comando:  
  
`npm install`  

Para levantar un servidor de desarrollo, solo se corre el comando:  

`ng serve`  
  
y se navega hacia `http://localhost:4200/`. La aplicación de recargará automáticamente
si se detecta algún cambio en el código fuente.

## Generación de código

Para la creación de nuevos elementos en la aplicación, se emplearán los
comandos de Angular CLI:  
  
* `ng generate component component-name` para generar un nuevo componente.
* `ng generate directive directive-name` para generar una nueva directiva.

## Compilación

Para construir la aplicación sin mantener un servidor de desarrollo corriendo,
se puede hacer uso del comando:  
  
`ng build`  
  
Los artefactos construidos se almacenarán en la carpeta `dist/`. 
Se puede emplear la bandera `-prod` para haceer una compilación de producción.

## Correr pruebas unitarias

Ejecutar el comando:  
  
`ng test`  
  
para correr pruebas unitarias vía [Karma](https://karma-runner.github.io).

## Correr pruebas end-to-end

Ejecutar el ciomando:  
  
`ng e2e`  
  
para correr pruebas end-to-end vía [Protractor](http://www.protractortest.org/).
  
**Nota**: Antes de correr cualquier prueba, se debe tener el servidor de
desarrollo corriendo con `ng serve`.

## Más ayuda

Para obtener más ayuda sobre Angular CLI, usar el comando`ng help` o
visitar leer [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
