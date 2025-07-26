import * as React from "react";
import { StyleProp, TextStyle } from "react-native";
type Constitution = {
  con: number;
}
type HitPointModifier = {
  db: any;
  ageId: number;
  potencyId: number;
}
export default function HitPoints({
  con,
  db,
  ageId,
  potencyId,
  style
}: Constitution & HitPointModifier & { style?: StyleProp<TextStyle> }) {
  const [HitPoints, setHitPoints] = React.useState<number>(con);
}
