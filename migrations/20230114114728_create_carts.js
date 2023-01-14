/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("carts", table => {
      table.increments("id");
      table.string("username")
  })
    await knex.schema.createTable("carts_items", table => {
        table.integer("cartId").references("carts.id");
        table.string("itemName")
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTable("carts")
  await knex.schema.dropTable("carts_items")
};
