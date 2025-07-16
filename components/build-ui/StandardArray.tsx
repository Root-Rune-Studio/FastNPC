import * as React from "react";
import { ThemedText } from "../ThemedText";
import { StyleProp, Text, TextStyle } from "react-native";
import { getPotencyModifier } from "@/services/build-step-2";

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
  id: number;
};

export default function StandardArray({
  str,
  dex,
  con,
  wis,
  int,
  cha,
  db,
  id,
  style
}: AbilityScores & AbilityModifier & { style?: StyleProp<TextStyle> }) {
  const [modifier, setModifier] = React.useState<number>(0);
  
    React.useEffect(() => {
      getPotencyModifier(db, id).then((potency) => {
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
      <Text>{wis + modifier}  |  </Text> 
      <Text>{int + modifier}  |  </Text> 
      <Text>{cha + modifier}</Text>
    </ThemedText>
  )
}
