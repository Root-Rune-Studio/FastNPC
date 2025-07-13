import { Archetype } from "@/types/db-schema";

const getArchetypes = async (db: any): Promise<{ data: Archetype[] | null, error?: string }> => {
  try {
    const result = await db.getAllAsync(`SELECT * FROM archetypes ORDER BY id`);
    return { data: result as Archetype[] };
  } catch (error) {
    console.error('Error fetching archetypes:', error);
    return { data: null, error: 'Failed to fetch archetypes' };
  }
};

export default getArchetypes;
