exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("markups")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("markups").insert([
        { name: "wholesale", markup_percent: 1.25 },
        { name: "retail", markup_percent: 1.6 },
        { name: "naval", markup_percent: 1.1 },
        { name: "naval escort", markup_percent: 0.85 }
      ]);
    });
};
