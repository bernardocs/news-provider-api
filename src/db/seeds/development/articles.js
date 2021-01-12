
export function seed(knex) {
  return knex('articles').del()
    .then(() => {
      return knex('articles').insert({
        author_id: 1,
        category: "fantasy",
        title: "The Hobbit",
        summary: "The beggining of a legend",
        firstParagraph: "<p>In a hole in the ground there lived a hobbit...</p>",
        body: "<div><p>Pure awesomeness</p><p>Of a book</p></div>"
      });
    });
};
