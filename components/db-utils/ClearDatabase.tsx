// import { useSQLiteContext } from "expo-sqlite";
// import { Alert } from "react-native";

// const ClearDatabase = async () => {
//      const db = useSQLiteContext()
//     try {
//       await db.runAsync('DELETE FROM users');
//       Alert.alert('Success', 'Database cleared');
//     } catch (error) {
//       console.error('Error clearing database:', error);
//     }
//   };

// export default ClearDatabase

import type { SQLiteDatabase } from "expo-sqlite";
import { Alert } from "react-native";

const ClearDatabase = async (db: SQLiteDatabase) => {
    try {
      await db.runAsync('DELETE FROM users');
      Alert.alert('Success', 'Database cleared');
    } catch (error) {
      console.error('Error clearing database:', error);
      Alert.alert('Error', 'Failed to clear database');
    }
};

export default ClearDatabase;