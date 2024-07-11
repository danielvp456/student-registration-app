# Configuración del Proyecto

### Preparación para el Setup del Proyecto

Sigue los siguientes pasos para configurar el proyecto en tu ambiente local:

1. **Clonar el repositorio:**
    
    ```bash
    git clone https://github.com/danielvp456/student-registration-app.git
    
    ```
    
2. **Crear el archivo .env:**
    - Abre la carpeta `student-registration-app`.
    - Crea un archivo `.env` en la raíz del proyecto.
    - Copia y pega las siguientes variables en el archivo `.env`:
        
        ```
        PORT=3000
        DB_HOST=localhost
        DB_PORT=3306
        DB_USER=root
        DB_PASSWORD=admin
        DB_NAME=spainuniversitydb
        
        ```
        
    - **Nota:** Modifica las variables según tu entorno local.
3. **Instalar Node.js:**
    - Asegúrate de tener Node.js instalado en tu máquina.
4. **Instalar dependencias:**
    - Abre una terminal dentro de la carpeta `student-registration-app`.
    - Ejecuta el siguiente comando para instalar las dependencias:
        
        ```bash
        npm install
        
        ```
        
5. **Ejecutar la aplicación:**
    - En la misma terminal, ejecuta el siguiente comando para iniciar el servidor:
        
        ```bash
        npm run dev
        
        ```
        
6. **Configurar MySQL:**
    - Asegúrate de tener MySQL instalado en tu entorno local.
    - Abre la consola de comandos de MySQL.
7. **Importar la base de datos:**
    - Copia y pega el código del archivo `./database/database.sql` en la consola de MySQL para crear las tablas necesarias.
8. **Configurar Postman:**
    - Abre la colección de Postman compartida por correo electrónico.

### ¡Listo! Ahora tu ambiente está preparado para pruebas.
