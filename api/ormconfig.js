module.exports = {
  type: "postgres",
  host: "db",
  port: "5432",
  username: "postgres",
  password: "postgres",
  database: "culinario",
  // okay since I'm working alone and still in dev
  // remember to setup migrations when necessary
  synchronize: true,
  entities: ["dist/entities/*.js"],
  // migrations: ["dist/migrations/*.js"],
  logging: true,
};
