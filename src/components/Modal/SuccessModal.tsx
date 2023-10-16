import React from 'react';
import Popup from 'reactjs-popup';

function SuccessModal({ open, onClose }) {
    return (
        <Popup
            open={open}
            closeOnDocumentClick={false}
            closeOnEscape={false}
            modal
            lockScroll
            overlayStyle={{
                background: 'rgba(0, 0, 0, 0.7)',
                zIndex: 1000,
            }}
            contentStyle={{
                maxWidth: '400px',
                padding: '20px',
                background: 'white',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            }}
        >
            <div className="success-modal">
                <button className="close" onClick={onClose}>
                    &times;
                </button>
                <div className="content">
                    <h2 style={{ color: 'green' }} className="mt-2 fw-bold">Data Successfully Sent</h2>
                </div>
            </div>
        </Popup>
    );
}

export default SuccessModal;
