exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resource_type")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resource_type").insert([
        { name: "fibers" },
        { name: "thatch" },
        { name: "wood" },
        { name: "sugars" },
        { name: "coal" },
        { name: "flint" },
        { name: "stone" },
        { name: "metal" },
        { name: "alloys" },
        { name: "crystals" },
        { name: "gems" },
        { name: "salt" },
        { name: "hide" },
        { name: "karatanoid" },
        { name: "coral" },
        { name: "paste" },
        { name: "oil" },
        { name: "mythos" },
        { name: "craftables" },
      ]);
    });
};
