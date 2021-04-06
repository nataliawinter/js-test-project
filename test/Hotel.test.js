const Hotel = require('../Hotel');

test('Calculate all values of the Days', () => {
    const classHotel = new Hotel('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)');

    const result = [
        {
            "name": "Parque das Flores",
            "stars": 3,
            "total": 330
        },
        {
            "name": "Jardim Botânico",
            "stars": 4,
            "total": 480
        },
        {
            "name": "Mar Atlântico",
            "stars": 5,
            "total": 660
        }
    ];

    expect(classHotel.calculate()).toStrictEqual(result);
});

test('Return the values on constructor', () => {
    const classHotel = new Hotel('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)');

    expect(classHotel.typeClient).toBe('regular');
});