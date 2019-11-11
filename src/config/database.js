module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamp: true,
    undescored: true,
    undescoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
