module.exports = {
  type: 'sqlite',
  database: 'data/sqlite.db',
  synchronize: true,
  logging: false,
  entities: [`${__dirname}${process.env.ENTITIES_FILES}`],
  subscribers: [`${__dirname}${process.env.SUBSCRIBERS_FILES}`],
  migrations: [`${__dirname}${process.env.MIGRATIONS_FILES}`],
  cli: {
    entitiesDir: [process.env.ENTITIES_DIR],
    migrationsDir: [process.env.MIGRATIONS_DIR],
    subscribersDir: [process.env.SUBSCRIBERS_DIR],
  },
};
