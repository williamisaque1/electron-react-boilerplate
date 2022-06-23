const db = require('../server/server');
exports.getAll = async () => {
  const produtos = await db.findAll();
  console.log(produtos);
  return produtos;
};
