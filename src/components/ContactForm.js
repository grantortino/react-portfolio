import React from 'react';

function ContactForm() {
    return (
        <div>
            <form action="https://formspree.io/xgenwzar" method="POST">
                <ul className="ul-container-meet">
                    <li>
                        <label for="name">NAME</label>
                        <input type="text" id="name" name="user_name" required />
                    </li>
                    <li>
                        <label for="mail">E-MAIL ADDRESS</label>
                        <input type="email" id="mail" name="_replyto" required />
                    </li>
                    <li>
                        <label for="msg">YOUR MESSAGE HERE</label>
                        <textarea id="msg" name="message" required></textarea>
                    </li>
                    <li className="form-button-container-meet">
                            <button className="button-meet" type="submit">Send</button>
                            <button className="button-meet" type="reset">Clear</button>
                    </li>
                </ul>
            </form>
        </div>
    )
};

export default ContactForm;