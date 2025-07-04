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
  await db.runAsync(`INSERT INTO potencies (name, modifier) VALUES ('Very Strong', 2)`);}

export default seedInitialData