// El function o local scope solo se puede usar dentro de una funtion, no se accede a fuera de la funcion 
function greeting() {
    let userName = 'Ana';
    console.log(userName);

    if (userName === 'Ana') {
        console.log(`Hello ${userName}`);
    }
}

greeting();
console.log(userName); // Aqui no se puede acceder a esta variable