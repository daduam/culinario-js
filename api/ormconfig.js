module.exports = {
  type: "postgres",
  host: "localhost",
  port: "5432",
  username: "postgres",
  password: "postgres",
  // TODO database seems to need prior creation
  // database: "culinario",
  database: "postgres",
  // okay since I'm working alone and still in dev
  // remember to setup migrations when necessary
  synchronize: true,
  entities: ["dist/entities/*.js"],
  // migrations: ["dist/migrations/*.js"],
};
