//NUMERO DE NOCHES HOTEL
var nightNumber = 0;
var getnightNumber = () => {
    nightNumber = document.getElementById("nights").value;
    console.log("nºnoches: " + nightNumber);
    return nightNumber;
}
document.getElementById("nights").addEventListener("keyup",getnightNumber)


// //TIPO DE HABITACION
// var roomType = () => parseInt(document.getElementById("roomtype").value);
// document.getElementById("roomtype").addEventListener("mouseout",roomType)
var roomType;
var getroomType = () => {
    roomType = document.getElementById("roomtype").value;
    console.log("Precio por tipo de habitación: " + roomType + "€");
    return roomType;
}
document.getElementById("roomtype").addEventListener("change",getroomType)

//OCUPACION DE HABITACION
var roomOcc;
var roomOccupance = () => {
    roomOcc = document.getElementById("roomocupance").value;
    console.log("Tarifa extra/descuento: " + roomOcc + "€");
    return roomOcc;
}
document.getElementById("roomocupance").addEventListener("change",roomOccupance)

//OPCION SPA
var spa = 0;
function spaService() {
    var spaService = document.getElementById('spaServ');
    if(spaService.checked){
        spa = 20;
        alert("Has seleccionado el servicio SPA")
    } else {
        spa = 0;
    }
    console.log("Precio Spa :" + spa + " €");
    return spa
}

//NUMERO NOCHES PARKING
var parkingNights = 0;
var getparkingPrice = () => {
    parkingNights = parseInt(document.getElementById("parking").value)* 10;
    console.log("Precio total Parking: " + parkingNights + " €");
    return parkingNights;
}
document.getElementById("parking").addEventListener("keyup",getparkingPrice)


//CALCULO TOTAL
var calculate = () => {
    console.log("--------CALCULO------");
    let totalBase = eval(roomType * nightNumber + spa);
    console.log("Total base: " + totalBase + " €");
    let totalIncremento = eval(totalBase + totalBase * roomOcc);
    console.log("Total incremento/descuento: " + totalIncremento + " €");
    let totalReserva = totalIncremento + parkingNights;
    console.log("Precio de la reserva: " + totalReserva + " €");
    if(getnightNumber() && getroomType() && roomOccupance() ) {
        document.getElementById("totalPrice").value = totalReserva + " €";
    } else {
        error();
    }
}

//ERROR
var error = () => {
    alert("Para calcular debes introducir el número de noches y la habitacion que deseas. El uso de SPA y Parking es un servicio exclusivo de nuestros clientes.");
}