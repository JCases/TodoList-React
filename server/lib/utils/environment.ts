import * as path from 'path';

export class Environment {

  public static isProd: boolean = process.env.NODE_ENV === 'production';
  public static logFolder: string = process.env.LOG_FOLDER || path.resolve('./logs');
  public static port: number = 3005;

  public static secret: string = 'Zx1!4Aasd1s6LiaRt1235O';
  public static issuer: string = 'booniverse2019';

  /**
   * Email config
   */
  public static host = '1234';
  public static emailUser = 'jcases.ba';
  public static emailPassword = 'Asdf0';

  public static dbName: string | undefined = process.env.POSTGRES_DB || process.env.RDS_DB_NAME;
  public static dbPass: string | undefined = process.env.POSTGRES_PASSWORD || process.env.RDS_PASSWORD;
  public static dbUser: string | undefined = process.env.RDS_USERNAME || 'sqlite';
  public static dbConfig: any = {
    host: process.env.POSTGRES_HOST || process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    dialect: 'sqlite',
    timezone: 'Europe/Dublin',
    isolationLevel: 'READ COMMITTED', // Needs this to lock transactions
    pool: {
      max: 20,
      min: 0,
      idle: 10000,
    },
  };
}
