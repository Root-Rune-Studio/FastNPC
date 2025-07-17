import { Species } from "@/types/db-schema";

export const getSpecies = async (db: any): Promise<{ data: Species[] | null, error?: string }> => {
  try {
    const result = await db.getAllAsync(`SELECT * FROM species ORDER BY id`);
    return { data: result as Species[] };
  } catch (error) {
    console.error('Error fetching species:', error);
    return { data: null, error: 'Failed to fetch species' };
  }
};

export const getAgeValue = async (db: any, id: number): Promise<{ name: string | null, error?: string }> => {
  try {
    const result = await db.getFirstAsync(`SELECT name FROM ages WHERE id = ${id}`);
    return result;
  } catch (error) {
    console.error('Error fetching potency modifier:', error);
    return {  name: null, error: 'Failed to fetch species' };
  }
}

export const hitPoints = async (db: any, potencyId: number, ageId: number, con: number) => {
  // future function to calculate hit points
}
