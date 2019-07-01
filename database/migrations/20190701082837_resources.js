exports.up = function(knex) {
  return knex.schema.createTable("resources", function(tbl) {
    tbl.increments("id").primary();
    tbl.string("name", 128)
    tbl.integer("gold_value");
    tbl.string("type", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("resources");
};
