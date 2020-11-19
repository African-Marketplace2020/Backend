const db = require("../database/dbConfig");

function find() {
  return db("items").select("id", "name", "description", "price", "location");
}

function findBy(filter) {
  return db("items").first().where(filter);
}

async function add(item) {
  const [id] = await db("items").insert(item, "id");

  return findById(id);
}

function findById(id) {
  return db("items").where({ id }).first();
}
module.exports = {
  add,
  find,
  findBy,
  findById,
};