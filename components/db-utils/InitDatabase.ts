const dbInit = async (db: any) => {
  // Enable WAL mode for better performance
  await db.execAsync(`PRAGMA journal_mode = WAL;`);
  
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      first_name TEXT,
      last_name TEXT,
      password TEXT NOT NULL
    );
  `);

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS ages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
    );
  `);

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS bonds (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      description TEXT NOT NULL
    );
  `);

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS flaws (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      description TEXT NOT NULL
    );
  `);

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS potencies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      modifier REAL
    );
  `);

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS archetypes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      description TEXT,
      strength INTEGER,
      dexterity INTEGER,
      constitution INTEGER,
      intelligence INTEGER,
      wisdom INTEGER,
      charisma INTEGER
    );
  `);

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS npcs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      race TEXT NOT NULL,
      age INTEGER,
      hp INTEGER,
      ac INTEGER,
      speed INTEGER,
      caster BOOLEAN,
      potency_id INTEGER,
      archetype_id INTEGER,
      user_id INTEGER,
      bond_id INTEGER,
      flaw_id INTEGER,
      FOREIGN KEY (potency_id) REFERENCES potencies(id),
      FOREIGN KEY (archetype_id) REFERENCES archetypes(id),
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (bond_id) REFERENCES bonds(id),
      FOREIGN KEY (flaw_id) REFERENCES flaws(id)
    );
  `);

  await db.execAsync(`PRAGMA foreign_keys = ON;`);
}

export default dbInit