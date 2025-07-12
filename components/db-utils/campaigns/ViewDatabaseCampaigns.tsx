import type { SQLiteDatabase } from "expo-sqlite";
import { Alert } from "react-native";

const ViewDatabaseCampaigns = async (db: SQLiteDatabase) => {
    try {
      const campaigns = await db.getAllAsync('SELECT * FROM campaigns');
      console.log('All campaigns:', campaigns);
      Alert.alert('Database Contents', JSON.stringify(campaigns, null, 2));
    } catch (error) {
      console.error('Error viewing database:', error);
      Alert.alert('Error', 'Failed to view database');
    }
};

export default ViewDatabaseCampaigns;