module.exports = {
  dialect: 'postgris',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamp: true,
    undescored: true,
    undescoredAll: true,
  },
};
