import seedInitialData from "./seedInitialData";

const dbInit = async (db: any) => {
  // Enable WAL mode for better performance
  await db.execAsync(`PRAGMA journal_mode = WAL;`);
  
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS campaigns (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT UNIQUE NOT NULL
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
    CREATE TABLE IF NOT EXISTS genders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
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
      charisma INTEGER,
      primary_ability TEXT
    );
  `);

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS species (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
    );
  `);

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS npcs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      hp INTEGER,
      ac INTEGER,
      speed INTEGER,
      caster BOOLEAN,
      campaign_id INTEGER,
      gender_id INTEGER,
      age_id INTEGER,
      potency_id INTEGER,
      archetype_id INTEGER,
      species_id INTEGER,
      bond_id INTEGER,
      flaw_id INTEGER,
      FOREIGN KEY (campaign_id) REFERENCES campaigns(id),
      FOREIGN KEY (gender_id) REFERENCES genders(id),
      FOREIGN KEY (age_id) REFERENCES ages(id),
      FOREIGN KEY (potency_id) REFERENCES potencies(id),
      FOREIGN KEY (archetype_id) REFERENCES archetypes(id),
      FOREIGN KEY (species_id) REFERENCES species(id),
      FOREIGN KEY (bond_id) REFERENCES bonds(id),
      FOREIGN KEY (flaw_id) REFERENCES flaws(id)
    );
  `);

  // Table to track if initial data has been seeded
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS db_metadata (
      key TEXT PRIMARY KEY,
      value TEXT
    );
  `);

  await db.execAsync(`PRAGMA foreign_keys = ON;`);

  // Check if initial data has been seeded
  const seedCheck = await db.getFirstAsync(`
    SELECT value FROM db_metadata WHERE key = 'initial_seed_complete'
  `);

  if (!seedCheck) {
    await seedInitialData(db);
    
    // Mark that initial seeding is complete
    await db.runAsync(`
      INSERT INTO db_metadata (key, value) VALUES ('initial_seed_complete', 'true')
    `);
  }
}

export default dbInit;
