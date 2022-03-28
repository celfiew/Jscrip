# Jscrip

CONSIDERACIONES
>Solo deberán crear código Javascript en el archivo code.js, puntualmente en los espacios marcados dentro de las funciones establecidas.
Bajo ninguna circunstancia modiﬁquen el resto de los archivos. Obviamente puedenrevisartantoelHMTLcomoelCSS,peronosedeberealizarcambioalgunoya que no impactarán en lacorreccióndelproyecto.SoloseevaluaráelcódigoJavaScript por parte de los profesores a la hora de corregir.


>PUNTO 1 Desarrollar la función para consultar al usuario los siguientes datos:
● nombre ● año de nacimiento ● ciudad ● si le interesa Javascript
Los datos obtenidos deberán ser almacenados dentro del objetodatosPersona.
➔ Tips ◆ La propiedad edaddebesercalculada,algotansimplecomorestarel año actual menos el año de nacimiento. ◆ No se preocupen si aún no se cumplió el mes exacto. Tampoco es necesario usar el objeto Date.

>PUNTO 2 Desarrollar la función para renderizar losdatosdelusuario,apartirdelainformación recolectada enlafunciónanterioryalmacenadaenelobjetodatosPersona.Paraello, utilizar los elementos HTML que se encuentran en elarchivoindex.html,modiﬁcando los mismos con Javascript.
➔ Tips ◆ No está permitido editar el documento index.html, cualquiercambio debe realizarse utilizando Javascript.
◆ Ubica los datos del objeto en el<span>que corresponda.

>PUNTO 3 Desarrollar la función que recorra el listado y renderizarunaespeciedetarjetaconla información de cada materia. Prestar atención, cada una de las clases CSS son necesarias para conservar el diseño:
1. Cada tarjeta contenedora deberá tener la clase'caja' 2. Dentro de cada contenedor se deberá incluir: a. una imagen con su correspondiente src y un alt que indique los lenguajes. b. un párrafo que tenga las clase‘lenguajes’y muestrelos mismos. c. un párrafo que tenga las clase‘bimestre’y muestreel bimestre. 3. Al volver a clickear el botón “Obtener materias”, no deberían volver a renderizarse las materias. ➔ Tips ◆ Cada ‘caja’ se debe inyectar dentro del contenedor que ya se encuentra en el archivo index.html con el id'ﬁla'.

>PUNTO 4 Desarrollar lafunciónquepermitaalbotóndealternartemafuncionarcorrectamente cada vez que se haga click.
1. Utilizar el elemento con el id‘sitio’como nodo dereferencia. 2. Implementar en el elemento la clase‘dark’ya creadaen el CSS. ➔ Tips ◆ El elemento ‘sitio’ es simplemente un contenedor que envuelve todo el resto de los elementos visibles.

>PUNTO 5 Finalmente, agregar un listener en nuestra página que nos permita captar el evento de teclado cuando presionamos la teclaF.
1. Captar cuando se presiona una tecla. 2. Si la tecla presionada es la F, al texto del párrafo ‘sobre-mi’ se le deberá eliminar la clase que lo mantiene oculto, ➔ Tips ◆ En este caso la teclanodebealternarlavisibilidad,solamentedesocultar por única vez.
