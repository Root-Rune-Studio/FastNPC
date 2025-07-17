/*reusable compnent for displaying potency adjusted ability scores*/
import * as React from "react";
import { ThemedText } from "../ThemedText";
import { StyleProp, Text, TextStyle } from "react-native";
import { getPotencyModifier } from "@/services/build-step-2";

// data from different tables typed separately for flexibility and clarity
type AbilityScores = {
  str: number;
  dex: number;
  con: number;
  wis: number;
  int: number;
  cha: number;
}
type AbilityModifier = {
  db: any;
  potencyId: number;
};

export default function StandardArray({
  str,
  dex,
  con,
  int,
  wis,
  cha,
  db,
  potencyId,
  style
}: AbilityScores & AbilityModifier & { style?: StyleProp<TextStyle> }) {
  const [modifier, setModifier] = React.useState<number>(0);
  
    React.useEffect(() => {
      getPotencyModifier(db, potencyId).then((potency) => {
        setModifier(potency.modifier as number);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
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
      <Text>{str + modifier}  |  </Text> 
      <Text>{dex + modifier}  |  </Text>
      <Text>{con + modifier}  |  </Text> 
      <Text>{int + modifier}  |  </Text> 
      <Text>{wis + modifier}  |  </Text> 
      <Text>{cha + modifier}</Text>
    </ThemedText>
  )
}
