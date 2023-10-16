import React from 'react';
import AudienceForm from './components/Forms/AudienceForm';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <Container className="custom-container">
            <AudienceForm />
        </Container>
    );
}

export default App;
