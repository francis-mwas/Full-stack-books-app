import {useContext, useState} from "react";
import {BooksContext} from "../../context/booksContext";
import {Box, Card, CardContent, Grid, Typography} from "@mui/material";
import { Button, CardActionArea, CardActions } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {addToReadingList, removeFromReadingList} from "../../context/booksAction";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,

} from '@mui/material';
import { toast } from 'react-toastify';
const SingleBookList = ({ bookData })=> {
    console.log("getting here is : ", bookData)
     const { dispatch } = useContext(BooksContext);
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [openRemoveDialog, setOpenRemoveDialog] = useState(false);
    const [bookTitleToRemove, setBookTitleToRemove] = useState(null);
    const [bookTitleToAdd, setBookTitleToAdd] = useState(null);

    const handleAddToReadingList = (bookTitle) => {
        setBookTitleToAdd(bookTitle);
        setOpenAddDialog(true);
    };
    const handleAddBooksToReadingList = () => {
        dispatch(addToReadingList(bookTitleToAdd));
        toast.success(`Book ${bookTitleToAdd} added to reading list!`);
        setOpenAddDialog(false);
        setBookTitleToAdd(null);
    };

    const handleCancelAdd = () => {
        setOpenAddDialog(false);
        setBookTitleToAdd(null);
    };

    const handleRemoveFromReadingLists = (bookTitle) => {
        setBookTitleToRemove(bookTitle);
        setOpenRemoveDialog(true)
    };
    const handleRemoveFromReadingList = (bookTitle) => {
        dispatch(removeFromReadingList(bookTitleToRemove));
        toast.error(`Book ${bookTitleToRemove} removed from the reading list!`);
        setOpenRemoveDialog(false)
        setBookTitleToRemove(null);
    };
    const handleClose = () => {
        setOpenRemoveDialog(false)
        setBookTitleToRemove(null);
    };

     return (
         <>
             <Card sx={{ my: 3, maxWidth: 345 }}>
                 <CardActionArea>
                     <CardMedia
                         component="img"
                         height="140"
                         image={`/images/${bookData.coverPhotoURL}`}
                         alt="green iguana"
                     />
                     <CardContent>
                         <Typography aria-label="movie rating" padding={0} sx={{my: 1, color: "#FAAD00"}}>
                            Book Author: {bookData?.author}
                         </Typography>
                         <Typography variant="body2" color="text.secondary">
                           Book Title:  {bookData?.title}
                         </Typography>
                         <Typography variant="body2"  sx={{my: 1, color: "#FAAD00"}}>
                            Reading Level: {bookData?.readingLevel}
                         </Typography>
                     </CardContent>
                 </CardActionArea>
                 <CardActions sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     marginBottom: 2,
                 }}>
                     {bookData?.inReadingList === true ?
                         (
                             <Button startIcon={<DeleteIcon />}  variant="outlined" size="small"  sx={{ color: "#28B8B8"}}  onClick={() => handleRemoveFromReadingLists(bookData?.title)}>
                               <Typography>Remove from reading list</Typography>
                             </Button>
                         )
                         : (
                             <Box

                             >
                             <Button startIcon={<AddIcon />}  variant="outlined" size="small" sx={{ color: "#28B8B8", textAlign: 'center'}}  onClick={() => handleAddToReadingList(bookData?.title)}>
                                 <Typography>Add to reading list </Typography>
                             </Button>
                             </Box>
                         )
                     }
                 </CardActions>
                 <Dialog open={openAddDialog} onClose={handleCancelAdd}>
                     <DialogTitle>Add A Book</DialogTitle>
                     <DialogContent>
                         <DialogContentText>
                             Are you sure you want to add this book by <span
                             style={{color: "#FAAD00"}}>{bookData?.author} </span> to the reading list?
                         </DialogContentText>
                     </DialogContent>
                     <DialogActions>
                         <Button onClick={handleCancelAdd} color="primary">
                             Dont Add
                         </Button>
                         <Button onClick={handleAddBooksToReadingList} color="primary" autoFocus>
                             Add A Book
                         </Button>
                     </DialogActions>
                 </Dialog>
                 <Dialog
                     open={openRemoveDialog}
                     onClose={handleClose}
                 >
                     <DialogTitle>Remove A Book by  <span style={{color: "#FAAD00"}}>{bookData?.author} </span> From Reading List</DialogTitle>
                     <DialogContent>
                         <DialogContentText>
                             Are you sure you want to remove this book from the student reading list?
                         </DialogContentText>
                     </DialogContent>
                     <DialogActions>
                         <Button onClick={handleClose} color="primary">
                             Dont Remove
                         </Button>
                         <Button onClick={handleRemoveFromReadingList} color="secondary">
                             Remove A Book
                         </Button>
                     </DialogActions>
                 </Dialog>
             </Card>
         </>
     )
 }
export default SingleBookList;