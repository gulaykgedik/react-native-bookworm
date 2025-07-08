

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic Fiction",
    year: 1960,
    description: "A novel about the serious issues of rape and racial inequality, told through the eyes of young Scout Finch in the Deep South.",
    image: "https://m.media-amazon.com/images/I/81gepf1eMqL._UF1000,1000_QL80_.jpg"
},
{
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    year: 1949,
    description: "A chilling prophecy about the future, presenting a dystopian world under totalitarian rule and constant surveillance.",
    image: "https://img.kitapyurdu.com/v1/getImage/fn:11484453/wh:true/wi:800ß"
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    year: 1925,
    description: "A story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, set in the Roaring Twenties.",
    image: "https://m.media-amazon.com/images/I/81af+MCATTL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    year: 1813,
    description: "A classic novel of manners that explores the issues of marriage, morality, and misconceptions in 19th-century England.",
    image: "https://m.media-amazon.com/images/I/81OthjkJBuL._AC_UF1000,1000_QL80_.jpg"
  }


]

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
       
        addBook: (state, action) => {
            try{
                const item = {
                ...action.payload,
            }

           
            state.push(item);
            }
            catch(err){
                console.error(err)
            }
        },

       
        deleteBook: (state, action) => {
            state = state.filter(book => book.id != action.payload);
            return state;
        },

        updateBook: (state, action) => {
            const { id, book } = action.payload;

            
            const index = state.findIndex(book => book.id == id)

            if (index !== -1) {
               
                state[index] = { ...state[index], ...book }
                console.log("güncelleme başarıyla yapıldı.")
            }

            return state;
        },

        setBooks: (state,action) => {
            state = action.payload;
            return state;
        }
    }
})


export default bookSlice.reducer


export const { addBook, deleteBook, updateBook, setBooks } = bookSlice.actions


