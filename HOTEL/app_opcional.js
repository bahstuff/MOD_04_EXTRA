//NUMERO DE NOCHES HOTEL
let nightNumber = 0;
var getnightNumber = () => {
    nightNumber = document.getElementById("nights").value;
    print();
    return nightNumber;
}
document.getElementById("nights").addEventListener("keyup",getnightNumber)


// //TIPO DE HABITACION
let roomType;
var getroomType = () => {
    roomType = document.getElementById("roomtype").value;
    print();
    return roomType;
}
document.getElementById("roomtype").addEventListener("change",getroomType)

//OCUPACION DE HABITACION
let roomOcc = 0;
var roomOccupance = () => {
    roomOcc = document.getElementById("roomocupance").value;
    print();
    return roomOcc;
}
document.getElementById("roomocupance").addEventListener("change",roomOccupance)

//OPCION SPA
let spa = 0;
function spaService() {
    let spaService = document.getElementById('spaServ');
    if(spaService.checked){
        spa = 20;
        alert("Has seleccionado el servicio SPA")
    } else {
        spa = 0;
    }
    print();
    return spa
}

//NUMERO NOCHES PARKING
let parkingNights = 0;
var getparkingPrice = () => {
    parkingNights = parseInt(document.getElementById("parking").value)* 10;
    print();
    return parkingNights;
}
document.getElementById("parking").addEventListener("keyup",getparkingPrice)


//IMPRIMIR
var print = () => {
    let totalBase = eval(roomType * nightNumber + spa);
    let totalIncremento = eval(totalBase + totalBase * roomOcc);
    let totalReserva = totalIncremento + parkingNights;
    document.getElementById("totalPrice").value = totalReserva + " €";
}

var calculate = () => {
    let totalBase = eval(roomType * nightNumber + spa);
    let totalIncremento = eval(totalBase + totalBase * roomOcc);
    let totalReserva = totalIncremento + parkingNights;    
    if(getnightNumber() && getroomType() && roomOccupance() ) {
        document.getElementById("totalPrice").value = totalReserva + " €";
        alert ("GRACIAS POR CALCULAR EL PRECIO DE TU RESERVA, ANÍMATE Y VEN A VISITARNOS");
    } else {
        error();
    }
}


//ERROR
var error = () => {
    alert("Para calcular debes introducir el número de noches y la habitacion que deseas. El uso de SPA y Parking es un servicio exclusivo de nuestros clientes.");
 }