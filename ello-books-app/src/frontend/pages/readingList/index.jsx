import Layout from "../../Layout";
import {useContext, useState} from "react";
import {BooksContext} from "../../context/booksContext";
import {Box, InputAdornment, InputBase, Paper, Typography} from "@mui/material";
import SearchIcon from "../../assets/icons/icon-search.svg";
import BookList from "../../components/Books-listing/BookList";
import ReadingList from "../../components/Books-listing/ReadingList";
import EmptyReadingList from "../../components/utils/NotFound";

const StudentReadingList = () =>{
    const [search, setSearch] = useState("");
    const [searchList, setSearchList] = useState([]);
    const { state  } = useContext(BooksContext);

    const { books, readingList  } = state;
    console.log("The reading list: ", readingList)

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
            {
                readingList.length > 0 ? (<Box py={2} px={4}>

                    <Box width="100%">
                        <Box width="100%">
                            <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                                Student's Reading List
                            </Typography>
                            <ReadingList readingList={readingList}/>
                        </Box>
                    </Box>
                </Box>):(
                    <EmptyReadingList/>
                )

            }
        </Layout>
    )
}

export default StudentReadingList;