import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const EmptyReadingList = () => {
    return (
        <Box  sx={{
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            marginTop: '40px'
        }}>
            <Typography variant="h5" sx={{ color: '#FAAD00' }}>The reading list is empty.</Typography>
            <Typography variant="body1" sx={{ color: '#FAAD00' }}>Start adding books to the reading list!</Typography>
            <Button component={Link} to="/" startIcon={<AddIcon />}  variant="outlined" size="small"  sx={{ color: "#28B8B8"}}   sx={{ marginTop: '10px' }}>
                Add Books
            </Button>
        </Box>
    );
};

export default EmptyReadingList;
