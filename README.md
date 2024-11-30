# Semana 8 - Pruebas Automatizadas

Nombre | Correo
-- | --
Camila Alejandra Guayara | c.guayara@uniandes.edu.co
Juan Pablo Osorio Beltran | jp.osoriob1@uniandes.edu.co
Jaime Alonso | ja.alonso@uniandes.edu.co
Carlos Bayona | c.bayona@uniandes.edu.co

---------------------------------------------------------------------------------

### Instalacion Ghost
- Tener instalado docker en su computador
- Correr el siguiente comando ```$docker run -d --name some-ghost -e NODE_ENV=development -e url=http://localhost:3001 -p 3001:2368 ghost:5.96```

  NOTA: la version es importante la 5.96

- Crear usuario de ghost, guardar USUARIO y CONTRASEÑA para poderlas usar en las pruebas

## Paso a paso para ejecucion de pruebas
En este caso debemos hacer uso del directorio/carpeta del repositorio ```./cypress``` 

  
### Instalacion Cypress
- Instalar node
- Instala Cypres en nuestro computador de forma global: ```npm install cypress```
- Dado que el proyecto esta listo de forma local, ir en la terminal a la carpeta kraken del repositorio y poner el siguiente comando: ```npm install```
- Modifica archivo **cypress.config.js** que se encuentra en la carpeta **cypress** del repo, los datos a cambiar son los siguientes:
```
const params = {
        5:{
          'username': 'test@test.com',       /// EL USUARIO QUE SE HAYA CONFIGURADO PREVIAMENTE EN GHOST
          'password': 'XXXXXXXXXX',         /// EL USUARIO QUE SE HAYA CONFIGURADO PREVIAMENTE EN GHOST
          'url': 'http://localhost:3001/', /// Depende del puerto configurado para la version que necesite 
        },
        config.API_KEY = ''  // Mockaroo API

  }
```

- En la terminal ir a la carpeta de ./cypress
- Instalar las dependencias
  ```npm install```
- Correr las pruebas:
  ```npx cypress open```
- Se abre la interfaz de de Cypress
- Ir a pruebubas E2E
- Ejectuar las 120 pruebas en orden
