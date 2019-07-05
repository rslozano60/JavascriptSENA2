var app = 
	new Vue({
	  el: '#app',
	  data: {
	  	show:false,
	  	check:false,
	  	Arraynombres:[],
	  	seleccionada:"",
	  	picked:"",
	    message: 'Hello Vue!',
	    tareas:[
	    	{text:"Correr"},
	    	{text:"Dormir"},
	    	{text:"Comer"}
	    ]
	    // show:"ESTA ES UNA NUEVA VARIABLE",
	    // persona:{
	    // 	nombre:"Carlos",
	    // 	apellido:"Garzón",
	    // 	fechanacimiento:{
	    // 		dia:15,
	    // 		mes:"enero",
	    // 		ano:1999
	    // 	}
	    // }
	  },
	  methods:{
	  	aprender(){
	  		this.show=!this.show
	  		console.log(this.show)
	  	},
	  	agregarTarea(){
	  		this.tareas.push(
	  			{text:this.message}
	  			)
	  		console.log(this.tareas)
	  	},
	  	eliminarTarea(index){
	  		console.log(index)
	  		// this.tareas.pop()
	  		this.tareas.splice(index,1)
	  	}
	  }
	})





// var array1=	[	
// 				"Violin",
// 				"Saxofon",
// 				"Bateria",
// 				"Bajo",
// 				"Guitarra",
// 			]
// var arraynum=	[	
// 				612,
// 				15,
// 				1,
// 				5,
// 				900,
// 			]
// document.
// getElementById("ejercicioArray")
// .innerHTML= array1.sort()
// console.log(array1)
// var text4= array1.unshift("Piano")
// var text= "APRENDIZ"
// document.
// getElementById("ejercicio1")
// .innerHTML= text.toLowerCase() + " sena"
// var textsplit= text.split("")
// document.
// getElementById("ejercicio2")
// .innerHTML= textsplit.join("+")
// document.
// getElementById("ejercicio3")
// .innerHTML= text.split("").reverse().join("");
// var textoarray=array1.toString()
// var textoarray2=array1.join("+")
// var textoarray3=array1.pop()
// console.log(array1)

















// console.log(cadena1.length)

// console.log(cadena1.charAt(0))
// console.log(cadena1.charAt(1))
// console.log(cadena1.charAt(2))
// console.log(cadena1.charAt(3))
// console.log(cadena1.charAt(4))

// console.log(cadena1.toLowerCase())
// console.log(cadena1.toUpperCase())


// var cadena2= "Nuevo"

// var cadenaNueva=cadena1.concat(cadena2)

// console.log(cadena1.endsWith("p"))
// console.log(cadena1.includes("rp"))

// console.log(cadena1.indexOf("bmw"))

// console.log(cadena1.slice(0,7))

// console.log(cadena1.split(" "))

// console.log(cadena1.substring(4,7))


//alert("ESTAMOS EMPEZANDO A USAR GIT")
//console.log("AHORA VAMOS A SUBIR NUESTROS ARCHIVOS A GIT HUB")
// var personas= [{
// 	nombre: "Axel",
// 	apellido:"Franco",
// 	cedula:"1234567895",
// 	edad: 19,
// 	peliculafavorita:"Crespusculo",
// 	generopelicula:"Romance Juvenil"
// },
// {
// 	nombre: "Fana",
// 	apellido:"Fontana",
// 	cedula:"1234567895",
// 	 edad: 30,
// 	 peliculafavorita:"Duro de matar 1",
// 	 generopelicula:"Accion"
// },
// {
// 	nombre: "Maria",
// 	apellido:"Posada",
// 	cedula:"1234567895",
// 	 edad: 8,
// 	 peliculafavorita:"Buscando a Nemo",
// 	 generopelicula:"Infantil"

// }]
//     console.log(personas)

// 	for (var i = 0; i < personas.length; i++) {
// 		alert("Hola "+ 
// 				personas[i].nombre+" "+
// 				personas[i].apellido+" de "+
// 				personas[i].edad+" años")
// 		if(personas[i].edad > 18)
// 		{	
			
// 			switch (personas[i].generopelicula) {
// 			  case 'Accion':
// 			    alert("Sus 3 peliculas recomendads son "+ 
// 			    	"Duro de matar 2"+
// 			    	" Rambo"+
// 			    	" John Wick")
// 			    break;
// 			  case 'Romance Juvenil':
// 			    alert("Sus 3 peliculas recomendads son "+ 
// 			    	"Bajo la misma estrella"+
// 			    	" Amanecer"+
// 			    	" Pueblito de papel")
// 			    break;
// 			  case 'Aventura':
// 			    alert("Sus 3 peliculas recomendads son "+ 
// 			    	" La isla del tesoro"+
// 			    	" Las aventuras de tintin"+
// 			    	" El viaje al centro de la tierra")
// 			    break;
// 			  case 'Comedia':
// 			    alert("Sus 3 peliculas recomendads son "+ 
// 			    	" Deadpool"+
// 			    	" La mascara"+
// 			    	" Zoolander")
// 			    break;
// 			  case 'Drama':
// 			  case 'Suspenso':
// 			    alert("Sus 3 peliculas recomendads son "+ 
// 			    	"El abogado del mal"+
// 			    	" 8 minutos antes de morir"+
// 			    	" la forma del h2o")
// 			    break;
// 			  default:
// 			    alert('Lo lamentamos, por el momento no sabemos de ' + personas[i].generopelicula + '.');
// 			}
// 		}else if(personas[i].edad >= 14 ){
// 			switch (personas[i].generopelicula) {
// 			  case 'Accion':
// 			    alert("Sus 3 peliculas recomendadas son "+ 
// 			    	" Como entrenar a tu dragon"+
// 			    	" Las cronicas de narnia"+
// 			    	" Hombres de negro")
// 			    break;
// 			  case 'Romance Juvenil':
// 			    alert("Sus 3 peliculas recomendadas son "+ 
// 			    	"Bajo la misma estrella"+
// 			    	" Amanecer"+
// 			    	" Orgullo y prejuicio")
// 			    break;
// 			  case 'Aventura':
// 			    alert("Sus 3 peliculas recomendadas son "+ 
// 			    	" el libro de la selva"+
// 			    	" Las aventuras de tintin"+
// 			    	" El viaje al centro de la tierra")
// 			    break;
// 			  case 'Comedia':
// 			    alert("Sus 3 peliculas recomendadas son "+ 
// 			    	" Spiderman lejos de casa"+
// 			    	" Toy story 4"+
// 			    	" Ace ventura")
// 			    break;
// 			  case 'Drama':
// 			  case 'Suspenso':
// 			    alert("Sus 3 peliculas recomendadas son "+ 
// 			    	"El rey leon"+
// 			    	" El gran showman"+
// 			    	" Siempre a tu lado")
// 			    break;
// 			  default:
// 			    alert('Lo lamentamos, por el momento no sabemos de ' + personas[i].generopelicula + '.');
// 			}
// 		}else{
// 			switch (personas[i].generopelicula) {
// 			  case 'Infantil':
// 			    alert("Sus 3 peliculas recomendadas son "+ 
// 			    	" Dumbo"+
// 			    	" Coco"+
// 			    	" Moana")
// 			    break;
// 			}

// 		}
// 	}





