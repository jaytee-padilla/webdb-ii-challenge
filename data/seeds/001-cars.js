
exports.seed = function(knex) {
  // Deletes ALL existing entries
	return knex('cars')
		.truncate() // empties the table and resets the id. del() empties the table, but DOESN'T reset the id
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: "1j1j1jj11", make: "Toyota", model:" Matrix", mileage: 50000, transmissionType: "automatic", title: "clean"},
        {VIN: "2aa222aa2", make: "Honda", model: "Civic", mileage: 150000},
        {VIN: "888f99df9f", make: "Tesla", model: "Model 3", mileage: 10, transmissionType: "automatic", title: "clean"}
      ]);
    });
};
