![Logo Programing ](https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600)
# Reto modulo backend
## Objetivo
### En este desafio se busca aplicar los conocimientos aprendidos sobre HTTP, JavaScript, Node, Express, Mongo, Mongoose y JWT en la creación de un servicio RESTful que cumpla con lo que necesitaría un servicio como [dev.to](http://dev.to) para funcionar.

<hr>

## Requerimientos
![Entidades descripción](./assets/Entidades%201.png)

![Descripción de los endpoints](./assets/Requisitos%20methodos%20endpoints.png)

![Descipción de las herramientas](./assets/Herramintas%20a%20usar.png)

![Descripción de lso puntos extras](./assets/Puntos%20Extras.png)

![Descripción de los requisitos de entrega](./assets/Requisitos%20de%20Entraga.png)

<br>

## FUNCIONALIDAD:

### El presente repositorio fue probado desde el programa Imnsomnia de acuerdo a las siguiente especificaciones:

## I .-Comprobación de servidor

### La primer petición de prueba de conección al servidor se realiza mediante el metodo GET 

### En la dirección URL se usa la dirección de Local Host 8080 con diagonal o sin diagonal "/" al final y esto generará una respuesta de validación de conección 

### **Ejemplo: GET http://localhost:8080**
### **Ejemplo: GET http://localhost:8080/**

### *Resultado:*

![Ejemplo de petición a servidor](./assets/Ejemplo%20de%20Petici%C3%B3n%20a%20servidor.png)

## II.- Creación de un Usuario:

### Para crear un usuario se debe realizar una petición al servidor por medio de la URL usando el metodo POST.

### El codigo del servidor esta programado en el localhost 8080 por defecto.

### Se necesita usar la diagonal "/" y la instrucción user al final de la URL

### **Ejemplo: POST http://localhost:8080/users**


### Dentro del cuerpo y como parte de la petición se necesita incluir un objeto en formato JSON

### las propiedades del objeto estan registradas en la carpeta Users como parte del modelo de esta primer entidad.

### La petición completa y el resultado se muestran en el siguiente ejemplo:

### *Resultado:*
![Ejemplo de petición a servidor para Crear un Usuario](./assets/Ejemplo%20Crear%20Usuario.png)




## III .- Obtener la información de un usuario por medio de su ID. 

### Para obtener la información de un usuario existente se requiere realizar una petción mediante el método GET a la ruta "/users, esta instrucción users se escribe al final de la dirección  URL. Este End Point NO Requiere Autorización.

## Después del dirección users se utiliza una ID valida de un user existente para consultar.

### El codigo del servidor esta programado en el localhost 8080 por defecto.

### **Ejemplo: GET http://localhost:8080/users/ID**

<br>

### La petición completa y el resultado se muestran en el siguiente ejemplo:

### *Resultado:*
![Ejemplo de petición a servidor para listar user por su ID](./assets/Consulta%20de%20user%20por%20ID.png)


## IV .- Inicialización de Sesión 

### Para otorgar un nuevo JWT cada que es llamado se realiza la petición mediante el metodo POST.

### Se complemeta la URL escribiendo despés de la dirección:  /auth/login

### **Ejemplo: POST  http://localhost:8080/auth/login**

### Dentro del body de la petición se escribe, en formato JSON, el e-mail y el password necesarios y existentes para generar un toke e iniciar sesión 

### *Ejemplo del Resultado:*

![Ejemplo de petición a servidor para generar token e iniciar sesión](./assets/Ejemplo%20de%20Auth%20Login.png)

## V Creación de un Nuevo Post

### Para crear un nuevo post, el post creado será asignado al usuario que llamó este endpoint por lo que se requiere el id del user. Este End Point Requiere Autorización.

### Para crear un post se debe realizar una petición al servidor por medio de la URL usando el metodo POST.

### El codigo del servidor esta programado en el localhost 8080 por defecto.

### Se necesita usar la diagonal "/" y la instrucción posts al final de la URL

### **Ejemplo: POST http://localhost:8080/posts**


### Dentro del cuerpo y como parte de la petición se necesita incluir un objeto en formato JSON

### las propiedades del objeto estan registradas en la carpeta posts.model.

### Se necesita contar con el id de un usuario ya existente para poder realizar una petición exitosa.
<br>

### **Ejemplo: (contenido del body) {**
###	**"title": "post 2",**
###	**"imagen": "https://jessicaquero.b-cdn.net/wp-content/uploads/2018/02/Portada-Ideas-Creativas-Instagram-Actualizado.jpg",**
### **"body": "texto contenido texo",**
### **"user": "64ec2df4e40b43f291916293"**
### **}**
<br>




### La petición completa y el resultado se muestran en el siguiente ejemplo:

### *Resultado:*
![Ejemplo de petición a servidor para Crear un Usuario](./assets/Ejemplo%20Crear%20Usuario.png)



## VI .- Obtener una lista de Todos los Posts


### Para crear una lista de los posts existentes, se requiere realizar una petción mediant el metodo GET a la ruta "/posts, esta instrucción posts se escribe al final de la dirección  URL. Este End Point NO Requiere Autorización.

### El codigo del servidor esta programado en el localhost 8080 por defecto.

### **Ejemplo: GET http://localhost:8080/posts**

<br>




### La petición completa y el resultado se muestran en el siguiente ejemplo:

### *Resultado:*
![Ejemplo de petición a servidor para listar todos los Posts](./assets/Listas%20todos%20los%20Posts.png)




#### GET /posts
#### - Debe soportar el filtrado por titulo usando un query param llamado `search`




## VII Actualizar un post mediante su ID.

### Para actualizar la información de un post existente se requiere realizar una petción mediante el metodo PATCH a la ruta "/posts, esta instrucción posts se escribe al final de la dirección  URL. Este End Point Requiere Autorización.

## Después del dirección posts se utiliza una ID valida de un post existente para poderlo modificar.

### El codigo del servidor esta programado en el localhost 8080 por defecto.

### **Ejemplo: PATCH http://localhost:8080/posts/ID**

### dentro del cuerpo (body) de la petición se escribe un objeto JSON con los datos que se deseen modificar

<br>

### La petición completa y el resultado se muestran en el siguiente ejemplo:

### *Resultado:*
![Ejemplo de petición PATCH a posts para actualizar un post mediante su ID](./assets/Actualizar%20Post%20por%20su%20ID.png)



## VIII Borrar un post mediante su ID.

### Para borrar la información de un post existente se requiere realizar una petción mediante el metodo DELETE a la ruta "/posts, esta instrucción posts se escribe al final de la dirección  URL. Este End Point Requiere Autorización.

## Después del dirección posts se utiliza una ID valida de un post existente para poderlo modificar.

### El codigo del servidor esta programado en el localhost 8080 por defecto.

### **Ejemplo: DELETE http://localhost:8080/posts/ID**

<br>

### La petición completa y el resultado se muestran en el siguiente ejemplo:

### *Resultado:*
![Ejemplo de petición DELETE a posts para remover un post mediante su ID](./assets/Ejemplo%20de%20Post%20Borrado%20por%20su%20ID.png)


