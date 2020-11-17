
exports.up = async function(knex) {
  await knex.schema.createTable('items', items => {
      items.increments();
      items
        .string('name', 255)
        .notNullable();
        items
        .string('description', 255)
        .notNullable();
        items
        .decimal('price', 15,2)
        .notNullable();
        items
        .string('location', 255)
        .notNullable();
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('items');
};
