exports.up = function(knex) {
  return knex.schema.createTable('vegetables', tbl => {
    tbl.increments();

    tbl.string('model', 255).index();
    tbl.string('make', 255).index();
    tbl.integer('mileage').index();
    tbl.string('vin').unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
