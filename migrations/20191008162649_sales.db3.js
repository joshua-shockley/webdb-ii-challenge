exports.up = function(knex) {
    return knex.schema.createTable('sales', tbl => {
        tbl.increments();
        tbl.string('carId', 10).notNullable();
        tbl.string('buyerName', 50).notNullable();
        tbl.integer('purchasePrice', 50).notNullable();
        tbl.boolean('paidInFull');

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sales');
};