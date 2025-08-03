import * as React from "react";
import { ThemedText } from "../ThemedText";
import { StyleProp, Text, TextStyle } from "react-native";
import { hitPointCalculator } from "@/services/display-step";
type Constitution = {
  con: number;
}
type HitPointModifier = {
  ageId: number;
  potencyId: number;
}
export default function HitPoints({
  con,
  ageId,
  potencyId,
  style
}: Constitution & HitPointModifier & { style?: StyleProp<TextStyle> }) {
  const [hitPoints, setHitPoints] = React.useState<number>(con);


  React.useEffect(() => {
    setHitPoints(hitPointCalculator(con, ageId, potencyId));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemedText style={[
      style,
      {
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'space-between',
        width: '100%'
      }
    ]}>
      <Text>{`Hit Points: ${hitPoints}`}</Text> 
    </ThemedText>
  )
}
