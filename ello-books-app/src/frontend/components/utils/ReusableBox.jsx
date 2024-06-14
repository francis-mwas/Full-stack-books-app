import React from 'react';
import { Box } from '@mui/material';

const ReusableBoxComponent = ({ children }) => {
    return (
        <Box
            sx={{
                maxWidth: '1000px',
                margin: 'auto',
                padding: '20px',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                marginTop: '20px',
            }}
        >
            {children}
        </Box>
    );
};

export default ReusableBoxComponent;
