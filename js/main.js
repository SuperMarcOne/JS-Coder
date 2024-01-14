let edad = parseInt(prompt("Ingrese su edad"))

function ingreso(){
    if (edad >= 18){
        alert("Buenisimo eres mayor! puedes ingresar")
    }else{
        alert("Lo sentimos, eres menor, no podras ingresar")
    }
}

ingreso()

const productos = [ "auriculares", "celular", "televisor 4k", "notebook"]

let valor = parseInt(prompt("Ingrese un monto en usd para obtener un producto"))

function subasta(){
    if (valor < 250){
        confirm("Sos rata o te haces?")
    }else if(valor >= 250){
        alert("Felicidades conseguiste unos: " + productos[0])
    }else if(valor >= 600){
        alert("Felicidades conseguiste un: " + productos[1])
    }else if(valor >= 1000){
        alert("Felicidades conseguiste un: " + productos[2])
    }else if(valor >= 1500){
        alert("Felicidades conseguiste una " + productos[3])
    }else if(valor >= 2000){
        alert("No tenemos un producto para semejante dineral!")
    }
}

subasta()

let direccion = (prompt("Ingrese su direccion para enviar dicho producto y numero de telefono"))

function envio(){
    if (direccion != null){
        alert("Ni bien despachemos el producto lo estaremos llamando, gracias!")
    }else("No ingreso nada vuelva a intentarlo")
}

envio()
