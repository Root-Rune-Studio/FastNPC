import { useSQLiteContext } from "expo-sqlite";
import { Alert } from "react-native";

const ViewDatabase = async () => {
    const db = useSQLiteContext()
    try {
      const users = await db.getAllAsync('SELECT * FROM users');
      console.log('All users:', users);
      Alert.alert('Database Contents', JSON.stringify(users, null, 2));
    } catch (error) {
      console.error('Error viewing database:', error);
    }
}
export default ViewDatabase