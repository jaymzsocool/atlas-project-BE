exports.up = function(knex) {
  return knex.schema.createTable("resources", function(tbl) {
    tbl.increments("id").primary();
    tbl.string("name", 128);
    tbl.float("gold_value");
    tbl
      .integer("resource_type_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("resource_type");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("resources");
};
