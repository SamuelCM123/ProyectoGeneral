# **Vue Login**

Exposición de como se puede estructurar un proyecto de Vue JS, con un ejemplo de inicio de sesión.

## **Verificaciones Previas**

A continuación, se describirán las verificaciones previas necesarias para la implementación de este proyecto:

- ✨ Verificación de Node: 

    ```bash
    node -v
    ```

    > **Nota**: Si el comando `node -v` genera un error, instale el entorno de **[Node JS](https://nodejs.org/es)**.

## **IDE Redcomendado**

[VSCode](https://code.visualstudio.com/) + [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets).

Si se utiliza Visual Studio Code, estás serían algunas extensiones recomendadas:

- ✨ [HTML](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
- ✨ [Javascript](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
- ✨ [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- ✨ [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- ✨ [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)

## **Pasos de Instalación**

A continuación, se muestrán los pasos de instalación para el montaje del proyecto:

1. ✨ **Clonación del repositorio**:

    ```sh
    git clone https://github.com/DanielGonzalez-Cistem/vue-login.git
    ```

2. ✨ **Situarnos en el proyecto**:

    ```sh
    cd "vue-login"
    ```

3. ✨ **Instalción de módulos de Node**:

    ```sh
    npm install
    ```

4. ✨ **Despliegue de Servidor en Desarrollo**:

    ```sh
    npm run dev
    ```

## **Generación de Bundle a Producción**

A continuación, se muestrán los pasos de generación del proyecto final:

1. ✨ **Generar bundle**:

    ```sh
    npm run build
    ```

2. ✨ **Despliegue de Servidor en Producción**:

    ```sh
    npm run preview
    ```

## **Práctica de Vue JS**

A continuación se describirán los objetivos de la práctica:

- Integrar botón para redireccionar a Registrar Usuario.
- Integrar un nuevo módulo para Registrar Usuario.
- Crearse una nueva ruta en el erutador.
- No debe funcionar como tal el formulario de Registrar Usuario, conque envíe un log de los valores que se recibe, es suficiente.