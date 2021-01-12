export function up(knex) {
  return knex.schema.createTable('authors', t => {
    t.increments('id');
    t.string('name').notNullable();
    t.string('picture', 2084).notNullable();
  });
};

export function down(knex) {
  return knex.schema.dropTable('authors');
};
