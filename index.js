const HotelController = require('./modules/Hotel/Controllers/HotelController');

const args = process.argv.slice(2);
if (args[0] === '' || args[0] == undefined) {
console.log('Por favor, digite um valor de entrada, você deve passar o tipo de cliente e as datas.');
return;
}

const classHotel = new HotelController(args[0]);
console.log(classHotel.getCheapest());