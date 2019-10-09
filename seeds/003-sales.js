exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('sales').truncate()
        .then(function() {
            // Inserts seed entries
            return knex('sales').insert([
                { carId: 3, buyerName: 'billy buyers', purchasePrice: 5000, paidInFull: true },
                { carId: 2, buyerName: 'billy buyers', purchasePrice: 5000, paidInFull: true },
            ]);
        });
};