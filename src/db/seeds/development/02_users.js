
export function seed(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert({
        username: 'goat',
        hash: '$2a$09$Bh.cIk/gnAMjAGFQmnXCk.whvmRVO5eD/HTR8x/05N7HIvSVy8U3u', // secretzin
        profile: 'admin'
      });
    });
};
