export function up(knex) {
  return knex.schema.createTable('articles', t => {
    t.increments('id');
    t.integer('author_id')
      .references('id').inTable('authors')
      .onDelete('cascade');
    t.string('title').notNullable();
    t.string('category').notNullable();
    t.string('summary').notNullable();
    t.string('firstParagraph').notNullable();
    t.text('body').notNullable();
  });
};

export function down(knex) {
  return knex.schema.dropTable('articles');
};
