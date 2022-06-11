//condicional
document.write(`<h2>CONDICIONAL<h2/>`)
let num=prompt('Escribe un número')
if(num===34){
    num=num+800
}else{
    num=num+7
}
document.write(`<p> el resultado final es ${num} <p/>`)


//iteradores
document.write(`<h2>ITERADORES<h2/>`)
document.write(`<h2>FOR<h2/>`)
let rest=num


for (i=1 ; i< num*2 ; i++) {
    
   document.write(`<p> iteración número ${i} con for: resultado ${rest} <p/>`)
   rest++
}
document.write(`<h2>WHILE<h2/>`)

let rest2=num/2

let cont=1
while (rest2<num){
    
    document.write(`<p>iteración número ${cont} con while: resultado ${rest2} <p/> `)
    rest2++ 
    cont++
}

//Ejemplos de tipos de variables

document.write(`<h2>EJEMPLOS DE TIPOS DE VARIABLES<h2/>`)
let nber=1
let stg='hello world'
let arr=[0,5,6]
let bool=true
const jsn = {
    frutas:['manzana','pera','piña'],
    carnes:['pollo','pescado','res'],
    cereales:['arroz','soja']
  };

  document.write(`${nber} es un dato tipo numerico o number <br/>`)
  
  document.write(`${stg} es un dato tipo texto o string <br/>`)
  
  document.write(`${arr} es un dato tipo array y se pueden llamar cada uno de sus componentes así: ${arr[0]} y ${arr[1]} <br/>`)

  document.write(`${bool} es un dato booleano <br/>`)

  document.write(`jsn es un dato tipo JSON y se pueden llamar sus componentes así: ${jsn.frutas[2]} <br/>`)

  //función parseInt()
  document.write(`<h2>FUNCIÓN parseInt<h2/>`)
  let lol="120"
  document.write(` string -> ${lol} <br/>`)
  let lol2=parseInt(lol)
  document.write(`Number -> ${lol2*2} <br/>`)

  //funciones 
  document.write(`<h2>EJEMPLOS DE FUNCIÓNES<h2/>`)

let op=prompt(`Con este numero haremos una función`)
let w=0
let x=0
  function raiz(f){
     w=Math.sqrt(f)
    return w;
  }
function logaritmo (f){
     x=Math.log(f)
    return x;
}

let l1=raiz(op)
let l2=logaritmo(l1)
document.write(`La raiz cuadrada de ${op} es ${l1} <br/> El logaritmo de ${l1} es: ${l2}<br/>`)





//par o impar

document.write(`<h2>PAR O IMPAR<h2/>`)

  let n=prompt(`Escribe un numero y te dire si es par o impar`)
  n=parseInt(n)

while(n<=0){
    n=prompt(`Numero invalido \n intentalo de nuevo`)
}

let result=n%2

if (result===0){
    document.write(`el numero ${n} es par ${result} <br/>`)
}else{
    document.write(`el numero ${n} es impar ${result} <br/>`)
}

//"14"=14

document.write(`<h2>"14"== 14<h2/>`)
let r="14"
let r2=14

if (r2=parseInt(r)){
document.write(`El texto ${r} es igual al numero ${r2} <br/>`)
}else{
    document.write(`El texto ${r} no es igual al numero ${r2} <br/>`)  
}
