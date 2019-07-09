exports.up = function(knex) {
    return knex.schema.createTable("resource_type", function(tbl) {
      tbl.increments("id").primary();
      tbl.string("name", 128);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("resource_type");
  };
  