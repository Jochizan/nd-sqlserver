import { config } from 'dotenv';

config();

export default {
  PORT: process.env.PORT + '',
  HOST: process.env.HOST + '',
  MSSQL_DB: process.env.MSSQL_DB + '',
  MSSQL_USER: process.env.MSSQL_USER + '',
  MSSQL_SERVER: process.env.MSSQL_SERVER + '',
  MSSQL_PASSWORD: process.env.MSSQL_PASSWORD + '',
}