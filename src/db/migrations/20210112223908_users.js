export function up(knex) {
  return knex.schema.createTable('users', t => {
    t.increments('id');
    t.string('username').notNullable();
    t.string('hash').notNullable();
    t.enu('profile', ['user', 'admin']).defaultTo('user');
  });
};

export function down(knex) {
  return knex.schema.dropTable('users');
};
