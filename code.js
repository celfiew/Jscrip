/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: '',
  edad: 0,
  ciudad: '',
  interesPorJs: '',
};

const listado = [
  {
    imgUrl: 'https://huguidugui.files.wordpress.com/2015/03/html1.png',
    lenguajes: 'HTML y CSS',
    bimestre: '1er bimestre',
  },
  {
    imgUrl: 'https://jherax.files.wordpress.com/2018/08/javascript_logo.png',
    lenguajes: 'Javascript',
    bimestre: '2do bimestre',
  },
  {
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
    lenguajes: 'React JS',
    bimestre: '3er bimestre',
  },
];

const profileBtn = document.querySelector('#completar-perfil');
const materiasBtn = document.querySelector('#obtener-materias');
const verMasBtn = document.querySelector('#ver-mas');
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener('click', renderizarDatosUsuario);
materiasBtn.addEventListener('click', recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener('click', alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

  let nombre = prompt('ingresa tu nombre');
  datosPersona.nombre = nombre;
  let año = prompt('ingresa el año en que naciste');
  datosPersona.edad = new Date().getFullYear() - año;
  let ciudad = prompt('ingrese ciudad donde vives');
  datosPersona.ciudad = ciudad;
  let interes = confirm('Te interesa JavaScript?');
  interes == true ? (interes = 'Si') : (interes = 'No');
  datosPersona.interesPorJs = interes;
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let nombreHtml = document.getElementById('nombre');
  let edadHtml = document.getElementById('edad');
  let ciudadHtml = document.getElementById('ciudad');
  let interesHtml = document.getElementById('javascript');
  nombreHtml.innerText = datosPersona.nombre;
  edadHtml.innerText = datosPersona.edad;
  ciudadHtml.innerText = datosPersona.ciudad;
  interesHtml.innerText = datosPersona.interesPorJs;
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */

  listado.forEach((materia) => {
    materiasHtml = document.getElementById('fila');
    console.log(materiasHtml.childNodes);
    if (materiasHtml.childNodes.length < listado.length) {
      materiasHtml.innerHTML += `<container class='caja' ><img src= ${materia.imgUrl} alt=${materia.lenguajes}></img>
      <p class='lenguajes'>${materia.lenguajes}</p>
      <p class='bimestre'>${materia.bimestre}</p>
      </container>`;
    }
  });
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let sitio = document.getElementById('sitio');
  sitio.classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

let mensaje = document.getElementById('sobre-mi');

window.addEventListener('keydown', key);

function key(e) {
  if (e.key == 'f' || e.key == 'f') {
    mensaje.classList.remove('oculto');
  }
}
