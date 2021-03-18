const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});

window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.getElementById('grid').classList.add('imagenes-cargadas');

	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
			evento.target.classList.add('activo');

			const categoria = evento.target.innerHTML.toLowerCase();
			categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
		});
	});
});

document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
	const busqueda = evento.target.value;
	grid.filter((item) => item.getElement().dataset.etiquetas.includes(busqueda.toLowerCase()));
});


$("#titulo").fadeOut("slow", function(){
	$("#titulo").animate({fontSize: '2.8cm'}).slideDown(1000);
})
	.delay(100).animate({fontSize: '1.5cm'}); 

$("#subtitulo").fadeOut("slow", function(){
	$("#subtitulo").slideDown(1900);
});

const overlay = document.getElementById('overlay');
	document.querySelectorAll('.grid .item img').forEach((elemento) => {
		elemento.addEventListener('click', () => {
			const ruta = elemento.getAttribute('src');
			overlay.classList.add('activo');
			document.querySelector('#overlay img').src = ruta;
			
		});
	});
document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
	overlay.classList.remove('activo');
});

overlay.addEventListener('click', (evento) => {
	evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
});

// const urlJson = "datos/data.json"
// $("body").prepend('<button id="btn-json">GET JSON</button>');
// $("#btn-json").click(() => {
// 	$.get(urlJson, function(respuesta, estado){
// 		if (estado === "success"){
// 			console.log(urlJson);
// 			let misDatos = respuesta;
// 			for(const dato of misDatos){
// 				$("body").prepend(`<div>
// 					<h3>${dato.name}</h3>
// 					<p>${dato.email}</p>
// 					<p>${dato.username}</p>
// 				</div>`)
// 			}
// 		}
// 	})
// });











// const Photos =[{id: 1, categoria: 'cielo', etiquetas:'estrellas cielo espacio noche', img:'img/estrellas.jpg'},
// {id: 2, categoria: 'cielo', etiquetas:'paisajes playa mar nubes atardecer', img: 'img/atardecer.jpg'},
// {id: 3, categoria: 'animales', etiquetas:'animales colibri flores aves', img: 'img/colibri.jpg'},
// {id: 4, categoria: 'naturaleza', etiquetas:'naturaleza flores margaritas', img: 'img/flores.jpg'},
// {id: 5, categoria: 'paisajes', etiquetas:'paisajes rio atardecer fernet', img :'img/rio.jpg'},
// {id: 6, categoria: 'cielo', etiquetas:'cielo luna llena noche', img: 'img/luna.jpg'}];


