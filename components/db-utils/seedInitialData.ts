const seedInitialData = async (db: any) => {
  // Seed genders
  await db.runAsync(`INSERT INTO genders (name) VALUES ('M')`);
  await db.runAsync(`INSERT INTO genders (name) VALUES ('N/A')`);
  await db.runAsync(`INSERT INTO genders (name) VALUES ('F')`);

  // Seed ages
  await db.runAsync(`INSERT INTO ages (name) VALUES ('Child')`);
  await db.runAsync(`INSERT INTO ages (name) VALUES ('Adult')`);
  await db.runAsync(`INSERT INTO ages (name) VALUES ('Elder')`);

  // Seed potencies
  await db.runAsync(`INSERT INTO potencies (name, modifier) VALUES ('Very Weak', -2)`);
  await db.runAsync(`INSERT INTO potencies (name, modifier) VALUES ('Weak', -1)`);
  await db.runAsync(`INSERT INTO potencies (name, modifier) VALUES ('Neutral', 0)`);
  await db.runAsync(`INSERT INTO potencies (name, modifier) VALUES ('Strong', 1)`);
  await db.runAsync(`INSERT INTO potencies (name, modifier) VALUES ('Very Strong', 2)`);

  // seed archetypes
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Commoner',
      'Common',
      10, 10, 10, 10, 10, 10,
      'CON'
    )`
  );
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Thief',
      'Roguish',
      8, 14, 10, 12, 8, 10,
      'DEX'
    )`
  );
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Hermit',
      'Loner',
      8, 10, 12, 12, 14, 8,
      'WIS'
    )`
  );
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Priest',
      'Holy',
      8, 8, 12, 10, 12, 14,
      'CHA'
    )`
  );
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Noble',
      'Annoying',
      10, 8, 12, 14, 10, 12,
      'INT'
    )`
  );

  // seed species
  await db.runAsync(`INSERT INTO species (name) VALUES ('Human')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Elf')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Dwarf')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Kenku')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Halfling')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Harengon')`);
}

export default seedInitialData
