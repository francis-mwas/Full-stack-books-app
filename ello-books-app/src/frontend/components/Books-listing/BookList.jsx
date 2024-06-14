import {Grid, Paper} from "@mui/material";
import SingleBookList from "../bookList/BookListing";


const BookList = ({ booksList, action })=> {
    let { books } = booksList;
    console.log("The results after search results: ", booksList)
    return (
        <Grid container spacing={1}>
            {
               action ? (
                   booksList?.map( (book) =>(
                       <Grid item key={book?.id} xs={12} sm={8} md={6} lg={2}>
                           <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
                               <SingleBookList  bookData={book}/>
                           </Paper>
                       </Grid>
                   ))
               ): (
                   books?.map( (book) =>(
                       <Grid item key={book?.id} xs={12} sm={8} md={6} lg={2}>
                           <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
                               <SingleBookList  bookData={book}/>
                           </Paper>
                       </Grid>
                   ))
               )
            }
        </Grid>
    )
}
export default BookList;