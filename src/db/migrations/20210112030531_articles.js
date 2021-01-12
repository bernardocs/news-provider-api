export function up(knex) {
  return knex.schema.createTable('articles', t => {
    t.increments('id');
    t.integer('author_id')
      .references('id').inTable('authors')
      .onDelete('cascade');
    t.string('title');
    t.string('category');
    t.string('summary');
    t.string('firstParagraph');
    t.text('body');
  });
};

export function down(knex) {
  return knex.schema.dropTable('articles');
};
