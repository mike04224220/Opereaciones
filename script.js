function suma() {
    let a = 0;
    let b = 0;
    a = parseInt(prompt("Por favor ingresa el primer valor"));
    b = parseInt(prompt("Por favor ingresa el segundo valor"));
    let s = a + b;
    alert(a + " + "+ b + " = " + s);
}


function resta(){
    let a = 0;
    let b = 0;    
    a = parseInt(prompt("Por favor ingresa el primer valor"));
    b = parseInt(prompt("Por favor ingresa el segundo valor"));
    let r = a - b;
    alert(a + " - "+ b + " = " + r);
}


function mult(){
    let a, b = 0;
    a = parseFloat(prompt("Por favor ingresa el primer valor"));
    b = parseFloat(prompt("Por favor ingresa el segundo valor"));
    let r = a * b;
    alert(a + " X " + b + " = " + r);
}


function cuadrado(){
    let a = 0;
    a = parseInt(prompt("Por favor ingresa el valor"));
    let c = Math.sqrt(a) ;
    alert(`La raíz cuadrada de "${a}" es = ${c}`);
}




const area = () => {
    let a = 0;
    a = parseInt(prompt(`Por favor ingresa el valor en "cm" de un lado del cuadrado`));
    let c = a ** 2 ;
    alert(`El área del cuadrado es = ${c} cm2`);
}


function inversion(){
    let a, b = 0;
    a = parseFloat(prompt("Por favor ingresa el capital a invertir"));
    b = parseFloat(prompt("Por favor ingresa la cantidad ed meses a cotizar"));
    let c = (a * 0.017) * b;
    alert("Si invierte un capital de " + a + " sus ganancias en " + b + " meses serán de " + c);
}


const año = () => {
    let a = 0;
    let b = 0;
    let c = "";
    a = parseInt(prompt("Digita el año actual: "));
    b = parseInt(prompt("Cuantos años tienes: "));
    c = prompt("Ya cumpliste años en el año actual: (Las úinicas respuesas válidas son: si o no)");
    if (c == "si" || c == "SI" || c == "Si") {d = a - b;
        alert(`Naciste en el año "${d}"`);}
        else if (c == "no" || c == "NO" || c == "No"){d = a - (b++);
            alert(`Naciste en el año "${d}"`);}
            else {alert("El valor digitado no es valido, por favor lée las intrucciones y reintentalo nuevamente");}
}


function conv(){
    let a = 0;
    a = parseFloat(prompt("Por favor ingresa una cantidad en metros"));
    let b = a / 1000;
    let c = a * 39.37;
    alert(`La cantidad de metros "${a}" es igual a "${b}" Kilometros`);
    alert(`La cantidad de metros "${a}" es igual a "${c}" Pulgadas`);
}


function mayor(){
    let a = 0;
    let b = 0;    
    a = parseInt(prompt("Por favor ingresa el primer valor"));
    b = parseInt(prompt("Por favor ingresa el segundo valor"));
    if(a > b){
        alert(`El número mayor es: ${a}`);
    }
    if(a < b){
        alert(`El número mayor es: ${b}`);
    }
    if(a === b){
        alert(`El primer número "${a}" es iagual a "${b}"`);
    }
}


function mayor2(){
    let a = 0;
    let b = 0;
    let c = 0;    
    a = parseInt(prompt("Por favor ingresa el primer valor"));
    b = parseInt(prompt("Por favor ingresa el segundo valor (difernete)"));
    c = parseInt(prompt("Por favor ingresa el tercer valor (diferente)"));
    if((a > b) && (a > c)){
        alert(`El número mayor es: ${a}`);
    }
    if((b > a) && (b > c)){
        alert(`El número mayor es: ${b}`);
    }
    if((c > a) && (c > b)){
        alert(`El número mayor es: ${c}`);
    }
}


function descuento(){
    let a = 0;
    let b = 0;
    let c = 0;    
    a = parseInt(prompt("Digite el precio original"));
    b = parseInt(prompt("Digite con un numero entero el porcentage del descuento"));
    c = a - (a * b) / 100;
        alert(`El precio paso de " ${a} " sin descuento a " ${c} " con descuento`);
}

