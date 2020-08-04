import React from 'react';
import ContactForm from './ContactForm';
import BackButton from './BackButton';

function Contact() {
    return (
        <div>
            <ContactForm />
            <BackButton pathData="/home" />
        </div>
    )
};

export default Contact;