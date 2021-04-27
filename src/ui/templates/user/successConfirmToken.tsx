import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function SuccessConfirmation() {
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Successfull Sign Up you can now sign in
                </Typography>
                <Typography variant="h4" component="h1" gutterBottom>
                    Every rep count
                </Typography>
            </Box>
        </Container>
    );
}

export default SuccessConfirmation;