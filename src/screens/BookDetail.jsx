import { Alert, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Edit, Trash } from 'iconsax-react-nativejs';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/slices/bookSlice';

const BookDetail = ({navigation,route}) => {

    useEffect(() => {
         if (title) {
            navigation.setOptions({
                title,
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: "purple",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            });
        }
    }, [navigation, title]);

    const { id,title,author,image,genre,price,rating, publicationDate } = route.params.item;

    const dispatch = useDispatch();
  return (
    <View style={styles.cardContainer}>
     <View style={styles.imgContainer}>
        <Image   source={{ uri: image }}
        style={styles.img}
        resizeMode="cover"
        alt="Book Cover"/>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardAuthor} >{author}</Text>
        <Text style={styles.cardGenre} > {genre}</Text>
        <Text style={styles.cardPublicationDate} >{publicationDate}</Text>
       
        <Text style={styles.cardPrice} >{price} $</Text>
        <Text style={styles.cardRating} > {rating} ⭐</Text>

       <View style={styles.buttonsContainer}>
  <View style={styles.buttons}>
    <TouchableOpacity style={styles.button} onPress={() => {
      dispatch(deleteBook(route.params.item.id));
        navigation.goBack();

        Alert.alert("Transaction successful")
    
    }}>
      <Trash  color="red" size={40} />
    </TouchableOpacity>
  </View>
  <View style={styles.buttons}>
    <TouchableOpacity style={styles.button}>
      <Edit color="purple" size={36}  />
    </TouchableOpacity>
  </View>
</View>
       
     </View>
    </View>
  )
}

export default BookDetail

const styles = StyleSheet.create({
  cardContainer: {
       
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        marginTop: 30,
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
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 5,
    },
    cardAuthor: {
        fontSize: 20,
        color: "gray",
        marginBottom: 5,
    },
    cardGenre: {
        fontSize: 18,
        color: "gray",
        marginBottom: 5,
    },
    cardPrice: {
        fontSize: 18,
        color: "green",
        marginBottom: 5,
    },
    cardRating: {
        fontSize: 18,
        color: "orange",
        marginBottom: 5,
    },
    cardPublicationDate: {
        fontSize: 18,
        color: "gray",
        marginBottom: 5,
    },
    cardPublisher: {
        fontSize: 18,
        color: "gray",
        marginBottom: 5,
    },
    cardDescription: {
        fontSize: 14,
        color: "gray",
        marginBottom: 5,
    },
   
    imgContainer: {
    justifyContent: "center",
    alignItems: "center",
 
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10, 
    marginLeft: 10, 
       
    },
    img: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginBottom: 10,
        

    },
   buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center", 
    alignItems: "center",    
    marginTop: 10,
    width: "100%",
    paddingHorizontal: 0,   
},
buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    width: "auto",           
    gap: 10,                
},
button: {
    backgroundColor: "transparent", 
    padding: 15,
    borderRadius: 5,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 0,
    marginHorizontal: 5,
},
})