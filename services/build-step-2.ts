import { Archetype } from "@/types/db-schema";

export const getArchetypes = async (db: any): Promise<{ data: Archetype[] | null, error?: string }> => {
  try {
    const result = await db.getAllAsync(`SELECT * FROM archetypes ORDER BY id`);
    return { data: result as Archetype[] };
  } catch (error) {
    console.error('Error fetching archetypes:', error);
    return { data: null, error: 'Failed to fetch archetypes' };
  }
};

export const getPotencyModifier = async (db: any, id: number): Promise<{ modifier: number | null, error?: string }> => {
  try {
    const result = await db.getFirstAsync(`SELECT modifier FROM potencies WHERE id = ${id}`);
    return result;
  } catch (error) {
    console.error('Error fetching potency modifier:', error);
    // error returns default value of 0
    return { modifier: 0 };
  }
}
