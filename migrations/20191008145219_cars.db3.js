exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.string('make', 50).notNullable();
        tbl.string('model', 50).notNullable();
        tbl.integer('VIN', 128).notNullable();
        tbl.integer('mileage', 50).notNullable();
        tbl.string('title status', 50);
        tbl.string('transmission', 50);

    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars', tbl => {
        tbl.dropTableIfExists('cars');
    });
};