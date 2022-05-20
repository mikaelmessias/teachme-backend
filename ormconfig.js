module.exports = {
  type: 'sqlite',
  database: 'data/sqlite.db',
  synchronize: true,
  logging: false,
  entities: [__dirname + '/dist/entities/*.js'],
  migrations: [__dirname + '/dist/migrations/*.js'],
  subscribers: [__dirname + '/dist/subscribers/*.js'],
  cli: {
    entitiesDir: ['src/entities/*.entity.js'],
    migrationsDir: ['src/migrations/*.js'],
    subscribersDir: ['src/subscribers/*.js'],
  },
};
