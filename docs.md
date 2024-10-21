## Health check

- Unicamente valida el estado del servidor, por que?
  El propósito es solo validar que mi servidor esta caído sino tengo que levantar otro, de lo contrario estaría levantando servidores en un bucle infinito y no me daría cuenta que es la base de datos que no funciona.

## flujo outside in

- Desarrollar desde el punto de vista de nuestros clientes

## unhandled errors

estos no deben ser presentados al usuario, por que?

- No sabemos que información puede que estemos mostrando, por lo que se debe enviar un test 500

## testing

-los datos de del est de aceptación debe cumplir los términos visibles para el cliente, en el casos de course create este test solo response a un estatus 200 pero no nos verifica si el recurso se creo correctamente, por lo que se puede agregar un test para verificar que el recurso se creo correctamente mas adelante en la recuperación
para est tenemos diferente tipo e test por lo que nos podemos apoyar en el test unitario .
La interfaz es sin sufijo o prefijo para poder adaptarla a las classes agregamos el por que, por ejemplo repository puede ser mongoRepository, postgresRepository, mysqlRepository, etc.

en casos de testing. a veces en los repos u otras clases debemos agregar clases para testear por ejemplo el dominio no ocupa el search pero nuestro repo si lo necesita para ver que se guardaron los datos
