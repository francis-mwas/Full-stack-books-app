import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import {Typography, Box, Button} from '@mui/material';

const ComingSoon = ({ message }) => {
    return (
        <Box
            sx={{
                textAlign: 'center',
                padding: '20px',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Typography variant="h5" sx={{ color: '#FAAD00' }}>Coming Soon</Typography>
            <Typography variant="body1" sx={{ color: '#FAAD00' }}>{message}</Typography>
            <Button startIcon={<HomeIcon/>} component={Link} to="/" variant="outlined" size="small"  sx={{ marginTop: '10px', color: "#28B8B8" }}>
                Go to Home Page
            </Button>
        </Box>
    );
};

export default ComingSoon;
