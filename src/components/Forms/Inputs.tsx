import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { AudienceModel } from "../../features/audience/audienceModel";
import { useMutation } from "@tanstack/react-query";
import { postAxios } from "../../axios/generic-api-calls";

type Props = {
    onSubmit: (data: AudienceModel) => void;
}

function Inputs({ onSubmit }: Props) {
    const inputSpace = "my-4 p-3";
    const customStyle = {
        border: '1px solid #ced4da',
        boxShadow: '0 4px 2px -2px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        width: '100%',
    };

    const [questionOne, setFirst] = useState('');
    const [questioSecond, setSecond] = useState('');
    const [questionThird, setThird] = useState('');
    const [questionFour, setFour] = useState('');

    const mutation = useMutation((data: AudienceModel) => {
        return postAxios('/audience', data);
    });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Add your validation logic here
        if (!questionOne || !questioSecond || !questionThird || !questionFour) {
            alert('Please fill in all fields.');
            return;
        }

        mutation.mutate({
            question_one: questionOne,
            question_second: questioSecond,
            question_third: questionThird,
            question_four: questionFour,
        });
    };
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <div className="inputs-container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <Form.Group controlId="question1" className={inputSpace} style={customStyle}>
                                <Form.Label>Who are your customers?</Form.Label>
                                <Form.Control type="text" style={{borderBottom: '1px solid #ced4da'}}
                                              value={questionOne} onChange={(event) => setFirst(event.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="question2" className={inputSpace} style={customStyle}>
                                <Form.Label>Are there any special requiremenets like technology , location
                                    etc?</Form.Label>
                                <Form.Control type="text" style={{borderBottom: '1px solid #ced4da'}}
                                              value={questioSecond} onChange={(event) => setSecond(event.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="question3" className={inputSpace} style={customStyle}>
                                <Form.Label>What types of customers should be excluded</Form.Label>
                                <Form.Control type="text" style={{borderBottom: '1px solid #ced4da'}}
                                   value={questionThird} onChange={(event) => setThird(event.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="question4" className={inputSpace} style={customStyle}>
                                <Form.Label>What are the postistions of your projects?</Form.Label>
                                <Form.Control type="text" style={{borderBottom: '1px solid #ced4da'}}
                                   value={questionFour} onChange={(event) => setFour(event.target.value)}
                                />
                            </Form.Group>
                            <button type="submit" className="btn btn-danger mt-3 px-4">
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </div>
            </Form>
        </>
    );


}

export default Inputs;
