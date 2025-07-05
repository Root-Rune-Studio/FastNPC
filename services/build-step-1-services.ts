import { Age, Gender, Potency } from '@/types/db-schema';

export const getGenders = async (db: any): Promise<{ data: Gender[] | null, error?: string }> => {
  try {
    const result = await db.getAllAsync(`SELECT * FROM genders ORDER BY id`);
    return { data: result as Gender[] };
  } catch (error) {
    console.error('Error fetching genders:', error);
    return { data: null, error: 'Failed to fetch genders' };
  }
};

export const getAges = async (db: any): Promise<{ data: Age[] | null, error?: string }> => {
  try {
    const result = await db.getAllAsync(`SELECT * FROM ages ORDER BY id`);
    return { data: result as Age[] };
  } catch (error) {
    console.error('Error fetching ages:', error);
    return { data: null, error: 'Failed to fetch ages' };
  }
};

export const getPotencies = async (db: any): Promise<{ data: Potency[] | null, error?: string }> => {
  try {
    const result = await db.getAllAsync(`SELECT * FROM potencies ORDER BY id`);
    return { data: result as Potency[] };
  } catch (error) {
    console.error('Error fetching potencies:', error);
    return { data: null, error: 'Failed to fetch potencies' };
  }
};

