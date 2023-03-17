//Variables

let main;
let temperatura;
let botoncito;
let botoncito1;
let botoncito2;
let botoncito3;

let adivinanzas;
let label1;
let ar1;
let enviar;
let label2;
let ar2;
let label3;
let input1;
let contenedor;

let num_adivinanza1 = "";
let num_adivinanza2 = "";
let adivinanza = "";
let respuesta_a1texto;
let respuesta_a2texto;

let personaje_principal = "";
let nombre_jugador = "";
let apellido_jugador = "";
let anio_nac = "";
let credencial = "";

let manual = document.createElement("img");
manual.src = 'imagenes/manual.png';

let explotar = 0;
let correcto_bomba = 0;
let cuenta_regresiva = 90;
let correcto;
let incorrecto = 0;
let repeticion = 0;

let boton = "";
let desactivar_boton = "";
let dibujo_bomba;
let boton_bomba;
let clicks = 0 ;
let ronda_mala = false;

let cables = ""
let desactivar_cables = "";
let cables_contenedor;
let dibujo_cable1;
let dibujo_cable2;
let dibujo_cable3;
let dibujo_cable4;

let desactivar_numeros = "";
let combinacion = [];
let numeros_combinacion = [];
let respuesta = [];
let a = 0;
let dibujo_numylet;
let labelnumylet;

let lineas_colores = "";
let desactivar_lineas = "";
let lineas_contenedor;
let dibujo_linea1;
let dibujo_linea2;
let dibujo_linea3;
let dibujo_linea4;
let dibujo_numycol;
let combinacion_de_num;
let combinacion_colores = [];
let combinacion_numeros = "";
let desactivar_colores = "";
let rojo;
let amarillo;
let azul;
let naranja;
let verde;
let morado;

let bomba_terminada = 0;

let entrada_hab2 = false;
let entrada_hab3 = false;

//Autito
let canvas;
let ctx;
let FPS = 10;
let e = 0;

let autitox = 130;
let autitoy = 120;
let autitow = 20;
let autitoh = 30;

let moverx = 0;
let movery = 0;

//meta
let metax;
let metay;

//Obstaculos
let obstaculox;
let obstaculoy;
let obstaculoh;
let obstaculow;

let obstaculo2x;
let obstaculo2y;
let obstaculo2h;
let obstaculo2w;

let repeticion_auto = 1;
let gameOver = 0;
let win = 0;

let puntos;
let puntosEnContra;

let n = 1;

let intervalo;

let instrucciones;
let reempezar;
let termino_auto;

let tiendita ;

//Objetos

class Persona{
    constructor(nombre, apellido, anio){
        this.nombre = nombre;
        this.apellido = apellido;
        this.anio = anio;
    }
}

class Letras{
    constructor(numero, letra){
        this.numero = numero;
        this.letra = letra;
    }
}

let uno = new Letras(0, "A")
let dos = new Letras(1, "B")
let tres = new Letras(2, "C")
let cuatro = new Letras(3, "D")
let cinco = new Letras(4, "E")
let seis = new Letras(5, "F")
let siete = new Letras(6, "G")
let ocho = new Letras(7, "H")
const letras = [uno, dos, tres, cuatro, cinco, seis, siete, ocho];


//Introducción del juego

