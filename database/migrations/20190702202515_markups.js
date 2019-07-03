exports.up = function(knex) {
  return knex.schema.createTable("markups", function(tbl) {
    tbl.increments("id").primary();
    tbl.string("name", 128);
    tbl.float("markup_percent");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("markups");
};
