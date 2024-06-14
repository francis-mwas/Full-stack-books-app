export const SET_BOOKS = 'SET_BOOKS';
export const REMOVE_FROM_READING_LIST  = 'REMOVE_FROM_READING_LIST ';
export const ADD_TO_READING_LIST = 'ADD_TO_READING_LIST';

export const setBooks = (books) => ({
    type: SET_BOOKS,
    payload: books,
});
export const addToReadingList = (bookTitle) => ({
    type: ADD_TO_READING_LIST,
    payload: bookTitle,
});
export const removeFromReadingList = (bookTitle) => ({
    type: REMOVE_FROM_READING_LIST,
    payload: bookTitle,
});
