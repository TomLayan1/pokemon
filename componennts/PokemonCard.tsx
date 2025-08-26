import React from 'react'
import { Image, Platform, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { pokemonDataType } from '../interface';
import { pokemonData } from '../data';

const PokemonCard:React.FC = () => {
  const data: pokemonDataType[] = pokemonData;
  const windowWidth = useWindowDimensions().width;

  const getTypeDetails = (type: string) => {
    switch (type.toLowerCase()) {
      case "fire":
        return { borderColor: '#FF5733', emoji: '🔥' }
      case "water":
        return { borderColor: '#6493EA', emoji: '💦' }
      case "grass":
        return { borderColor: '#66CC66', emoji: '🌱' }
      case "electric":
        return { borderColor: '#FFD700', emoji: '⚡' }
      default:
        return { borderColor: '#A0A0A0', emoji: '❗' }
    }
  }

  return (
    <>
      {data?.map((item, i) => {
        const { borderColor, emoji} = getTypeDetails(item.type);
        return (
          <View key={i} style={[styles.cardContainer, {
            margin: windowWidth > 480 ? 15 : 10,
          }]}>
            <View style={styles.nameContainer}>
              <Text style={[styles.name, {
                fontSize: windowWidth > 480 ? 30 : 23
              }]}>{item.name}</Text>
              <Text style={[styles.hp, {
                fontSize: windowWidth > 480 ? 25 : 18
              }]}>❤️{item.hp}</Text>
            </View>
            <Image 
              style={styles.image}
              source={item.image}
              accessibilityLabel={`${item.name} pokemon`} 
              resizeMode='contain'
            />
            <View style={styles.outterBadgeContainer}>
              <View style={[styles.badge, { borderColor: borderColor, borderWidth: 2 }]}>
                <Text style={[styles.hp, {
                  fontSize: windowWidth > 480 ? 25 : 18
                }]}>{item.type}</Text>            
                <Text style={[styles.hp, {
                  fontSize: windowWidth > 480 ? 25 : 18
                }]}>{emoji}</Text>
              </View>
            </View>
            <View>
              <Text style={[styles.moves, {fontSize: windowWidth > 480 ? 18 : 16}]}>
                Moves: {item.moves.join(", ")}
              </Text>
              <Text style={[styles.weaknesses, { fontSize: windowWidth > 480 ? 18 : 16 }]}>
                Weakness: {item.weaknesses.join(", ")}
              </Text>
            </View>
          </View>
        )
      })}
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
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  name: {
    fontWeight: "bold",
  },
  hp: {
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 12,
  },
  outterBadgeContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 14,
    marginBottom: 12
  },
  moves: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  weaknesses: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  }
})