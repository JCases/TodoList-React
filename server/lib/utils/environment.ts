import * as path from 'path';

export class Environment {
  public static isProd = process.env.NODE_ENV === 'production';
  public static logFolder = process.env.LOG_FOLDER || path.resolve('./logs');
  public static port = 3005;

  public static dbName = "todos";
  public static dbPass = "";
  public static dbUser = "root";
  private static dialect = 'sqlite';
  public static dbConfig: any = {
    host: process.env.POSTGRES_HOST || process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    dialect: Environment.dialect,
    ...(Environment.dialect !== 'sqlite' && { timezone: 'Europe/Dublin' }), //Disabled if dialect is 'sqlite'
    isolationLevel: 'READ COMMITTED', // Needs this to lock transactions
    pool: {
      max: 20,
      min: 0,
      idle: 10000,
    },
  };
}

