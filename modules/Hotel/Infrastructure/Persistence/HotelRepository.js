class HotelRepository {
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

module.exports = HotelRepository;