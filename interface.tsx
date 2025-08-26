import { ImageSourcePropType } from "react-native";

export interface pokemonDataType {
  name: string;
  image: ImageSourcePropType;
  type: string;
  hp: number,
  moves: string[];
  weaknesses: string[];
}