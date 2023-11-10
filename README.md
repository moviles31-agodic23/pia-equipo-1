Pa agregar tu codigo a tu pc tienes que ejecutar esto en la consola si ya esta logeada tu cuenta:
	git init
	git clone https://github.com/moviles31-agodic23/pia-equipo-1.git
	npm install

Creen su propias branch y modifican los modulos vacios que cree en el proyecto

Al final de cuentas tenemos 4 componentes principales que tendremos que tener que rifarnos con enrutamiento los cuales son:

	* Login			-> Emiliano: siguiendo el ejemplo del video de mas abajo y agregando un boton de registrar
	* Registrar		-> Emiliano: es casi lo mismo que el login solo q pos agrega a la base correos y eso

	* Perfil de usuario     -> Alejandro: Ng for con url de imagenes que tiene la base de datos y forma de modificar los perfiles
					      con los servicios de imagenes y perfiles

	* Feed			-> Etian: Que se pueda usar con ng for con una imagen de input, aqui seria una url de descarga de la base 
					  pero por mientras deja imagenes vacias para cuando me toque aser el servicio de imagenes
	* Detalle publicacion	-> Etian (Igual es casi lo mismo y no confundirnos si lo hace otro)

	No hay necesidad de pasar nada entre urls pq vamos a injectar AngularFireAuth

Yo (Alejandro) uno en el perfil de usuario todos los componentes ya que solo es enrutamiento

Para ver como van sin afectar al otro cambian el enrutamiento al componente que estan haciendo temporalmente para que lo muestre en home

Si ya ven q jala el q estan moviendo ya podemos entregarlo como avance

Colecciones en la base serian asi:

	Perfil:
		* id: string, generado por firestore por defecto
		* uid: string, identificador que te regresa el login
		* descripcion: string
	
	Publicacion:  // este es como cache pq para obtener una url se necesita hacer un request cada vez que es muy lento
		* id: string, generado por la base
		* uid: string, el del usuario que hizo la publicacion

	El correo y la contraseña estan fuera del alcanze del usuario y cuando vean el tuto de bloquear las rutas veran todo

	En cloud storage las imagenes tendran este formato:
		{uid}/{id}.jpg
	Donde uid es la carpeta del usuario actual que sera el uid de su login y id es el del campo generado por firebase en la 
	coleccion de publicacion

	Como los detalles ya estan verificados por usuario lo unico que se debe pasar es {id} por url

Servicios:

 	* Procedimiento para que todos tengan acceso a la base de datos por igual desde angular (Alejandro)
	* El de bloquear las rutas del tutorial (emiliano)
	* Un servicio de imagenes con los siguientes metodos: (Nayely)
		- Agregar imagen(event) // el uid del usuario logeado se puede obtener injectando el auth lo cual
  					// no necesitaria exponer por parametros
		- obtener lista imagenes () // no se necesitan parametros por el auth inyectado 
  					    // un arreglo de las url de las imagenes del usuario actual
	* Para cambiar descripcion donde el unico metodo seria cambiarDescripcion() sin parametros por le angular auth (Nayely)

**********************************************************************************************************************************************

Proyecto de figma donde dice los componentes de ionic q se pueden utilizar
	https://www.figma.com/file/s3hNcWuqIbVsLAr68ia2a2/PIA---App-de-Fotos?type=design&node-id=2162%3A6021&mode=design&t=3TebHMJjgM9RoNeA-1

**********************************************************************************************************************************************

Intro a firebase mega rapido
	https://www.youtube.com/watch?v=vAoB4VbhRzM

Que es una base de documentos
	https://aws.amazon.com/es/nosql/document/

Instalar angular pa la compu + unos ejemplos
	https://firebaseopensource.com/projects/firebase/firebase-tools/

CRUD rapido pa ver como funciona
	https://www.youtube.com/watch?v=t_YSrxj0wGY

Que es Cloud storage para las imagenes
	https://firebase.google.com/docs/storage?hl=es-419

Como agregar un bucket a la aplicacion
	https://firebase.google.com/docs/storage/web/start?hl=es-419

Como agregar imagenes a la base
	https://firebase.google.com/docs/storage/web/upload-files?hl=es-419#web-modular-api_1

Imagenes de angular a la base:
	https://dev.to/fayvik/uploading-an-image-to-firebase-cloud-storage-with-angular-2aeh

Para andar todos en la misma pagina del auth (ya tiene un ejemplo con bloquear rutas)
	https://www.youtube.com/watch?v=8VTxuIvMTlc
 
Que es rxjs
	https://www.youtube.com/watch?v=2LCo926NFLI&t=79s&pp=ygUEcnhqcw%3D%3D

Hot vs cold
	https://www.arquitecturajava.com/hot-vs-cold-observable-con-rxjs/

Seguir tuto desde el minuto 9:50 pa instalar android studio y compilar a java
	https://youtu.be/JuYZ2xdHw3o?t=602

Si no quieren instalar android virtual device usen este otro tuto 
pa abrirlo desde el cel
	https://www.youtube.com/watch?v=eaOB-KS-Qjk

Pero al final de cuentas solo usamos ionic serve  como siempre y si queremos ver como va en android usamos eso de cap add android 
y lo pasamos a android studio pa no generar un chingo de veces la misma aplicacion

**********************************************************************************************************************************************
