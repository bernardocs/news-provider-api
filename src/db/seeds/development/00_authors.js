
export function seed(knex) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        { id: 1, name: 'J.R.R.Tolkien', picture: 'https://bit.ly/35trIha' }
      ]);
    });
};
