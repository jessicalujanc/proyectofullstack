const pool = require("./bd");

async function getComunidad() {
  const query = "SELECT * FROM comunidad ORDER BY id desc";
  const rows = await pool.query(query);
  return rows;
}

async function insertComentario(obj) {
  try {
    var query = "INSERT INTO comunidad SET ?";
    var rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function deleteComentarioById(id) {
  var query = "DELETE FROM comunidad WHERE id = ?";
  var rows = await pool.query(query, [id]);
  return rows;
}

async function getComentarioById(id) {
  var query = "SELECT * FROM comunidad WHERE id = ?";
  var rows = await pool.query(query, [id]);
  return rows[0];
}

async function modificarComentarioById(obj, id) {
  try {
    var query = "UPDATE comunidad SET ? WHERE id = ?";
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getComunidad,
  insertComentario,
  deleteComentarioById,
  getComentarioById,
  modificarComentarioById,
};
