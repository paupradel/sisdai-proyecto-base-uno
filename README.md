# sisdai-proyecto-base-uno

Este repositorio contiene la primera versión de la base para levantar un dominio con los requerimientos mínimos para un 
proyecto que utilice el Sistema de Diseño y Accesibilidad para la Investigación. Esta primera versión actualmente se 
encuentra deprecada y se puede encontrar una segunda versión en funcionamiento en
[este repositorio](https://github.com/salsa-community/sisdai-proyecto-base).

**Debido a lo anterior a esta versión (1.0.0) ya no se le da mantenimiento y se conserva aquí como referencia a otros 
desarrollos que aún la puedan estar utilizando.**
___

## Requerimientos

Para utilizar este proyecto necesitas tener previamente instalado

* [node](https://nodejs.org/en/download/) v14.16.1
* [npm](https://www.npmjs.com/get-npm) 6.14.12
* [vue-cli](https://cli.vuejs.org/guide/installation.html) @vue/cli 4.5.12

## Para comenzar

1. Clonar este repositorio
2. Cambiar el nombre a la carpeta al nombre del proyecto
3. Cambiar el nombre del proyecto en el package.json
4. `git remote rename origin proyecto-base-uno` para cambiar el nombre del link del repo

* Este repo remoto solo se utilizará para jalar cambios del proyecto base con `git pull proyecto-base-uno main`, nunca para subir.

5. `git remote add origin git@github.com:usuario/repositorio.git` para agregar a origin el repo del proyecto

* en este repositorio se debe actualizar el proyecto normal como siempre
* para subir cambios `git push origin main`
* para jalar cambios `git pull origin main`
* o en cualquiera que sea la rama en la que se este trabajando. `git push origin nombrerama` el punto es recordar
  siempre utilizar `origin` para lo relacionado al proyecto.

## Instalación

Instala las dependencias del proyecto

```
npm install
```

## Configuración

### Metadados

El `index.html` dentro de la carpeta `public/` tiene en el `head` los meta tags de OpenGraph y TwCard para compartir en
redes. Los metadatos de titulo y descripcion se cargan con las variables de entorno. Pero es necesario escribir los
siguientes datos, dependiendo de las rutas absolutas del proyecto en producción.

```html

<meta property="og:url" content=" "/>
<meta property="og:image" content=" "/>
<meta name="twitter:image" content=" ">
```

### Título y Descripción

Las variables de título y descripción se utilizan en los meta tags de la cabecera del html y como parte del mensaje de
alerta cuando no se tiene activado javascript en el navegador.

Edita las variables en el archivo `.env`, `.env.pruebas` y `env.production` en la raiz del proyecto.

```
VUE_APP_TITLE = titulo nuevo del proyecto
VUE_APP_DESCRIPTION = descripción del proyecto
```

### ENI domain

Esta variable se utilizan en los meta tags de la cabecera del html. Para escribir la base de rutas de los capítulos y
subcapítulos, ligandolos al entorno para el que se compila

Edita las variables en el archivo `.env`, `.env.pruebas` y `env.production` en la raiz del proyecto.

```
VUE_APP_ENI_DOMAIN = https://url-del-eni.conacyt.mx
```

### Matomo siteId

Si esta variable `VUE_APP_MATOMO_SITEID` es diferente de 0 se configura la libreria de vue-matomo para la aplicación. Se
puede utilizar en cualquier ambiente, por si se necesitaran hacer pruebas en el sitio de desarrollo.

Edita la variable en el archivo `.env`, `.env.pruebas` y `env.production` en la raiz del proyecto.

```
VUE_APP_MATOMO_SITEID = 0
```

### Configuración para entorno local

La variable `VUE_APP_BASE_ROUTE` en el archivo `.env` apuntando a raiz.

```
VUE_APP_BASE_ROUTE = /
```

### Configuración local de subfolder para Pruebas y Producción

Cambia el nombre de la carpeta pública editando la variable `VUE_APP_BASE_ROUTE` de los archivo `.env.pruebas`
y `env.production`. De preferencia ambos entornos deben tener la misma subcarpeta, para comprobar que esté bien la
configuración en pruebas, antes de salir a producción.

```
VUE_APP_BASE_ROUTE = /nombredelsubfolder/
```

### Configuracion en el servidor de subfolder en Producción

#### Apache

Esta guardada la configuracion del subfolder en la carpeta `public` del proyecto en el archivo `.htaccess``

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /nombredelsubfolder
  RewriteRule ^nombredelsubfolder/index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /nombredelsubfolder/index.html [L]
</IfModule>
```

#### nginx

Nunca he tenido un servidor con nginx pero este tutorial que me encontré se ve bueno
[deploy vue with nginx on sub path](https://medium.com/h-lab/how-to-deploy-vue-with-nginx-on-sub-path-ed8eadbc1bc5)

___

## Scripts

### Instalar dependencias

```
npm install
```

### Correr local

```
npm serve
```

### Compilar para develop

```
npm run dev
```

### Compilar para producción

```
npm run build
```
