module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("HOST", "127.0.0.1"),
      port: env.int("PGPORT", 54997),
      database: env("POSTGRES_DB", "railway"),
      user: env("POSTGRES_USER", "postgres"),
      password: env("POSTGRES_PASSWORD", "password"),
      ssl: env.bool(true),
    },
  },
});
