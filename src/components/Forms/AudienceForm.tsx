import React, { useState } from 'react';
import SuccessModal from '../Modal/SuccessModal'; // Import SuccessModal component
import Inputs from './Inputs';
import { useFetchAudience } from '../../features/audience/audienceApi';

function AudienceForm() {
    const [questionOne, setQuestionOne] = useState('');
    const [questionSecond, setQuestionSecond] = useState('');
    const [questionThird, setQuestionThird] = useState('');
    const [questionFour, setQuestionFour] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const { mutate, isLoading } = useFetchAudience({
        question_one: questionOne,
        question_second: questionSecond,
        question_third: questionThird,
        question_four: questionFour,
    });

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleSubmit = async () => {
        let hasError = false;

        if (!questionOne || !questionSecond || !questionThird || !questionFour) {
            hasError = true;
            setErrorMessage('Please fill in all fields.');
        } else {
            setErrorMessage('');
        }

        if (!hasError) {
            try {
                await mutate();
                setSuccessMessage('Data sent successfully!');
                openModal(); // Open the modal on success
            } catch (mutationError) {
                console.error('Error saving form data:', mutationError);
            }
        }
    };

    return (
        <>
            <h1>What is Your Audience?</h1>
            <div className="text-center p-4">
                <Inputs
                    questionOne={questionOne}
                    setQuestionOne={setQuestionOne}
                    questionSecond={questionSecond}
                    setQuestionSecond={setQuestionSecond}
                    questionThird={questionThird}
                    setQuestionThird={setQuestionThird}
                    questionFour={questionFour}
                    setQuestionFour={setQuestionFour}
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                    onSubmit={handleSubmit}
                />
                <SuccessModal
                    open={modalIsOpen}
                    onClose={closeModal}
                    message={successMessage}
                />
            </div>
        </>
    );
}

export default AudienceForm;
