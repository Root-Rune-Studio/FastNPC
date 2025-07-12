import type { SQLiteDatabase } from "expo-sqlite";
import { Alert } from "react-native";

const ClearDatabaseCampaigns = async (db: SQLiteDatabase) => {
    try {
      await db.runAsync('DELETE FROM campaigns');
      Alert.alert('Success', 'Database cleared');
    } catch (error) {
      console.error('Error clearing database:', error);
      Alert.alert('Error', 'Failed to clear database');
    }
};

export default ClearDatabaseCampaigns;