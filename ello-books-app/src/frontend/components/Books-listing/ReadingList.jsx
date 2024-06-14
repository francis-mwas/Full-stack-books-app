import {Grid, Paper} from "@mui/material";
import SingleBookList from "../bookList/BookListing";


const ReadingList = ({ readingList })=> {

    console.log("The render in the redaing list: ", readingList)
    return (
        <Grid container spacing={1}>
            {

                readingList?.map( (book) =>(
                        <Grid item key={book?.id} xs={12} sm={8} md={6} lg={2}>
                            <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
                                <SingleBookList  bookData={book}/>
                            </Paper>
                        </Grid>
                    ))
            }
        </Grid>
    )
}
export default ReadingList;