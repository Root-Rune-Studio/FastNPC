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
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Street Urchin',
      'Scrappy Survivor',
      8, 14, 10, 10, 8, 12,
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
      'Gambler',
      'Risk-Taker',
      8, 12, 10, 12, 8, 14,
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
      'Exile',
      'Outcast',
      10, 10, 12, 10, 14, 8,
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
      'Scribe',
      'Knowledge Seeker',
      8, 10, 10, 16, 12, 10,
      'INT'
    )`
  );
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Hunter',
      'Beast Slayer',
      12, 14, 12, 10, 10, 8,
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
      'Peasant',
      'Hard Worker',
      14, 10, 12, 8, 10, 8,
      'STR'
    )`
  );
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Witch',
      'Arcane Practitioner',
      8, 8, 10, 12, 12, 14,
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
      'Scoundrel',
      'Devious Trickster',
      10, 14, 10, 12, 8, 12,
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
      'Mercenary',
      'Hired Blade',
      14, 12, 12, 10, 8, 10,
      'STR'
    )`
  );
  await db.runAsync(
    `INSERT INTO archetypes (
      name,
      description,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      primary_ability
    ) VALUES (
      'Alchemist',
      'Potion Crafter',
      8, 10, 12, 14, 10, 12,
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
  await db.runAsync(`INSERT INTO species (name) VALUES ('Aasimar')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Shadar-kai')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Dragonborn')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Tiefling')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Gnome')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Half-Elf')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Half-Orc')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Tabaxi')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Goliath')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Aarakocra')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Firbolg')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Lizardfolk')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Triton')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Genasi')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Kobold')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Orc')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Changeling')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Warforged')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Hobgoblin')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Goblin')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Kalashtar')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Shifter')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Bugbear')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Minotaur')`);
  await db.runAsync(`INSERT INTO species (name) VALUES ('Tortle')`);
}

export default seedInitialData
