import React from 'react'
import { Image, Platform, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { pokemonDataType } from '../interface';
import { pokemonData } from '../data';

const PokemonCard:React.FC = () => {
  const data: pokemonDataType[] = pokemonData;
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  console.log({
    windowWidth,
    windowHeight
  })

  return (
    <>
      {data?.map((item, i) => (
        <View key={i} style={[styles.cardContainer, {
          margin: windowWidth > 480 ? 15 : 10,
        }]}>
          <View>
            <Text style={[styles.name, {
              fontSize: windowWidth > 480 ? 30 : 21
            }]}>{item.name}</Text>
            <Text style={[styles.hp, {
              fontSize: windowWidth > 480 ? 25 : 18
            }]}>{item.hp}</Text>
            <Text style={[styles.hp, {
              fontSize: windowWidth > 480 ? 25 : 18
            }]}>{item.type}</Text>
          </View>
          {/* <Image style={styles.image} source={item.image} accessibilityLabel={`${item.name} pokemon`} /> */}
          <View>
            <Text style={{fontSize: windowWidth > 480 ? 18 : 16}}>
              <Text style={styles.moves}>Moves: </Text>
              {item.moves.join(", ")}
            </Text>
            <Text style={{ fontSize: windowWidth > 480 ? 18 : 16 }}>
              <Text style={styles.weaknesses}>Weakness: </Text>
              {item.weaknesses.join(", ")}
            </Text>
          </View>
        </View>
      ))}
    </>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 15,
    borderWidth: 2,
    ...Platform.select({
      ios:{
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333333",
        shadowOpacity: 0.3,
        shadowRadius: 4
      },
      android: {
        elevation: 10
      }
    })
  },
  name: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  hp: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  image: {
    width: "90%",
    height: "100%"
  },
  moves: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  weaknesses: {
    fontWeight: "bold",
    marginBottom: 8,
  }
})