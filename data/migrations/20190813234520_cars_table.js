
// up are the changes to make to the schema
exports.up = function(knex) {
	return knex.schema.createTable('cars', tbl => {
		// primary key, id, autoincrements
		tbl.increments();

		tbl.string('VIN', 128).unique().notNullable();
		tbl.string('make', 128).notNullable();
		tbl.string('model', 128).notNullable();
		tbl.integer('mileage').notNullable();
		tbl.string('transmissionType', 128).nullable();
		tbl.string('title', 128).nullable();
	});
};

// how we undo the changes made in the up function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};