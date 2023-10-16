import React from 'react';
import Form from 'react-bootstrap/Form';

function Inputs({
                    questionOne,
                    setQuestionOne,
                    questionSecond,
                    setQuestionSecond,
                    questionThird,
                    setQuestionThird,
                    questionFour,
                    setQuestionFour,
                    isLoading,
                    errorMessage,
                    onSubmit,
                }) {
    const inputSpace = 'my-4 p-3';
    const customStyle = {
        border: '1px solid #ced4da',
        boxShadow: '0 4px 2px -2px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        width: '100%',
        borderRadius: '22px',
    };
    const formControlStyle = {
        border: 'none',
        borderBottom: '1px solid #ced4da',
        boxShadow: 'none',
        background: 'transparent',
        outline: 'none',
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit();
    };

    return (
        <>
            <Form onSubmit={handleFormSubmit}>
                <div className="inputs-container">
                    <div className="row">
                        <div className="col-md-12">
                            {errorMessage && (
                                <h3 style={{ fontWeight: 'bold', color: 'red' }}>{errorMessage}</h3>
                            )}
                            <Form.Group controlId="question1" className={inputSpace} style={customStyle}>
                                <Form.Label>Who are your customers?</Form.Label>
                                <Form.Control
                                    type="text"
                                    style={formControlStyle}
                                    value={questionOne}
                                    onChange={(event) => {
                                        setQuestionOne(event.target.value);
                                    }}
                                />
                            </Form.Group>

                            <Form.Group controlId="question2" className={inputSpace} style={customStyle}>
                                <Form.Label>Are there any special requirements like technology, location, etc?</Form.Label>
                                <Form.Control
                                    type="text"
                                    style={formControlStyle}
                                    value={questionSecond}
                                    onChange={(event) => {
                                        setQuestionSecond(event.target.value);
                                    }}
                                />
                            </Form.Group>

                            <Form.Group controlId="question3" className={inputSpace} style={customStyle}>
                                <Form.Label>What types of customers should be excluded</Form.Label>
                                <Form.Control
                                    type="text"
                                    style={formControlStyle}
                                    value={questionThird}
                                    onChange={(event) => {
                                        setQuestionThird(event.target.value);
                                    }}
                                />
                            </Form.Group>

                            <Form.Group controlId="question4" className={inputSpace} style={customStyle}>
                                <Form.Label>What types of customers should be excluded</Form.Label>
                                <Form.Control
                                    type="text"
                                    style={formControlStyle}
                                    value={questionFour}
                                    onChange={(event) => {
                                        setQuestionFour(event.target.value);
                                    }}
                                />
                            </Form.Group>

                            <button type="submit" className="btn btn-danger mt-3 px-4">
                                {isLoading ? 'Submitting...' : 'SUBMIT'}
                            </button>
                        </div>
                    </div>
                </div>
            </Form>
        </>
    );
}

export default Inputs;
