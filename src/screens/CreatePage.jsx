import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/slices/bookSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';




const CreatePage = ({ navigation }) => {

   useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: 'purple' },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerTitleStyle: { fontWeight: 'bold' },
    });
  }, [navigation]);

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async () => {

    if (!name || !year || !genre || !author) {
  Alert.alert('Error', 'Please fill in all fields.');
  return;
}

    try {
      const uploadItem = {
        title: name,
        publicationDate: year,
        genre,
        author,
        id: Date.now().toString(),
        image: "https://picsum.photos/200"
      }

      let books = await AsyncStorage.getItem('books');

      books = books ? JSON.parse(books) : []

      books = [...books, uploadItem];

  
      await AsyncStorage.setItem('books', JSON.stringify(books));

      dispatch(addBook(uploadItem));

      Alert.alert('Success',
        "You have successfully published the book."
      )

      navigation.goBack();
    }
    catch(err){
      console.error(err)
    }

  }


  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 8 }}>
        <View>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter book name...'
            onChangeText={setName}
            value={name}
          ></TextInput>
        </View>

        <View>
          <Text style={styles.label}>Genre</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter book genre...'
            onChangeText={setGenre}
            value={genre}
          ></TextInput>
        </View>

        <View>
          <Text style={styles.label}>Year</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter book year...'
            onChangeText={setYear}
            value={year}
            keyboardType="numeric"
          ></TextInput>
        </View>

        <View>
          <Text style={styles.label}>Author</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter book author...'
            onChangeText={setAuthor}
            value={author}
          ></TextInput>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.button}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.buttonText}>Publish Book</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default CreatePage
const styles = StyleSheet.create({
  label: {
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 5,
    fontSize: 16
  },
  input: {
    marginHorizontal: 30,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)"
  },
  button: {
    marginHorizontal: "auto",
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: "purple",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: 700
  }
});