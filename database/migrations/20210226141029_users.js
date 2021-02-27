
exports.up = function(knex) {
    return knex.schema
    .createTable("users", tbl => {
        tbl.increments();
        tbl.integer("userId").notNullable().unique();
      });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("users");
};
