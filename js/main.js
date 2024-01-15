function ingreso() {
    let nombre = prompt("Ingrese su nombre");
        alert("Bienvenido: " + nombre)
        console.log(nombre)
}

ingreso()

const productos = [ "auriculares", "celular", "televisor 4k", "notebook"]

let valor = parseInt(prompt("Ingrese un monto en usd para obtener un producto, NO MAYOR A 2000 USD!"))

function subasta() {
    if (valor < 250) {
        confirm("Sos rata o te haces?");
    } else {
        if (valor < 600) {
            alert("Felicidades conseguiste unos: " + productos[0]);
            console.log(productos[0])
        } else if (valor < 1000) {
            alert("Felicidades conseguiste un: " + productos[1]);
            console.log(productos[1])
        } else if (valor < 1500) {
            alert("Felicidades conseguiste un: " + productos[2]);
            console.log(productos[2])
        } else if (valor <= 2000) {
            alert("Felicidades conseguiste una " + productos[3]);
            console.log(productos[3])
        } else {
            alert("No tenemos un producto para semejante dineral!");
        }
    }
}

subasta()

function envio(){
    let direccion = (prompt("Ingrese su direccion para enviar dicho producto y numero de telefono"))
    if (direccion != null && valor <= 2000){
        alert("Ni bien despachemos el producto lo estaremos llamando, gracias!")
        console.log(direccion)
    }else{
        alert("Ingreso un monto que supera el valor de un producto, o no ingreso un dato de relevancia")
}
}

if (valor <= 2000) {
    envio();
    console.log(valor) 
}
