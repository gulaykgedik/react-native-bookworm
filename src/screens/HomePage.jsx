import { FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card';
import { pages } from '../constants';

const HomePage = ({navigation}) => {



    useEffect(() => {
        navigation.setOptions({
            headerTitle: "Bookworm",
            headerTitleAlign: "center",
            headerStyle: {
                backgroundColor: "purple",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            },
        });
    }, []);

    const dispatch = useDispatch();

    const books=useSelector((state) => state.books);

    useEffect(() => {

    const loadBooks = async () => {

      const data = await AsyncStorage.getItem('books');

      const books = JSON.parse(data) || [];

      console.log(books)

      dispatch(setBooks(books));


    }

  
    loadBooks();

    console.log("load books")

  }, [])

    const { CREATEPAGE } = pages;
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate(CREATEPAGE)}>
            <Text
                style={styles.createButton}
               
            >
               Create New Book
            </Text>
        </TouchableOpacity>
      </View>

        <View style={{ flex: 1, width: '100%', padding: 10, marginTop: 20 }}>
            <FlatList
            data={books}
            renderItem={({ item }) => (
             <Card item={item}/>
            )}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={() => (
                <Text style={{ textAlign: 'center', marginTop: 20 }}>No books available</Text>
            )}
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}        
            />   
        </View>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
    createButton: {
        backgroundColor: "purple",
        color: "#fff",
        padding: 15,
        borderRadius: 5,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 20,
    },

   
})