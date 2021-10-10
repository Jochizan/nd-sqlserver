import sql from 'mssql';
import config from '../config';

const sqlConfig = {
  user: config.MSSQL_USER,
  password: config.MSSQL_PASSWORD,
  server: config.MSSQL_SERVER,
  database: config.MSSQL_DB,
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

const connMSSQL = async () => {
  try {
    const pool = await sql.connect(sqlConfig);
    console.log('MSSQL connection SUCCESS ✔');
    console.log('Database is connected to:', config.MSSQL_DB);
    return pool;
  } catch (err) {
    console.error('MSSQL connection FAIL ❌');
    console.error(err);
    process.exit(1);
  }
};

export { sql };
export default connMSSQL;
