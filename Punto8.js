//calculadora
alert(
  "Bienvenido a MyCalculator, donde podras realizar operaciones basicas entre dos numeros"
);
let name = prompt(
  "Para poder empezar primero que todo necesitamos saber cual es tu nombre"
);

let cod=prompt( `Hola ${name} \n ¿Qué operación quieres realizar? \n 1 para sumar \n 2 para restar \n 3 para multiplicar \n 4 para dividir`)

while (cod<1 || cod>=5){
    cod=prompt( `Valor invalido \n Recuerda que las opciones son: \n ¿Qué operación quieres realizar? \n 1 para sumar \n 2 para restar \n 3 para multiplicar \n 4 para dividir`)
}

let num1=prompt(`Muy bien ${name}, ahora digita tu primer número`)
num1=parseInt(num1)
let num2=prompt(`Muy bien ${name}, ahora digita tu segundo número`)
num2=parseInt(num2)
while (cod==4 && num2===0){
    num2=prompt(`No se puede dividir por cero ${name}. \n Intentalo nuevamente \n Escribe tu segundo número`)
    num2=parseInt(num2)
}


if(cod==1){
    alert(num1+num2)
}
if(cod==2){
    alert(num1-num2)
}
if(cod==3){
    alert(num1*num2)
}
if(cod==4){
    alert(num1/num2)
}

alert(`Gracias ${name} por utilizar MyCalculator \n Hasta pronto :P`)
