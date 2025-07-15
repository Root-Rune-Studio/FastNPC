import React from "react";
import { ThemedText } from "../ThemedText";
import { StyleProp, Text, TextStyle } from "react-native";

type AbilityScores = {
  str: number;
  dex: number;
  con: number;
  wis: number;
  int: number;
  cha: number;
}
type AbilityModifier = {
  mod: number;
};

export default function StandardArray({
  str,
  dex,
  con,
  wis,
  int,
  cha,
  mod,
  style
}: AbilityScores & AbilityModifier & { style?: StyleProp<TextStyle> }) {
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
      <Text>{str + mod}  |  </Text> 
      <Text>{dex + mod}  |  </Text>
      <Text>{con + mod}  |  </Text> 
      <Text>{wis + mod}  |  </Text> 
      <Text>{int + mod}  |  </Text> 
      <Text>{cha + mod}</Text>
    </ThemedText>
  )
}