function iniciar(){

    sessionStorage.clear();
    main = document.getElementById("lienzo");

    main.style.background = "#1F1838 url('imagenes/fondo1.png') no-repeat center center";
     
    botoncito = document.createElement("button");

    botoncito.innerText = "Empezar";

    botoncito.id = "botonIniciar";

    botoncito.addEventListener("click", introduccion); 

    main.appendChild(botoncito);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&lang=es&units=metric&appid=6d7c680541c28fd76c12b1a9cae688b9`;

    fetch(url)
    .then( response => {return response.json() })
    .then(data => {
        temperatura = data.main.temp;
        console.log(temperatura)
    })
    .catch(error =>{
        console.log(error)
    })
}

function introduccion(){

    botoncito.remove();

    let introduccionTexto1 = document.createElement("h1")
    introduccionTexto1.innerText = "Es una fría y brumosa mañana... ";
    main.appendChild(introduccionTexto1);
    typingEffect(introduccionTexto1, 65);

    let introduccionTextouno = document.createElement("p")
    setTimeout(() => {;
    introduccionTextouno.innerHTML = `Con una temperatura actual de ${temperatura}C°`
    main.appendChild(introduccionTextouno);
    typingEffect(introduccionTextouno, 65);
    }, 3000)

    let introduccionTexto2 = document.createElement("p")
    setTimeout(() => {;
        introduccionTexto2.innerText = "Hoy en la mañana llegué a mi nuevo lugar de trabajo, en el cual debo desempeñar labores de tecnología. Este lugar es un poco extraño y confuso, y de cierta forma aterrador... ";
        main.appendChild(introduccionTexto2);
        main.style.background = "#1F1838 url('imagenes/fondo2.png') no-repeat center center";
        typingEffect(introduccionTexto2, 65);
    }, 6000)

    let introduccionTexto3 = document.createElement("p")
    setTimeout(() => {;
        introduccionTexto3.innerText = "Escuchas algo acercarse, es un auto a control remoto con una pantalla... ";
        main.appendChild(introduccionTexto3);
        main.style.background = "#1F1838 url('imagenes/fondo3.png') no-repeat center center";
        typingEffect(introduccionTexto3, 65);
    }, 18000)
    

    setTimeout(() => {

        introduccionTexto1.remove();
        introduccionTextouno.remove();
        introduccionTexto2.remove();
        introduccionTexto3.remove();

    }, 27000);

    let introduccionTexto4 = document.createElement("p")
    setTimeout(() => {;
        introduccionTexto4.innerText = "Bienvenido a tu primer día en Aumented reality, Nanotechnology and Arcade, 'A.N.A.' como verás tus compañeros ya comenzaron sus labores, te dejaré tu primera misión... ";
        main.appendChild(introduccionTexto4);
        main.style.background = "#1F1838 url('imagenes/fondo4.png') no-repeat center center";
        typingEffect(introduccionTexto4, 65);
    }, 28000)

    let introduccionTexto5 = document.createElement("p")
    setTimeout(() => {;
        introduccionTexto5.innerText = "¡Espera! -exclamas. ";
        main.appendChild(introduccionTexto5);
        main.style.background = "#1F1838 url('imagenes/fondo5.png') no-repeat center center";
        typingEffect(introduccionTexto5, 65);
    }, 40000)

    let introduccionTexto6 = document.createElement("p")
    setTimeout(() => {;
        introduccionTexto6.innerText = "Pero ya se había ido...  ";
        main.appendChild(introduccionTexto6);
        typingEffect(introduccionTexto6, 65);
    }, 42000)

    let introduccionTexto7 = document.createElement("p")
    setTimeout(() => {;
        introduccionTexto7.innerText = "Miles de preguntas abundan en tu cabeza, pero no hay tiempo que perder, debes comenzar...  ";
        main.appendChild(introduccionTexto7);
        typingEffect(introduccionTexto7, 65);
    }, 44000)


    setTimeout(() =>{ 

        botoncito = document.createElement("button");

        botoncito.innerText = "VER MISION";

        botoncito.id = "mision";

        botoncito.addEventListener("click", function m1(){

            mision1();
            introduccionTexto4.remove();
            introduccionTexto5.remove();
            introduccionTexto6.remove();
            introduccionTexto7.remove();

        })
        main.appendChild(botoncito);
    }, 51000)
}

//Efecto de tipear
function typingEffect(element,speed){

    let text = element.innerText;
    element.innerText = "";
    let i = 0;
    
    let timer = setInterval(function(){

      if(i < text.length){

        element.append(text.charAt(i));
        i++;      

      }else{   

        clearInterval(timer);
      }
    },speed)
    
}
  

//Mision 1
function mision1(){
    
    botoncito.remove();

    let mision1texto1 = document.createElement("p")
    mision1texto1.innerText = "La primera parte consiste en resolver algunas adivinanzas. ";
    main.appendChild(mision1texto1);
    main.style.background = "#1F1838 url('imagenes/fondo6.png') no-repeat center center";
    typingEffect(mision1texto1, 65);

    let mision1texto2 = document.createElement("p")
    setTimeout(() =>{ 
        mision1texto2.innerText = "¿Adivinanzas? ¿Qué clase de trabajo es este? -Piensas. ";
        main.appendChild(mision1texto2);
        typingEffect(mision1texto2, 65);
    }, 4000)

    setTimeout(() =>{

        mision1texto1.remove();
        mision1texto2.remove();

    }, 10000);

    setTimeout(() =>{

        adivinanzas = document.createElement("div");

        adivinanzas.innerHTML = `
        
            <label for="ar1" id="lar1">Primera ronda de adivinanzas, escoge un numero del 1 al 4 </label>
            <input type="number" min="1" max="4" id="ar1">
            <input type="submit" id="sar1">
            `;

        main.appendChild(adivinanzas)

        enviar = document.getElementById("sar1");

        enviar.addEventListener("click", AR1);

    }, 12000);
}

function AR1(){

    num_adivinanza1 = document.getElementById("ar1").value
     
    if (num_adivinanza1 >= 1 && num_adivinanza1 <= 4){

        adivinanzas.remove();
        adivinanza_r1(); 
    }
}

function adivinanza_r1(){

    adivinanzas = document.createElement("div");

    if (num_adivinanza1 == 1){

        adivinanzas.innerHTML = `
        
            <label for="ar" id="lar1">Tengo agujas y no se coser, tengo números y no se leer: _ _ _ _ _  (solo minúsculas)</label>
            <input type="text" id="ar">
            <input type="submit" id="sar">
            `;

        main.appendChild(adivinanzas);

        enviar = document.getElementById("sar");
        enviar.addEventListener("click", respuesta_a1);

    }else if (num_adivinanza1 == 2){

        adivinanzas.innerHTML = `
        
            <label for="ar" id="lar1">Es venta y no se vende, es ana pero no es gente: _ _ _ _ _ _ _  (solo minúsculas)</label>
            <input type="text" id="ar">
            <input type="submit" id="sar">
            `;

        main.appendChild(adivinanzas);

        enviar = document.getElementById("sar");
        enviar.addEventListener("click", respuesta_a1);

    }else if (num_adivinanza1 == 3){

        adivinanzas.innerHTML = `
        
            <label for="ar" id="lar1">¿Qué se encuentra entre playa y mar?: _ (solo minúsculas)</label>
            <input type="text" id="ar">
            <input type="submit" id="sar">
            `;

        main.appendChild(adivinanzas);

        enviar = document.getElementById("sar");
        enviar.addEventListener("click", respuesta_a1);

    }else if (num_adivinanza1 == 4){

        adivinanzas.innerHTML = `
        
            <label for="ar" id="lar1">A un caballo se puede parecer pero por sus rayas negras sabrás lo que es: _ _ _ _ _ (solo minúsculas)</label>
            <input type="text" id="ar">
            <input type="submit" id="sar">
            `;

        main.appendChild(adivinanzas);

        enviar = document.getElementById("sar");
        enviar.addEventListener("click", respuesta_a1);
    }
}

function respuesta_a1(){

    adivinanza = document.getElementById("ar").value;

    if (adivinanza == "reloj" || adivinanza == "ventana" || adivinanza == "y" || adivinanza == "cebra"){
        
        adivinanzas.remove()

        respuesta_a1texto = document.createElement("p")
        respuesta_a1texto.innerText = "Correcto ";
        main.appendChild(respuesta_a1texto);

        adivinanzas = document.createElement("div");
        adivinanzas.innerHTML = `
        
            <label for="ar2" id="lar2">Segunda ronda de adivinanzas, escoge un numero del 1 al 4 (distinto al anterior)</label>
            <input type="number" min="1" max="4" id="ar2">
            <input type="submit" id="sar2">
            `;

        main.appendChild(adivinanzas);

        enviar = document.getElementById("sar2");
        enviar.addEventListener("click", AR2);
    }else{

        let respuesta_a1texto = document.createElement("p")
        respuesta_a1texto.innerText = "Incorrecto ";
        main.appendChild(respuesta_a1texto);

        setTimeout(() => {respuesta_a1texto.remove();}, 2500);
    }
}

function AR2(){

    respuesta_a1texto.remove()

    num_adivinanza2 = document.getElementById("ar2").value;
    
    if (num_adivinanza1 != num_adivinanza2){

        if (num_adivinanza2 >= 1 && num_adivinanza2 <= 4){

            adivinanzas.remove()
            adivinanza_r2();
        }
    }else{

        let ad2 = document.createElement("p")
        ad2.innerText = "Debes escoger un numero distinto al de la primera adivinanza ";
        main.appendChild(ad2);

        setTimeout(() => {ad2.remove(); }, 2500); 
    }
}

function adivinanza_r2(){

    adivinanzas = document.createElement("div");

    if (num_adivinanza2 == 1){

        adivinanzas.innerHTML = `
        
            <label for="ar" id="lar1">Tengo agujas y no se coser, tengo números y no se leer: _ _ _ _ _  (solo minúsculas)</label>
            <input type="text" id="ar">
            <input type="submit" id="sar">
            `;
        main.appendChild(adivinanzas);

        enviar = document.getElementById("sar");
        enviar.addEventListener("click", respuesta_a2);

    }else if (num_adivinanza2 == 2){

        adivinanzas.innerHTML = `
        
            <label for="ar" id="lar1">Es venta y no se vende, es ana pero no es gente: _ _ _ _ _ _ _  (solo minúsculas)</label>
            <input type="text" id="ar">
            <input type="submit" id="sar">
            `;
        main.appendChild(adivinanzas);

        enviar = document.getElementById("sar");
        enviar.addEventListener("click", respuesta_a2);

    }else if (num_adivinanza2 == 3){

        adivinanzas.innerHTML = `
        
            <label for="ar" id="lar1">¿Qué se encuentra entre playa y mar?: _ (solo minúsculas)</label>
            <input type="text" id="ar">
            <input type="submit" id="sar">
            `;
        main.appendChild(adivinanzas);

        enviar = document.getElementById("sar");
        enviar.addEventListener("click", respuesta_a2);

    }else if (num_adivinanza2 == 4){

        adivinanzas.innerHTML = `
        
            <label for="ar" id="lar1">A un caballo se puede parecer pero por sus rayas negras sabrás lo que es: _ _ _ _ _ (solo minúsculas)</label>
            <input type="text" id="ar">
            <input type="submit" id="sar">
            `;
        main.appendChild(adivinanzas);

        enviar = document.getElementById("sar");
        enviar.addEventListener("click", respuesta_a2);
    }
}

function respuesta_a2(){

    adivinanza = document.getElementById("ar").value;

    if (adivinanza == "reloj" || adivinanza == "ventana" || adivinanza == "y" || adivinanza == "cebra"){
        
        adivinanzas.remove()

        respuesta_a2texto = document.createElement("p")
        respuesta_a2texto.innerText = "¡Correcto! Esto era parte de un calentamiento mental. Ahora necesito que vayas al edificio principal. ";
        main.appendChild(respuesta_a2texto);
        
        main.style.background = "#1F1838 url('imagenes/fondo2.png') no-repeat center center";

        botoncito = document.createElement("button");

        botoncito.innerText = "Ir a edificio principal";
    
        botoncito.id = "edif_principal";
    
        botoncito.addEventListener("click", function m2(){
            respuesta_a2texto.remove();
            mision2();
        });
    
        main.appendChild(botoncito);

    }else{

        let respuesta_a2texto = document.createElement("p")
        respuesta_a2texto.innerText = "Incorrecto ";
        main.appendChild(respuesta_a2texto);

        setTimeout(() => {
            respuesta_a2texto.remove();
        }, 2500); 
    }
}


//Mision 2

function mision2(){

    botoncito.remove();

    let mision2texto = document.createElement("p")
    mision2texto.innerText = "Debe crear su tarjeta de la empresa ";

    main.style.background = "#1F1838 url('imagenes/fondo6.png') no-repeat center center";

    main.appendChild(mision2texto);
    
    adivinanzas = document.createElement("div");

    adivinanzas.innerHTML = `
        
    <label for="nombre" id="label1">Ingrese su nombre:</label>
    <input type="text" id="nombre">

    <label for="apellido" id="label2">Ingrese su apellido: </label>
    <input type="text" id="apellido">

    <label for="anio" id="label3">Ingrese su año de nacimiento:  </label>
    <input type="text" id="anio">

    <input type="submit" id="enviar">
    `;

    main.appendChild(adivinanzas);

    enviar = document.getElementById("enviar");

    enviar.addEventListener("click", function ct(){
        mision2texto.remove();
        creacion_tarjeta();
    });
}

function creacion_tarjeta(){

    nombre_jugador = document.getElementById("nombre").value;
    apellido_jugador = document.getElementById("apellido").value;
    anio_nac = document.getElementById("anio").value;

    adivinanzas.remove();
    
    personaje_principal = new Persona(nombre_jugador, apellido_jugador, anio_nac);

    credencial = [-1,nombre_jugador.slice(0,3), apellido_jugador.slice(0,3), anio_nac.slice(2,4)];

    credencial.reverse()

    //console.log(credencial.join(""))

    sessionStorage.setItem("credencial", credencial.join(""));

    let credencialtexto1 = document.createElement("p")
    credencialtexto1.innerText = "¡Listo! credencial creada. ";
    main.appendChild(credencialtexto1);
    typingEffect(credencialtexto1, 65);

    let credencialtexto2 = document.createElement("p")
    setTimeout(() =>{ 
        credencialtexto2.innerText = "Ahora debes ir a tu lugar de trabajo, al final del pasillo a la izquierda. ";
        main.appendChild(credencialtexto2);
        typingEffect(credencialtexto2, 65);
    }, 4000)

    setTimeout(() =>{ 
        botoncito = document.createElement("button");

        botoncito.innerText = "Ir a lugar de trabajo";

        botoncito.id = "hab_principal";

        botoncito.addEventListener("click", function hp(){
            credencialtexto1.remove();
            credencialtexto2.remove();
            habitacion_principal();
        });
        main.appendChild(botoncito);
    }, 9000)
}

function habitacion_principal(){

    botoncito.remove();

    let habitacion_t1 = document.createElement("p")
    habitacion_t1.innerText = "Entras en una habitación extraña con otras 3 puertas. ";
    main.appendChild(habitacion_t1);
    main.style.background = "#1F1838 url('imagenes/fondo8.png') no-repeat center center";
    typingEffect(habitacion_t1, 65);

    let habitacion_t2 = document.createElement("p")
    setTimeout(() =>{ 
        habitacion_t2.innerText = "¿Qué es este lugar? -piensas. ";
        main.appendChild(habitacion_t2);
        typingEffect(habitacion_t2, 65);
    }, 4000)

    let habitacion_t3 = document.createElement("p")
    setTimeout(() =>{ 
        habitacion_t3.innerText = "De nuevo se acerca el auto a control remoto. ";
        main.appendChild(habitacion_t3);
        typingEffect(habitacion_t3, 65);
    }, 6000)

    let habitacion_t4 = document.createElement("p")
    setTimeout(() =>{ 
        habitacion_t4.innerText = "Ahora podrás empezar tus labores, debes completar las misiones de cada habitación. ";
        main.appendChild(habitacion_t4);
        typingEffect(habitacion_t4, 65);
    }, 9000)

    let habitacion_t5 = document.createElement("p")
    setTimeout(() =>{ 
        habitacion_t5.innerText = "Empiezo a acostumbrarme a los misterios -piensas. ";
        main.appendChild(habitacion_t5);
        typingEffect(habitacion_t5, 65);
    }, 16000)

    botoncito = document.createElement("button");

    botoncito.innerText = "Entrar a habitacion 1";

    botoncito.id = "hab1";

    botoncito.addEventListener("click", function hab1(){
        
        habitacion_t1.remove();
        habitacion_t2.remove();
        habitacion_t3.remove();
        habitacion_t4.remove();
        habitacion_t5.remove();
        habitacion1();
        
    });
    setTimeout(() => {main.appendChild(botoncito);}, 20000);
}


//Habitación 1

function habitacion1(){

    botoncito.remove();

    let habitacion_t1 = document.createElement("p")
    habitacion_t1.innerText = "Entras a la primera habitación, y de repente algo te ciega... ";
    main.style.background = "#1F1838 url('imagenes/fondo6.png') no-repeat center center";
    main.appendChild(habitacion_t1);
    typingEffect(habitacion_t1, 65);

    let habitacion_t2 = document.createElement("p")
    setTimeout(() =>{ 
        habitacion_t2.innerText = "Al volver a abrir los ojos, ves que hay una mesa con algo encima, tiene unas luces y un contador... ¿¡ES UNA BOMBA!? -exclamas. Rapidamente te pones manos a la obra para desactivarla. ";
        main.appendChild(habitacion_t2);
        typingEffect(habitacion_t2, 65);
    }, 5000)

    botoncito = document.createElement("button");

    botoncito.innerText = "Comenzar";

    botoncito.id = "mision";

    botoncito.addEventListener("click", function b(){ 
        habitacion_t1.remove();
        habitacion_t2.remove();
        bomba();
    });
    
    setTimeout(() => {main.appendChild(botoncito);}, 18000);
}

function timer(){

    let tiempo = document.createElement("div");

    tiempo.id = "timer";
    
    tiempo.innerText = cuenta_regresiva;

    dibujo_bomba.appendChild(tiempo)

    const timer = setInterval(()=>{

        tiempo.innerText = cuenta_regresiva;
        cuenta_regresiva -= 1;
        console.log(cuenta_regresiva)

        if (cuenta_regresiva == 0){
            clearInterval(timer);
            borrarbomba();
        }
    }, 1000);

}

function bomba(){

    botoncito.remove();

    main.innerHTML =`

        <div id="bomba"></div>

        <div id = "herramientas">
            <h3 id="correcto">${correcto_bomba}  módulos desactivados de 5</h3>
            <h3 id="textomanual">Manual (abajo)</h3>
            <h3 id="incorrecto">${explotar}  errores de 3</h3>
        </div>

        <div id="manual"><img src='./imagenes/manual.png'></div>
    `;
    document.body.append(main);

    dibujo_bomba = document.getElementById("bomba");

    correcto = document.getElementById("correcto");

    incorrecto = document.getElementById("incorrecto");

    repeticion++

    correcto_bomba = 0;

    bomba_terminada = 0;

    explotar = 0;

    cuenta_regresiva = 90;
    timer();

    //Modulo 1
    boton = Math.floor(Math.random() * 5);

    if (boton == 1){

        boton = "#FF0000";
        desactivar_boton = "3";
    }else if (boton == 2){

        boton = "#0000FF";
        desactivar_boton = "4";
    }else if (boton == 3){

        boton = "#008000";
        desactivar_boton = "5";
    }else{

        boton = "#FFFF00";
        desactivar_boton = "6";
    }

    //Dibujo botón
    clicks = 0;
    boton_bomba = document.createElement("button");

    boton_bomba.id = "boton";

    boton_bomba.addEventListener("click", function botondebomba(){
        clicks++
        console.log(clicks, "boton1");
        empezar_boton()
    }); 

    boton_bomba.style.backgroundColor = boton;
    
    dibujo_bomba.appendChild(boton_bomba);

    //Modulo 2

    cables = Math.floor(Math.random() * 5);

    if (cables == 1){

        cables = ["#FFFF00", "#FF0000", "#0000FF", "#FFFFFF"];
        desactivar_cables = "#FF0000";
    }else if (cables == 2){

        cables = ["#FF0000", "#FF0080", "#008000", "#FFFFFF"];
        desactivar_cables = "#008000";
    }else if (cables == 3){

        cables = ["#0000FF", "#800080", "#FF0000", "#FFFFFF"];
        desactivar_cables = "#0000FF";
    } else {

        cables = ["#FF0000", "#0000FF", "#008000", "#FF0080"];
        desactivar_cables = "#FF0080";
    }

    //Dibujo cables
    cables_contenedor = document.createElement("div");

    cables_contenedor.id = "cables_contenedor";

    cables_contenedor.style.backgroundColor = "";
    
    dibujo_bomba.appendChild(cables_contenedor);

    dibujo_cable1 = document.createElement("div");
    dibujo_cable1.id = "cables";
    dibujo_cable1.addEventListener("click",function dc(){

        if(desactivar_cables == cables[0]){

            empezar_cables();
        }else{
            explotar = explotar + 1;
            incorrecto.innerText = explotar + " errores de 3";
            
            if (explotar >= 3){

                borrarbomba();
            }
        }
    }); 
    cables_contenedor.appendChild(dibujo_cable1);

    dibujo_cable2 = document.createElement("div");
    dibujo_cable2.id = "cables";
    dibujo_cable2.addEventListener("click",function dc(){

        if(desactivar_cables == cables[1]){

            empezar_cables();
        }else{
            explotar = explotar + 1;
            incorrecto.innerText = explotar + " errores de 3";

            if (explotar >= 3){

                borrarbomba();
            }
        }
    }); 
    cables_contenedor.appendChild(dibujo_cable2);

    dibujo_cable3 = document.createElement("div");
    dibujo_cable3.id = "cables";
    dibujo_cable3.addEventListener("click",function dc(){

        if(desactivar_cables == cables[2]){
            empezar_cables();
        }else{
            explotar = explotar + 1;
            incorrecto.innerText = explotar + " errores de 3";
            if (explotar >= 3){

                borrarbomba();
            }
        }
    }); 
    cables_contenedor.appendChild(dibujo_cable3);

    dibujo_cable4 = document.createElement("div");
    dibujo_cable4.id = "cables";
    dibujo_cable4.addEventListener("click",function dc(){

        if(desactivar_cables == cables[3]){
            empezar_cables();
        }else{
            explotar = explotar + 1;
            incorrecto.innerText = explotar + " errores de 3";
            
            if (explotar >= 3){

                borrarbomba();
            }
        }
    }); 
    cables_contenedor.appendChild(dibujo_cable4);

    dibujo_cable1.style.backgroundColor = cables[0];
    dibujo_cable2.style.backgroundColor = cables[1];
    dibujo_cable3.style.backgroundColor = cables[2];
    dibujo_cable4.style.backgroundColor = cables[3];

    //Modulo 3
    
    combinacion = [];
    numeros_combinacion = [];
    respuesta = [];

    for (let i = 0 ; i < 4 ; i++){

        let letra_random = Math.floor(Math.random() * 8);
    
        combinacion.splice(a, a + 1, letra_random);
        numeros_combinacion.push(letra_random)
        a++
    }

    for(let i = 0 ; i < 4 ; i++){

        if (combinacion.includes(0)){

            respuesta.push(uno.letra)
            combinacion.sort()
            combinacion.shift()
        }else if (combinacion.includes(1)){

            respuesta.push(dos.letra)            
            combinacion.sort()
            combinacion.shift()
        }else if (combinacion.includes(2)){

            respuesta.push(tres.letra)
            combinacion.sort()
            combinacion.shift()
        }else if (combinacion.includes(3)){

            respuesta.push(cuatro.letra)       
            combinacion.sort()
            combinacion.shift()
        }else if (combinacion.includes(4)){

            respuesta.push(cinco.letra)      
            combinacion.sort()
            combinacion.shift()
        }else if (combinacion.includes(5)){

            respuesta.push(seis.letra)            
            combinacion.sort()
            combinacion.shift()
        }else if (combinacion.includes(6)){

            respuesta.push(siete.letra)          
            combinacion.sort()
            combinacion.shift()
        }else if (combinacion.includes(7)){

            respuesta.push(ocho.letra)
            combinacion.sort()
            combinacion.shift()
        }
    }

    //Dibujo numeros y letras

    console.log(respuesta)

    dibujo_numylet = document.createElement("div");

    dibujo_numylet.id = "numylet_contenedor";

    dibujo_numylet.innerHTML = `
    
    <div id="numyletlab">${numeros_combinacion.join("")}</div>
    <input type="text" id="numylet">
    <input type="submit" id="numyletsub">
    
    `;
    
    dibujo_bomba.appendChild(dibujo_numylet);

    labelnumylet = document.getElementById("numyletlab");
    
    input1 = document.getElementById("numylet");

    enviar = document.getElementById("numyletsub");

    enviar.addEventListener("click", function desactivarlosnum(){
        desactivar_numeros = document.getElementById("numylet").value
        empezar_numeros();
    });

    //Modulo 4

    lineas_colores = Math.floor(Math.random() * 3);

    if (lineas_colores == 0){

        lineas_colores = ["#FF0000", "#00FF00", "#0000FF"];
        desactivar_lineas = "25500";
    } else if (lineas_colores == 1){

        lineas_colores = ["#0000FF", "#FF0000", "#00FF00"];
        desactivar_lineas = "00255";
    }else if (lineas_colores == 2){

        lineas_colores = ["#00FF00", "#0000FF", "#FF0000"];
        desactivar_lineas = "02550";
    }

    //Dibujo lineas

    lineas_contenedor = document.createElement("div");

    lineas_contenedor.id = "lineas_contenedor";

    lineas_contenedor.innerHTML = `
    
    <div id="lineas" class="l1" style="background-color: ${lineas_colores[0]};"></div>
    <div id="lineas" class="l2" style="background-color: ${lineas_colores[1]};"></div>
    <div id="lineas" class="l3" style="background-color: ${lineas_colores[2]};"></div>
    
    <input type="text" id="lineasinp">
    <input type="submit" id="lineassub">
    `;
    
    dibujo_bomba.appendChild(lineas_contenedor);

    dibujo_linea1 = document.getElementsByClassName("l1");
    dibujo_linea2 = document.getElementsByClassName("l2");
    dibujo_linea3 = document.getElementsByClassName("l3");

    input1 = document.getElementById("lineasinp");
    enviar = document.getElementById("lineassub");

    enviar.addEventListener("click", function desactivarlaslineas(){
        respuesta = document.getElementById("lineasinp").value
        empezar_lineas();
    });

    //Modulo 5
    combinacion_numeros = Math.floor(Math.random() * 4);

    if (combinacion_numeros == 0){

        combinacion_numeros = "86 44 76 55";
        desactivar_colores = ["amarillo", "azul", "naranja", "verde"]   
    }else if (combinacion_numeros == 1){

        combinacion_numeros = "43 86 55 66";
        desactivar_colores = ["rojo", "amarillo", "verde", "morado"];    
    }else if (combinacion_numeros == 2){

        combinacion_numeros = "43 44 76 66";
        desactivar_colores = ["rojo", "azul", "naranja", "morado"];   
    }else if (combinacion_numeros == 3){

        combinacion_numeros = "44 76 55 66";
        desactivar_colores = ["azul", "naranja", "verde", "morado"];
    }

    //Dibujo num y colores

    dibujo_numycol = document.createElement("div");
    dibujo_numycol.id = "dibujo_numycol";
    dibujo_numycol.innerHTML =`
    
    <div id="combinacion">${combinacion_numeros}</div>

    <button id="rojo" style="background-color: red;"></button>
    <button id="amarillo" style="background-color: yellow;"></button>
    <button id="azul" style="background-color: blue;"></button>
    <button id="naranja" style="background-color: orange;"></button>
    <button id="verde" style="background-color: green;"></button>
    <button id="morado" style="background-color: purple;"></button>
    <input type="submit" id="colsub">
    `;
    dibujo_bomba.appendChild(dibujo_numycol);

    combinacion_de_num = document.getElementById("combinacion");

    rojo = document.getElementById("rojo");
    rojo.addEventListener("click",function dcol(){
        combinacion_colores.push("rojo");   
    }); 

    amarillo = document.getElementById("amarillo");
    amarillo.addEventListener("click",function dcol(){
        combinacion_colores.push("amarillo");
    }); 

    azul = document.getElementById("azul");
    azul.addEventListener("click",function dcol(){
        combinacion_colores.push("azul");
    }); 

    naranja = document.getElementById("naranja");
    naranja.addEventListener("click",function dcol(){
        combinacion_colores.push("naranja");  
    }); 

    verde = document.getElementById("verde");
    verde.addEventListener("click",function dcol(){
        combinacion_colores.push("verde");       
    }); 

    morado = document.getElementById("morado");
    morado.addEventListener("click",function dcol(){
        combinacion_colores.push("morado");
    }); 

    enviar = document.getElementById("colsub");
    enviar.addEventListener("click", function desactivarcol(){
        empezar_colores();
    });
    
}

function borrarbomba(){

    let final_bomba = document.createElement("h3");
    final_bomba.id = "finalbomba";
    if(explotar >= 3 || cuenta_regresiva == 0){

        if(bomba_terminada == 5){
        }else{
            final_bomba.innerText = "Ha explotado";
            explotar = 0;
            correcto = 0;
            cuenta_regresiva = 1;

            setTimeout(() =>{
                main.remove(); 
                main = document.createElement("main");
                document.body.appendChild(main);
                volver();
            }, 2500);
        }
    }else if(bomba_terminada == 5){

        final_bomba.innerText = "Has desactivado la bomba con éxito";

        setTimeout(() =>{
            main.remove();
            bomba_desactivada();
        }, 2500);
    }
    dibujo_bomba.appendChild(final_bomba)
}

function volver(){
    botoncito = document.createElement("button");

    botoncito.innerText = "Volver a intentar";
    
    botoncito.id = "volver";
    
    botoncito.addEventListener("click", habitacion1);
    
    main.appendChild(botoncito);
}

function empezar_boton(){
    
    console.log(ronda_mala)
    
    if (clicks > desactivar_boton){
        ronda_mala = true;
        setTimeout(() =>{ronda_mala = false;}, 1500);
        explotar = explotar + 1;
        incorrecto.innerText = explotar + " errores de 3";
        console.log(explotar)
        clicks = 0
        empezar_boton()
        if (explotar >= 3){
            borrarbomba();              
        }
    }else if(clicks == desactivar_boton){
        setTimeout(() =>{if(ronda_mala == false){
            bomba_terminada ++;
            correcto.innerText = bomba_terminada + " modulos desactivados de 5";
            se_desactivo()
            boton_bomba.style.backgroundColor = "#b0abab";
            boton_bomba.addEventListener("click", function botondebomba(){
                clicks = 0;    
            }, true);
        }}, 1500);     
    }
}

function empezar_cables(){
    
    bomba_terminada ++;
    correcto.innerText = bomba_terminada + " modulos desactivados de 5";

    se_desactivo()

    cables_contenedor.remove()

    cables_contenedor = document.createElement("div");

    cables_contenedor.id = "cables_contenedor";

    cables_contenedor.style.backgroundColor = "";
    
    dibujo_bomba.appendChild(cables_contenedor);


    dibujo_cable1 = document.createElement("div");
    dibujo_cable1.id = "cables";
    cables_contenedor.appendChild(dibujo_cable1);

    dibujo_cable2 = document.createElement("div");
    dibujo_cable2.id = "cables";
    cables_contenedor.appendChild(dibujo_cable2);

    dibujo_cable3 = document.createElement("div");
    dibujo_cable3.id = "cables";
    cables_contenedor.appendChild(dibujo_cable3);

    dibujo_cable4 = document.createElement("div");
    dibujo_cable4.id = "cables";
    cables_contenedor.appendChild(dibujo_cable4);

    dibujo_cable1.style.backgroundColor = "#b0abab";
    dibujo_cable2.style.backgroundColor = "#b0abab";
    dibujo_cable3.style.backgroundColor = "#b0abab";
    dibujo_cable4.style.backgroundColor = "#b0abab";
}

function empezar_numeros(){

    if (desactivar_numeros == respuesta.join("")){
        bomba_terminada ++;
        correcto.innerText = bomba_terminada + " modulos desactivados de 5";
        se_desactivo()
        document.getElementById("numyletsub").remove()
    }else{
        explotar = explotar + 1;
        incorrecto.innerText = explotar + " errores de 3";
        if (explotar >= 3){
            borrarbomba();  
        }
    } 
}

function empezar_lineas(){

    if (respuesta == desactivar_lineas){

        bomba_terminada ++;
        correcto.innerText = bomba_terminada + " modulos desactivados de 5";
        se_desactivo()
        
        lineas_contenedor.innerHTML = `
    
            <div id="lineas" class="l1" style="background-color: #b0abab"></div>
            <div id="lineas" class="l2" style="background-color: #b0abab;"></div>
            <div id="lineas" class="l3" style="background-color: #b0abab;"></div>
            
            <input type="text" id="lineasinp">
            <input type="submit" id="lineassub">
            `;
            
        dibujo_bomba.appendChild(lineas_contenedor);

        document.getElementById("lineassub").remove()
    }else{
        explotar = explotar + 1;
        incorrecto.innerText = explotar + " errores de 3";
        if (explotar >= 3){
            borrarbomba();    
        }
    }
}

function empezar_colores(){

    if (combinacion_colores.join(" ") == desactivar_colores.join(" ")){
        
        bomba_terminada ++;
        correcto.innerText = bomba_terminada + " modulos desactivados de 5";
        se_desactivo()

        dibujo_numycol.innerHTML =`
    
            <div id="combinacion">${combinacion_numeros}</div>
            <button id="rojo" style="background-color: #b0abab;"></button>
            <button id="amarillo" style="background-color: #b0abab;"></button>
            <button id="azul" style="background-color: #b0abab;"></button>
            <button id="naranja" style="background-color: #b0abab;"></button>
            <button id="verde" style="background-color: #b0abab;"></button>
            <button id="morado" style="background-color: #b0abab;"></button>
            `;
        dibujo_bomba.appendChild(dibujo_numycol);

    }else{
        explotar = explotar + 1;
        incorrecto.innerText = explotar + " errores de 3";
        combinacion_colores = [];
 
        if (explotar >= 3){
            borrarbomba();
        }
    }
}

function se_desactivo(){
    if (bomba_terminada == 5){
        borrarbomba();
    }
}

function bomba_desactivada(){

    main = document.createElement("main");
    main.id = "lienzo";
    document.body.appendChild(main);

    entrada_hab2 = true;

    botoncito = document.createElement("button");

    botoncito.innerText = "Volver a habitación principal";
    
    botoncito.id = "edif_principal";
    
    botoncito.addEventListener("click", volverHabitacion); 
    
    main.appendChild(botoncito);

    sessionStorage.setItem("Veces que se hizo el minijuego de la bomba: ", repeticion);
    sessionStorage.setItem("Errores de la bomba: ", explotar);
    console.log(explotar)
}

function volverHabitacion(){

    botoncito.remove();

    main.style.background = "#1F1838 url('imagenes/fondo8.png') no-repeat center center";

    botoncito1 = document.createElement("button");

    botoncito1.innerText = "Habitación 1";

    botoncito1.id = "hab_1";

    botoncito1.addEventListener("click", function hab1(){
        habitacion1();
        botoncito1.remove();
        botoncito2.remove();
        botoncito3.remove();
    }); 

    main.appendChild(botoncito1);

    botoncito2 = document.createElement("button");

    botoncito2.innerText = "Habitación 2";

    botoncito2.id = "hab_2";

    botoncito2.addEventListener("click", function hab2(){
        if(entrada_hab2 == true){
            habitacion2();
            botoncito1.remove();
            botoncito2.remove();
            botoncito3.remove();
        }else{
            let texto = document.createElement("p");
            texto.innerText = "No tiene permitido entrar a esa habitacion"
            main.appendChild(texto);
            setTimeout(() => {texto.remove()}, 2500);
        }
    }); 

    main.appendChild(botoncito2);

    botoncito3 = document.createElement("button");

    botoncito3.innerText = "Habitación 3";

    botoncito3.id = "hab_3";

    botoncito3.addEventListener("click", function hab3(){
        if(entrada_hab3 == true){
            habitacion3();
            botoncito1.remove();
            botoncito2.remove();
            botoncito3.remove();
        }else{
            let texto = document.createElement("p");
            texto.innerText = "No tiene permitido entrar a esa habitacion"
            main.appendChild(texto);

            setTimeout(() => {texto.remove()}, 2500);
        }
    }); 
    main.appendChild(botoncito3);
}


//Puerta 2 

function habitacion2(){

    main.style.background = "#1F1838 url('imagenes/fondo6.png') no-repeat center center";

    instrucciones = document.createElement("div");
  
    instrucciones.innerHTML =  `
    
        <h1 id="t1inst">Instrucciones</h1>

        <p id="t2inst">Debes alcanzar la meta de color rojo te debes mover con las flechas de los lados, con la cual ganarás puntos, si no la alcanzas o chocas con los obstáculos tendrás puntos en contra, con 10 puntos ganas, con 5 puntos en contra, pierdes.</p>
        <p id="t3inst">¡Buena suerte!</p>

        <button id="botonH2">Comenzar</button>
    `;

    main.appendChild(instrucciones);

    let t1inst = document.getElementById("t1inst");
    let t2inst = document.getElementById("t2inst");
    let t3inst = document.getElementById("t3inst");
    let bh2 = document.getElementById("botonH2");
    t1inst.style.visibility = "hidden";
    t2inst.style.visibility = "hidden";
    t3inst.style.visibility = "hidden";
    bh2.style.visibility = "hidden";
    
    t1inst.style.visibility = "visible";
    typingEffect(t1inst, 65)

    setTimeout(() =>{
        t2inst.style.visibility = "visible";
        typingEffect(t2inst, 65)
    }, 2000);

    setTimeout(() =>{
        t3inst.style.visibility = "visible";
        typingEffect(t3inst, 65)
        bh2.style.visibility = "visible";
    }, 17000);

    bh2.addEventListener("click", autito)
}

function autito(){

    instrucciones.remove();

    canvas = document.createElement("canvas");

    canvas.id = "canvas";
    
    main.appendChild(canvas);

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    crearMeta() 
    crearObstaculo()

    document.addEventListener("keydown", changeDirection);

    intervalo = setInterval(autitojuego, 1000/10);

    puntos = document.createElement("p");
    puntos.className = "puntosAuto";
    puntos.innerText = "Puntos a favor " + win;
    main.appendChild(puntos);

    puntosEnContra = document.createElement("p");
    puntosEnContra.className = "puntosAuto";
    puntosEnContra.innerText = "Puntos en contra " + gameOver
    main.appendChild(puntosEnContra);
}

function autitojuego(){

    borracanvas()

    if (autitox < obstaculox + obstaculow && autitox + autitow > obstaculox && autitoy < obstaculoy + obstaculoh && autitoy + autitoh > obstaculoy) {
        crearObstaculo()
        crearObstaculo2()
        gameOver++
        n++
    }
    if (autitox < obstaculo2x + obstaculo2w && autitox + autitow > obstaculo2x && autitoy < obstaculo2y + obstaculo2h && autitoy + autitoh > obstaculo2y) {
        crearObstaculo()
        crearObstaculo2()
        n++
        gameOver++
    }
    if(metay >= 140){
        crearObstaculo()
        crearObstaculo2()
        crearMeta();
        gameOver++
        n++
    }
    if (autitox < metax + 10 && autitox + autitow > metax && autitoy < metay + 10 && autitoy + autitoh > metay) {
        crearMeta();
        crearObstaculo();
        crearObstaculo2()
        console.log("toco")
        win++
        n++
    }

    //meta
    ctx.fillStyle= "red";
    ctx.fillRect(metax, metay, 10, 10);
    metay += 4;

    //obstaculos
    ctx.fillStyle= "green";
    ctx.fillRect(obstaculox, obstaculoy, obstaculow, obstaculoh);
    ctx.fillStyle= "blue";
    ctx.fillRect(obstaculo2x, obstaculo2y, obstaculo2w, obstaculo2h);

    obstaculoy += 6;
    obstaculo2y += 8;

    //Autito
    ctx.fillStyle="purple";
    ctx.fillRect(autitox, autitoy, 20, 30);
    
    //Puntos
    puntos.innerText = "Puntos a favor " + win;
    puntosEnContra.innerText = "Puntos en contra " + gameOver;

    if (win >= 10){
        termino_de_juego();
    }

    if(gameOver >= 5){
        gameOver = 0;
        win = 0;
        n = 1;
        empezar_de_nuevo()
    }
}

function borracanvas(){

    canvas.width = 300;
    let x = 0;
    let y = 0;

    for (let i= 0; i < 15; i++){
        if (i%2 === 0) {
            x = 0;
            for (let i= 0; i < 31; i++) {

                if (i%2 === 0) {
                    ctx.fillStyle= "lightgrey";
                    ctx.fillRect(x, y, 10, 10);
                    x += 20;
                } 
            } 
        }else{
            x = 10;
            for (let i= 0; i < 31; i++) {
                if (i%2 != 0) {
                    ctx.fillStyle= "lightgrey";
                    ctx.fillRect(x, y, 10, 10);
                    x += 20;
                } 
            }
        }
        y += 10;    
    }
}

function crearMeta() {

    metax = Math.floor(Math.random() * 29) * 10;
    metay = 10;
}

function crearObstaculo(){

    obstaculox = Math.floor(Math.random() * 29) * 10
    obstaculoy = 0;
    obstaculoh = 30;
    obstaculow = 20;

    if(metax < obstaculox + obstaculow && metax + 10 > obstaculox && metay < obstaculoy + obstaculoh && metay + 10 > obstaculoy ){
        obstaculox = Math.floor(Math.random() * 29) * 10
        obstaculoy = 0;
        obstaculoh = 30;
        obstaculow = 20;
        console.log("Se cambio")
    }  
}

function crearObstaculo2(){

    if(n >= 5){
        obstaculo2x = Math.floor(Math.random() * 29) * 10
        obstaculo2y = 0;
        obstaculo2h = 30;
        obstaculo2w = 20;

        if(metax < obstaculo2x + obstaculo2w && metax + 10 > obstaculo2x && metay < obstaculo2y + obstaculo2h && metay + 10 > obstaculo2y ){
            obstaculo2x = Math.floor(Math.random() * 29) * 10
            obstaculo2y = 0;
            obstaculo2h = 30;
            obstaculo2w = 30;
            console.log("Se cambio")
        }
        if(obstaculox < obstaculo2x + obstaculo2w && obstaculox + 30 > obstaculo2x && obstaculoy < obstaculo2y + obstaculo2h && obstaculoy + 20 > obstaculo2y ){
            obstaculo2x = Math.floor(Math.random() * 29) * 10
            obstaculo2y = 0;
            obstaculo2h = 30;
            obstaculo2w = 30;
            console.log("Se cambio")
        }
    }
}

function changeDirection(tecla) {
    
    if(tecla.keyCode == 37){
        moverx = -4;
        movery = 0;
    }
    if(tecla.keyCode == 39){
        moverx = 4;
        movery = 0;
    }

    autitox += moverx;
    autitoy += movery;
}

function empezar_de_nuevo(){

    puntos.remove()
    puntosEnContra.remove()
    clearInterval(intervalo)
    canvas.remove()

    repeticion_auto++

    reempezar = document.createElement("div");
    reempezar.innerHTML =  `
    
    <h2 id="t_volver">Haz perdido</h2>
    <button id="botonvolver">Intentar de nuevo</button>
    `;

    main.appendChild(reempezar)

    let botonvolver = document.getElementById("botonvolver");
    botonvolver.addEventListener("click", function v(){

        habitacion2();
        reempezar.remove();
    })
}

function termino_de_juego(){

    puntos.remove()
    puntosEnContra.remove()
    clearInterval(intervalo)
    canvas.remove();

    console.log("LIhtooo")
    sessionStorage.setItem("Veces que se hizo el minijuego del autito: ", repeticion_auto);
    sessionStorage.setItem("Puntos en contra del autito: ", gameOver);

    entrada_hab3 = true;

    termino_auto = document.createElement("div");
    termino_auto.innerHTML =  `
    
    <h2 id="t_volver">Haz ganado</h2>
    <button id="botonvolverr">Volver a habitacion principal</button>
    `;

    main.appendChild(termino_auto);

    let botonvolverr = document.getElementById("botonvolverr");
    botonvolverr.addEventListener("click", function volver(){
        volverHabitacion();
        termino_auto.remove();
    });
}


//Puerta 3

function habitacion3(){

    main.style.background = "#1F1838 url('imagenes/fondo9.png') no-repeat center center";

    let texto1 = document.createElement("p")
    texto1.innerText = "Entras a la tercera habitación y te encuentras con una persona... ";
    main.appendChild(texto1);
    typingEffect(texto1, 65);

    let texto2 = document.createElement("p")
    setTimeout(() => {
        texto2.innerText = "¡Felicidades!, lograste superar con éxito nuestros prototipos. 'Aumented reality, nanotechnology and arcade', es una empresa creada con el fin de lograr grandes avances tecnológicos en todas las áreas de la vida cotidiana, desde formar a estudiantes de medicina, militares entre muchos otros, hasta crear juegos recreativos. Nuestra visión es que junto a la realidad aumentada y la nanotecnología, mediante los juegos de arcade, podemos crear grandes cosas. Probaste nuestros 2 prototipos y te invitamos a que sigas revisando nuestros futuros proyectos, y puedas inscribirte para desarrollarlos, ahora me retiraré, debes revisar el computador. ";
        main.appendChild(texto2);
        typingEffect(texto2, 65);
    }, 4500)

    setTimeout(() => {
        botoncito = document.createElement("button");

        botoncito.innerText = "Ver computador";

        botoncito.id = "compu";

        botoncito.addEventListener("click", function td(){
            tienda();
            main.remove();
        }); 

        main.appendChild(botoncito);
    }, 48000)
}

function tienda(){

    tiendita = document.createElement("div");
    
    tiendita.innerHTML =  `
    
    <header>

        <nav id='barranav'>
            <img id='img1' src='./imagenes/ANA.png'>
            <p>A.N.A.</p>
            <button id='img2'><img src='./imagenes/maleta.png'></button>
        </nav> 

        <div id='maletin' >
            <h3>Proyectos</h3>
            <p id="lleno">Sus inscripciones: </p>
            <ul id="lista_proyectos">
            </ul>
            <button id="terminar">Terminar inscipción</button>
        </div>
        
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active " data-bs-interval="3000"> 
                    <img src="./imagenes/carrusel1.png" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block carruselTexto">
                            <h2> Aumented reality, Nanotechnology and Arcade </h2>
                    </div>
                </div>
            
                <div class="carousel-item " data-bs-interval="3000">
                    <img src="./imagenes/carrusel2.png" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block carruselTexto">
                        <h2> Aumented reality, Nanotechnology and Arcade </h2>
                    </div>
                </div>
                <div class="carousel-item " data-bs-interval="3000"> 
                    <img src="./imagenes/carrusel3.png" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block carruselTexto">
                        <h2> Aumented reality, Nanotechnology and Arcade </h2>
                    </div>
                </div>
            </div>

            <button class="carousel-control-prev b_atras" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next b_siguiente" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

        </div>
    </header>
    
    <h1 id='titulopy'>Proyectos</h1>

    <div id='parentpy'>
        <input id='inputpy' placeholder=" Buscar...">
    </div>

    <section id='proyectos'>

        <div id='div1' class='proyectosP'>
            <div class='tarjetas'>
                <div class='frente'>
                    <img class='imagen' src="./imagenes/musica.png">
                    <p class='proyectos'>Musica</p>
                </div>
                <div class='atras'>
                    <p>Este proyecto busca ayudar a las personas interesadas en aprender un instrumento, y no tengan acceso a uno.</p>
                    <button class="inscripcion">Inscribirme</button>
                </div>
            </div>
        </div>


        <div id='div2' class='proyectosP'>
            <div class='tarjetas'>
                <div class='frente'>
                    <img class='imagen' src="./imagenes/pelea.png">
                    <p class='proyectos'>Defensa Personal</p>
                </div>
                <div class='atras'>
                    <p>Este proyecto busca ayudar a iniciar a las personas en las técnicas de defensa personal. </p>
                    <button class="inscripcion">Inscribirme</button>
                </div>
            </div>
        </div>


        <div id='div3' class='proyectosP'>
            <div class='tarjetas'>
                <div class='frente'>
                    <img class='imagen' src="./imagenes/deportes.png">
                    <p class='proyectos'>Deportes</p>
                </div>
                <div class='atras'>
                    <p>Este proyecto busca fomentar las ganas pra practicar un deporte, y enseñar las primeras técnicas básicas de ellos.</p>
                    <button class="inscripcion">Inscribirme</button>
                </div>
            </div>
        </div>


        <div id='div4' class='proyectosP'>
            <div class='tarjetas'>
                <div class='frente'>
                    <img class='imagen' src="./imagenes/construccion.png">
                    <p class='proyectos'>Construccion</p>
                </div>
                <div class='atras'>
                    <p>Este proyecto busca ayudar a los estudiantes de arquitectura a desarrollar sus maquetas.</p>
                    <button class="inscripcion">Inscribirme</button>
                </div>
            </div>
        </div>


        <div id='div5' class='proyectosP'>
            <div class='tarjetas'>
                <div class='frente'>
                    <img class='imagen' src="./imagenes/conduccion.png">
                    <p class='proyectos'>Conducir</p>
                </div>
                <div class='atras'>
                    <p>Este proyecto busca ayudar a las personas a perder el miedo a conducir en las calles.</p>
                    <button class="inscripcion">Inscribirme</button>
                </div>
            </div>
        </div>


        <div id='div6' class='proyectosP'>
            <div class='tarjetas'>
                <div class='frente'>
                    <img class='imagen' src="./imagenes/cirujanos.png">
                    <p class='proyectos'>Practicas para medicos</p>
                </div>
                <div class='atras'>
                    <p>Este proyecto busca ayudar en las prácticas a cirujanos, para que puedan tener una experiencia realista pero virtual.</p>
                    <button class="inscripcion">Inscribirme</button>
                </div>
            </div>
        </div>


        <div id='div7' class='proyectosP'>
            <div class='tarjetas'>
                <div class='frente'>
                    <img class='imagen' src="./imagenes/nanotech.png">
                    <p class='proyectos'>Creaciones con nanotecnologia</p>
                </div>
                <div class='atras'>
                    <p>Este proyecto busca desarrollar órganos junto a la nanotecnología.</p>
                    <button class="inscripcion">Inscribirme</button>
                </div>
            </div>
        </div>


        <div id='div8' class='proyectosP'>
            <div class='tarjetas'>
                <div class='frente'>
                    <img class='imagen' src="./imagenes/bomba.png">
                    <p class='proyectos'>Desactivadores de artefactos explosivos</p>
                </div>
                <div class='atras'>
                    <p>Este proyecto busca instruir a los aspirantes a ser desactivadores de artefactos explosivos, de una manera realista, pero segura.</p>
                    <button class="inscripcion">Inscribirme</button>
                </div>
            </div>
        </div>


        <div id='div9' class='proyectosP'>
            <div class='tarjetas'>
                <div class='frente'>
                    <img class='imagen' src="./imagenes/cocina.png">
                    <p class='proyectos'>Cocina</p>
                </div>
                <div class='atras'>
                    <p>Este proyecto busca ayudar aprender a cocinar de una manera divertida, para los mas novatos.</p>
                    <button class="inscripcion">Inscribirme</button>
                </div>
            </div>
        </div>


        <div id='div10' class='proyectosP'>
            <div class='tarjetas'>
                <div class='frente'>
                    <img class='imagen' src="./imagenes/lentes.png">
                    <p class='proyectos'>Lentes inteligentes</p>
                </div>
                <div class='atras'>
                    <p>Este proyecto busca crear unos lentes inteligentes, que te muestren ciertas cosas conectado con tu celular.</p>
                    <button class="inscripcion">Inscribirme</button>
                </div>
            </div>
        </div>


        <div id='div11' class='proyectosP'>
            <div class='tarjetas'>
                <div class='frente'>
                    <img class='imagen' src="./imagenes/quimio.png">
                    <p class='proyectos'>Quimioterapia con nanotecnologia</p>
                </div>
                <div class='atras'>
                    <p>Este proyecto busca crear un tratamiento de quimioterapia, que gracias a la nanotecnología, se pueda usar como vehículo para llevar la medicina de forma mas directa.</p>
                    <button class="inscripcion">Inscribirme</button>
                </div>
            </div>
        </div>


        <div id='div12'class='proyectosP'>
            <div class='tarjetas'>
                <div class='frente'>
                    <img class='imagen' src="./imagenes/holograma.png">
                    <p class='proyectos'>Juegos en 4D</p>
                </div>
                <div class='atras'>
                    <p>Este proyecto busca crear una experiencia mas divertida para los mas aficionados a los videojuegos, de una manera mas accesible.</p>
                    <button class="inscripcion">Inscribirme</button>
                </div>
            </div>
        </div>
    </section>
    `
    document.body.appendChild(tiendita);

    let submit = document.getElementById("inputpy");

    submit.addEventListener("keyup", buscar_proyectos)

    let terminar = document.getElementById("terminar");

    terminar.addEventListener("click", finalJuego);

    //carrito
    let maleta = [];

    //LO DE NO AGREGAR MAS
    function agregar_a_carrito(e){

        let hijo = e.target;
        let div_atras =  hijo.parentNode;
        let div_tarjeta = div_atras.parentNode

        let nombre_producto = div_tarjeta.querySelector(".proyectos").textContent;
        let img_producto = div_tarjeta.querySelector("img").src;
        
        let producto = {
            nombre: nombre_producto,
            img: img_producto,
        };

        //QUE NO SE REPITA
        let push = false;
        for(let productos of maleta){

            if(productos.nombre.includes(producto.nombre)){

                console.log(productos.nombre)
                console.log("ya esta")
                push = false;
                return
            }else{
                push = true;
            }
        }
        if(push == true){
            maleta.push(producto);
            mostrar_carrito( );
        }
        if(maleta == ""){

            console.log("Ta vacio");
            maleta.push(producto);
            mostrar_carrito( );
        }
    }

    function mostrar_carrito(){

        let lista = document.getElementById("lista_proyectos");
        lista.innerHTML = "";

        for( let proyecto of maleta){

            let fila = document.createElement("ul");
            fila.innerHTML = `<li><img src="${proyecto.img}"</li>
                            <li><p>${proyecto.nombre}<p></li>
                            <li><button class="btn btn-danger borrar_elemento">Borrar</button></li>`;    
            lista.append( fila );
        }

        let btn_borrar = document.querySelectorAll(".borrar_elemento");

        for( let btn of btn_borrar ){

            btn.addEventListener("click" , borrar_producto);
        }
    }

    function borrar_producto(e){

        console.log("BORRAR ESTE PRODUCTO: " , e.target);
        let abuelo = e.target.parentNode.parentNode;

        console.log(abuelo)

        let producto_eliminar =  abuelo.querySelector("p").textContent;
        abuelo.remove();

        function eliminar_producto( producto ){

            return producto.nombre != producto_eliminar                 
        }

        let resultado_carrito = maleta.filter( eliminar_producto );
        maleta = resultado_carrito;
    }

    //Activar funcion de agregar a carrito
    let inscripccion = document.querySelectorAll(".inscripcion");

    console.log(inscripccion);

    for( let i of inscripccion){

        i.addEventListener("click" , agregar_a_carrito);
    }

    //Hacer visible el carrito
    let maleta_btn = document.getElementById("img2");

    maleta_btn.addEventListener("click" , function(){

        let carrito = document.getElementById("maletin");

        if( carrito.style.display != "none"){

            carrito.style.display = "none";
        }
        else{
            carrito.style.display = "flex";
        }
    })
}

function buscar_proyectos() {

    let proyectos = document.querySelectorAll(".proyectos");

    let proyectoss = [proyectos[0].innerText.toLowerCase(), proyectos[1].innerText.toLowerCase(),  proyectos[2].innerText.toLowerCase(), proyectos[3].innerText.toLowerCase(), proyectos[4].innerText.toLowerCase(), proyectos[5].innerText.toLowerCase(), proyectos[6].innerText.toLowerCase(), proyectos[7].innerText.toLowerCase(), proyectos[8].innerText.toLowerCase(), proyectos[9].innerText.toLowerCase(), proyectos[10].innerText.toLowerCase(), proyectos[11].innerText.toLowerCase()];

    let proyectos_P = document.querySelectorAll(".proyectosP");

    let proyectos_P_arr = [proyectos_P[0], proyectos_P[1], proyectos_P[2], proyectos_P[3], proyectos_P[4], proyectos_P[5], proyectos_P[6], proyectos_P[7], proyectos_P[8], proyectos_P[9], proyectos_P[10], proyectos_P[11]];

    //Buscar valor

    let valor = document.getElementById("inputpy").value

    //Filtradooo

    console.log(valor)

    if(valor == " "){
    }else{

        for(i = 0; i < proyectoss.length; i++){

            console.log(proyectoss[i].includes(valor.toLowerCase()))

            if(!proyectoss[i].includes(valor.toLowerCase())){

                proyectos_P_arr[i].style.display = "none";

            }else{

                proyectos_P_arr[i].style.display = "contents";
            }
        }
    }
}


//FINALL

function finalJuego(){

    tiendita.remove()

    main = document.createElement("main");
    main.id = "lienzo";
    document.body.appendChild(main);

    let repeticion_de_bomba = sessionStorage.getItem("Veces que se hizo el minijuego de la bomba: ");
    let repeticion_de_auto = sessionStorage.getItem("Veces que se hizo el minijuego del autito: ");
    let errores_de_bomba = sessionStorage.getItem("Errores de la bomba: ");
    let errores_de_auto = sessionStorage.getItem("Puntos en contra del autito: ");

    let final = document.createElement("div");

    final.id = "final";

    final.innerHTML = `
    
        <h1>¡Gracias por jugar!</h1>

        <h2>Estas fueron tus estadísticas durante el juego</h2>

        <table>
            <tr>
                <th></th>
                <th>Primer Juego (bomba)</th>
                <th>Segundo juego (auto)</th>
            </tr>
            <tr>
                <th>Cantidad de veces que se hizo: </th>
                <th>${repeticion_de_bomba}</th>
                <th>${repeticion_de_auto}</th>
            </tr>
            <tr>
                <th>Cantidad de errores: </th>
                <th>${errores_de_bomba}</th>
                <th>${errores_de_auto}</th>
            </tr>
        </table
    `;

    main.appendChild(final);

    function Jueguitos(categoria, repeticiones, categoria2, cantidad ) {
        this.categoria = categoria;
        this.repeticiones = repeticiones;
        this.categoria2  = categoria2;
        this.cantidad = cantidad;
    }
 
    let bomba_juego = new Jueguitos("Veces que se hizo la bomba", repeticion_de_bomba, "Errores de la bomba",errores_de_bomba);

    let auto_juego = new Jueguitos("Veces que se hizo el juego del auto", repeticion_de_auto, "Errores del auto",errores_de_auto);
    
    let guardar_todo = [bomba_juego, auto_juego];

    //Usar json

    let enJSON    = JSON.stringify(guardar_todo);

    localStorage.setItem("Estadísticas", enJSON);;
}