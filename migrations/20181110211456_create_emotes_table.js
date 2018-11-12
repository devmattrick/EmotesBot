
exports.up = function(knex, Promise) {
  return knex.schema.createTable('emotes', (table) => {
    table.increments('id').unsigned().primary();
    table.integer('user_id').unsigned().references('users.id');
    table.string('emote').notNull();
    table.integer('uses').defaultTo(0);
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('emotes');
};
