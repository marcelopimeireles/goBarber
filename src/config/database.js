module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
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
