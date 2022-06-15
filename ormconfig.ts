const databases = {
  developement: 'monteiro',
  test: 'monteiro',
  production: 'monteiro'
}

const hosts = {
  developement: '127.0.0.1' ,
  test: '127.0.0.1',
  production: '127.0.0.1',
}

export const type = 'postgres';
export const host = hosts[process.env.NODE_ENV];
export const port = 5433;
export const username = 'postgres';
export const password = 'monteiro1';
export const database = databases[process.env.NODE_ENV];
export const synchronize = true;
export const logging = (process.env.NODE_ENV == 'production' || process.env.NODE_ENV == 'productionrasp'  ? false : false);
export const entities = ['src/entity/**/*.ts'];
export const migrations = ['src/migration/**/*.ts'];
export const subscribers = ['src/subscriber/**/*.ts'];
export const cli = {
   entitiesDir: 'src/entity',
   migrationsDir: 'src/migration',
   subscribersDir: 'src/subscriber',
};