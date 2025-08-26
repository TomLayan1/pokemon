import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

const PokemonCard:React.FC = () => {
  return (
    <View style={styles.cardContainer}>
      <Text>Pokemon Card</Text>
    </View>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#ffffff",
    padding: 7,
    borderRadius: 15,
    borderWidth: 2,
    margin: 9,
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
  }
})