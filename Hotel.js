
class Hotel {
    constructor(queryString) {
        const params = queryString.split(':');
        this.typeClient = params[0].toLowerCase();
        this.dates = params[1].split(',').map(date => {
            return new Date(date);
        });
    }
  
    calculate() {
      let options = [];
      const { hotels } = this.listAllHotels();
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
  
    listAllHotels() {
      return {
          "hotels":[
              {
                  "name": "Parque das Flores", 
                  "stars": 3,
                  "type_client": [
                      {
                          "regular": {
                              "weekday": 110,
                              "weekend": 90
                          },
                          "fidelidade": {
                              "weekday": 80,
                              "weekend": 80
                          }
                      }
                  ]
              },
              {
                  "name": "Jardim Botânico", 
                  "stars": 4,
                  "type_client": [
                      {
                          "regular": {
                              "weekday": 160,
                              "weekend": 60
                          },
                          "fidelidade": {
                              "weekday": 110,
                              "weekend": 50
                          }
                      }
                  ]
              },
              { 
                  "name": "Mar Atlântico", 
                  "stars": 5,
                  "type_client": [
                      {
                          "regular": {
                              "weekday": 220,
                              "weekend": 150
                          },
                          "fidelidade": {
                              "weekday": 100,
                              "weekend": 40
                          }
                      }
                  ]
              }
          ]
      };
    }
  }
  
  const args = process.argv.slice(2);
  if (args[0] === '' || args[0] == undefined) {
    console.log('Por favor, digite um valor de entrada, você deve passar o tipo de cliente e as datas.');
    return;
  }
  
  const classHotel = new Hotel(args[0]);
  console.log(classHotel.getCheapest());
  
  