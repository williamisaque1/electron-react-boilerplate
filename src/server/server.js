const { Sequelize } = require('sequelize');
const conectar = new Sequelize({
  dialect: 'sqlite',
  storage: './database',
});
const { DataTypes } = require('sequelize');
const tarefa = conectar.define(
  'tarefa',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    conteudo: {
      type: DataTypes.STRING,

      allowNull: false,
    },
    realizada: { type: DataTypes.BOOLEAN },
  },
  {
    timestamps: true,
  }
);
tarefa
  .sync({ force: false })
  .then(() => {
    return true;
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = tarefa;
