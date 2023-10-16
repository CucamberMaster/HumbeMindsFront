import React from 'react';
import AudienceForm from './components/Forms/AudienceForm';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AudienceModel} from "./features/audience/audienceModel";
import {postAxios} from "./axios/generic-api-calls";

function App() {

    const submitSignIn = async (data: AudienceModel) => {
        try {
            // Send data to the server using postAxios
            const response = await postAxios('/audience', data);
            console.log("Sign-in successful: ", response);
        } catch (error) {
            console.error("Sign-in failed: ", error);
        }
    }
    
    return (
        <>
            <Container className="custom-container">
                <AudienceForm  onSubmit={submitSignIn}/>
            </Container>
        </>
    );
}

export default App;
