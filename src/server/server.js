const { Sequelize } = require('sequelize');
const conectar = new Sequelize(
  `${process.env.DB_DATA_BASE}`,
  `${process.env.DB_USER}`,
  `${process.env.DB_PASS}`,
  {
    host: `${process.env.DB_HOST}`,
    dialect: 'postgres',

    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  }
);
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
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });

module.exports = conectar;
