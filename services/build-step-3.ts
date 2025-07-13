import { Species } from "@/types/db-schema";

const getSpecies = async (db: any): Promise<{ data: Species[] | null, error?: string }> => {
  try {
    const result = await db.getAllAsync(`SELECT * FROM species ORDER BY id`);
    return { data: result as Species[] };
  } catch (error) {
    console.error('Error fetching species:', error);
    return { data: null, error: 'Failed to fetch species' };
  }
};

export default getSpecies;
