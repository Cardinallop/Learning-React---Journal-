import { Container, Typography } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Journal from './Journal';
import About from './About';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Journal />} />
            <Route path="/about" element={<About />} />
            <Route 
                path="*"
                    element={
                        <Container>
                            <Typography variant="h2">That page doesn't exist</Typography>
                        </Container>
                    }/>

        </Routes>
    );
};

export default Router;