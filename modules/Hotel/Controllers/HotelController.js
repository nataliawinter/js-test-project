const HotelRepository = require('../Infrastructure/Persistence/HotelRepository');

class HotelController {
  constructor(queryString) {
      const params = queryString.split(':');
      this.typeClient = params[0].toLowerCase();
      this.dates = params[1].split(',').map(date => {
          return new Date(date);
      });
  }

  calculate() {
    let options = [];
    const hotelRepository = new HotelRepository();
    const { hotels } = hotelRepository.listAllHotels();

    hotels.map(hotel => {
      let results = [];
      this.dates.map(item => {
        var dayOfWeek = (item.getDay() === 6 || item.getDay() === 0) ? 'weekend' : 'weekday';

        results.push(hotel.type_client[0][this.typeClient][dayOfWeek]);
      });

      const total = results.reduce((total, currentValue) => total + currentValue);
      options.push({
        'name': hotel.name,
        'stars': hotel.stars,
        'total': total
      });
    });

    return options;
  }

  getCheapest() {
    let result = this.calculate();

    const teste = result.reduce((min, current) => {
      let star;
      if (current.total == min.total) {
        star = current.stars > min.stars ? current : min; 
      } else {
        star = current.total < min.total ? current : min;
      }

      return star;
    }, result[0]);

    return teste.name;
  }
}
module.exports = HotelController;