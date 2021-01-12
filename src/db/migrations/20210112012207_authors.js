export function up(knex) {
  return knex.schema.createTable('authors', t => {
    t.increments('id');
    t.string('name');
    t.string('picture', 2084);
  });
};

export function down(knex) {
  return knex.schema.dropTable('authors');
};
