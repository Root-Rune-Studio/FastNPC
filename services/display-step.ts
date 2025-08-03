const ageMod = (ageId: number): number => {
  let ageModifier = 0;
  switch (ageId) {
    case 1:
      ageModifier = 5;
      break;
    case 2:
      ageModifier = 10;
      break;
    case 3:
      ageModifier = 15;
      break;
    default:
      ageModifier = 10
  }
  return ageModifier;
}

const potencyMod = (potencyId: number): number => {
  let potencyModifier = 0;
  switch (potencyId) {
    case 1:
      potencyModifier = 1;
      break;
    case 2:
      potencyModifier = 3;
      break;
    case 3:
      potencyModifier = 5;
      break;
    case 4:
      potencyModifier = 10;
      break;
    case 5:
      potencyModifier = 15;
      break;
    default:
      potencyModifier = 5
  }
  return potencyModifier;
}

const d8 = (mod: number): number => {
  let rollSum = 0;
  for (let i = 0; i < mod; i++) {
    rollSum += Math.floor(Math.random() * (8 - 1 + 1)) + 1;
  }
  return rollSum;
}

const hitPointCalculator = ( con: number, ageId: number, potencyId: number ):number => {
  const ageModNum = ageMod(ageId);
  const potencyModNum = potencyMod(potencyId);

  return d8(potencyModNum) + con * potencyModNum + ageModNum;
}

const getAgeValue = async (db: any, id: number): Promise<{ name: string | null, error?: string }> => {
  try {
    const result = await db.getFirstAsync(`SELECT name FROM ages WHERE id = ${id}`);
    return result;
  } catch (error) {
    console.error('Error fetching potency modifier:', error);
    return {  name: null, error: 'Failed to fetch species' };
  }
}

export {
  getAgeValue,
  hitPointCalculator,
}
