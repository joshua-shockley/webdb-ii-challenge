exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('cars').truncate()
        .then(function() {
            // Inserts seed entries
            return knex('cars').insert([
                { model: 'civic', make: 'Honda', VIN: '1654095403565464064035740465', mileage: '26548' },
                { model: 'prius', make: 'Toyota', VIN: '1654095403565464064035740465', mileage: '2164' },
                { model: 'F-150', make: 'Ford', VIN: '1654095403565464064035740465', mileage: '21484' }
            ]);
        });
};