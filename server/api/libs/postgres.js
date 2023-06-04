import pg from 'pg';

async function getConnection() {
  const client = new pg.Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '1234',
    database: 'my_store'
  });
  await client.connect();
  return client;
}

export default getConnection;