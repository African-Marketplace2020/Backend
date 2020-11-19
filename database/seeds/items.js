
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, name: 'Tomatoes', description: 'Cherry tomatoes', price: 2.25, location: 'Nairobi' },
        {id: 2, name: 'Cucumbers', description: 'Improved green cucumber', price: 1.89, location: 'Lagos'},
        {id: 3, name: 'Garlic', description: 'Fresh softneck garlic', price: 1.49, location: 'Johannesburg'}
      ]);
    });
};
