//TODO: Initialize all tables from Schema -- not just users
const dbInit = async (db: any) => {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      password TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL
    );
  `);
  
  await db.execAsync(`PRAGMA journal_mode = WAL;`);
}

export default dbInit