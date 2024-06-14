import {SET_BOOKS, REMOVE_FROM_READING_LIST, ADD_TO_READING_LIST} from './booksAction';

const booksReducer = (state, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return { ...state, books: action.payload };
        case REMOVE_FROM_READING_LIST:
            const bookIdToRemove = action.payload;
            const bookToRemove = state.readingList.find(book => book.title === bookIdToRemove);
            if (bookToRemove) {
                bookToRemove.inReadingList = false;
            }
            return {
                ...state,
                readingList: state.readingList.filter(book => book.title !== bookIdToRemove),
            };
        case ADD_TO_READING_LIST:
            const bookTitle = action.payload;
            const bookToAdd = state?.books?.books?.find(book => book.title === bookTitle);
            return {
                ...state,
                readingList: [...state.readingList, { ...bookToAdd, inReadingList: true }]
            };
        default:
            return state;
    }
};

export default booksReducer;