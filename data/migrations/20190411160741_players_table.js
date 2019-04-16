
exports.up = function(knex) {
  return knex.schema.createTable('players', player => {
      player.increments()

      player
      .string('name', 128)
      .notNullable()

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('players')
};
