# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Estrucutura de portfolio

node_modules/: Esta carpeta contiene todas las dependencias de tu proyecto de React. No debes modificar nada en esta carpeta manualmente; npm se encarga de gestionar las dependencias.

public/: Esta carpeta contiene archivos públicos que se copian directamente en la raíz del directorio de construcción. El archivo index.html aquí es el punto de entrada principal de tu aplicación. Puedes editar index.html para agregar metadatos, enlaces a tus propios scripts o estilos, entre otras cosas.

src/: Aquí es donde se encuentra la mayor parte de tu código fuente.

src/index.js: Punto de entrada de tu aplicación. Aquí se importa el componente raíz (generalmente App.js) y se renderiza en el elemento root del DOM.
src/App.js: El componente raíz de tu aplicación. Aquí puedes construir la estructura general de tu aplicación y agregar componentes adicionales.
src/App.css: Archivo de hoja de estilo para el componente App.js. Puedes aplicar estilos globales aquí.
src/components/: Carpeta donde puedes organizar tus componentes reutilizables. Puedes reemplazar los componentes generados por create-react-app con tus propios componentes.
src/logo.svg: Una imagen de logo utilizada en el ejemplo de la aplicación generada.

src/serviceWorker.js: Un archivo que configura el registro de un Service Worker, que es una característica para permitir que tu aplicación funcione offline y cargue más rápido en visitas posteriores. Puedes omitir esto si no planeas utilizar Service Workers.

src/setupTests.js: Archivo de configuración para pruebas. Puedes configurar ajustes globales de pruebas aquí.

src/index.css: Archivo de hoja de estilo global para tu aplicación. Puedes agregar estilos globales aquí.

src/index.test.js: Archivo de prueba para el archivo index.js.

public/favicon.ico: Icono de la aplicación que se muestra en la pestaña del navegador.

public/manifest.json: Archivo de manifest para PWA (Progressive Web App). Define información sobre la aplicación cuando se instala en un dispositivo.

public/robots.txt: Archivo que informa a los motores de búsqueda cómo rastrear tu sitio.

public/logo192.png y public/logo512.png: Logotipos utilizados en los metadatos de la aplicación.