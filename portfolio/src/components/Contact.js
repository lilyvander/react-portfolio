import React, { useState } from 'react';

const Contact = () => {
    // Define state variables for form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Define event handlers for form fields
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    // Define submit handler for the form
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic (e.g., sending data to a server)
        console.log('Form submitted:', { name, email, message });
    };

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" value={message} onChange={handleMessageChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Contact;
b