import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { pages } from '../constants';

const Card = ({item}) => {
    const navigation = useNavigation();

    const {BOOKDETAIL} = pages
  return (
      <TouchableOpacity
                     onPress={() => navigation.navigate("BOOKDETAIL", {item})}
                     style={styles.cardContainer}
                 >
                    <View >
                      <Text style={styles.cardTitle}>{item.title}</Text>
                     <Text style={styles.cardAuthor}>{item.author}</Text>
                     <Text style={styles.cardGenre}>{item.genre}</Text>
                     <Text style={styles.cardPrice}>{item.price} $</Text>
                     <Text style={styles.cardRating}>{item.rating} ⭐</Text>
                     <Text style={styles.cardPublicationDate}>{item.publicationDate}</Text>
                     <Text style={styles.cardPublisher}>{item.publisher}</Text>
                    
                    </View>
 
                    <View style={styles.imgContainer}>
                     <Image
                     source={{ uri: item.image }} style={styles.img}
                     resizeMode="cover"
                     alt="Book Cover"
                     />
                    </View>
                 </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
     cardContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    cardAuthor: {
        fontSize: 16,
        color: "gray",
        marginBottom: 5,
    },
    cardGenre: {
        fontSize: 14,
        color: "gray",
        marginBottom: 5,
    },
    cardPrice: {
        fontSize: 16,
        color: "green",
        marginBottom: 5,
    },
    cardRating: {
        fontSize: 14,
        color: "orange",
        marginBottom: 5,
    },
    cardPublicationDate: {
        fontSize: 14,
        color: "gray",
        marginBottom: 5,
    },
    cardPublisher: {
        fontSize: 14,
        color: "gray",
        marginBottom: 5,
    },
    cardDescription: {
        fontSize: 14,
        color: "gray",
        marginBottom: 5,
    },
   
    imgContainer: {
        width: 130,
    height: 130,
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 0, 
    marginLeft: 10, 
    justifyContent: "flex-end", 
    alignItems: "flex-end",     
    },
    img: {
        width: 130,
        height: 130,
        borderRadius: 10,
        marginTop: 10,
        

    },
})