const db = require("../database/dbConfig");

module.exports = {
  find,
  findById,
  findByUserId,
  add,
  remove,
};

function find() {
    return db("users");
}

function findById(id) {
    return db("users")
      .select("id")
      .orderBy("id")
      .where({ id })
      .first();
}

function findByUserId(userId) {
    return db("users")
      .select("userId")
      .orderBy("userId")
      .where({ userId })
      .first();
}

function add(user) {
        return db("users")
        .insert(user, "id")
        .then(ids => {
          const [id] = ids;
          return findById(id);
        });
    }

function remove(id) {
    return db("users")
      .where({ id })
      .del();
}