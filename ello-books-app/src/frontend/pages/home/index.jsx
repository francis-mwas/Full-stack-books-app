import {SetStateAction, useContext, useState} from "react";
import Layout from "../../Layout";
import {Box, InputAdornment, InputBase, Paper, Typography} from "@mui/material";
import SearchIcon from "../../assets/icons/icon-search.svg";
import {BooksContext} from "../../context/booksContext";
import BookList from "../../components/Books-listing/BookList";


import image1 from "./"
import {addToReadingList} from "../../context/booksAction";
const  Home = () =>{
    const [search, setSearch] = useState("");
    const [searchList, setSearchList] = useState([]);
    const { state  } = useContext(BooksContext);


    const { books, readingList  } = state;
    console.log("The reading list home: ", readingList)


     const handleBookSearch = (e) => {
        setSearch(e.target.value);
         // @ts-ignore
       const searchResults = books?.books?.filter((book) =>
           book.title.toLowerCase().includes(search.toLowerCase())
       );

      setSearchList(searchResults);
         console.log("The searchResults: ", searchList)
    };

    return (
        <Layout>
            <Box>
                <Paper
                    component="form"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "default",
                        p: 1,
                        backgroundColor: "#28B8B8",
                        border: "none",
                    }}
                >
                    <InputBase
                        placeholder="Search through our books list"
                        sx={{
                            ml: 1,
                            flex: 1,
                            color: "white",
                            border: "none",
                        }}
                        value={search}
                        onChange={handleBookSearch}
                        startAdornment={
                            <InputAdornment position="start">
                                <img
                                    src={SearchIcon}
                                    alt="search icon"
                                    width={20}
                                    height={20}
                                />
                            </InputAdornment>
                        }
                    />
                </Paper>
            </Box>
            <Box py={2} px={4}>
                {search === "" ? (
                    <Box width="100%">
                        <Box width="100%">
                            <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                               Our Books catalogue
                            </Typography>
                            <BookList booksList={books} action={false}/>
                        </Box>
                    </Box>
                ) : (
                    <Box width="100%">
                        <Typography>
                            Found {searchList.length} results for {`${search}`}
                        </Typography>
                        <BookList booksList={searchList} action={true}/>
                    </Box>
                )}
            </Box>
        </Layout>
    )
}

export default Home;