// BooksContext.js
import React, { createContext, useReducer, useEffect } from 'react';
import GlobalBooksApi from "../../feighnClient";
import booksReducer from './booksReducer';
import { setBooks } from './booksAction';

const initialState = {
    books: [],
    readingList: [],
};

const BooksContext = createContext({
    state: initialState,
    dispatch: () => undefined,
});

const BooksProvider = ({ children }) => {
    const [state, dispatch] = useReducer(booksReducer, initialState);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const booksData = await GlobalBooksApi.fetchBooks();
                console.log("Data from API is here; ", booksData)
                dispatch(setBooks(booksData));
            } catch (error) {
               throw new Error("The error occurred: ", error);
            }
        };

        getBooks();
    }, []);

    return (
        <BooksContext.Provider value={{ state, dispatch }}>
            {children}
        </BooksContext.Provider>
    );
};

export { BooksContext, BooksProvider };
