// contact form with fields for
// a name,
// an email address, and
// a message
// WHEN I move my cursor out of one of the form fields without entering text THEN I receive a notification that this field is required
// WHEN I enter text into the email address field THEN I receive a notification if I have entered an invalid email address

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { validateEmail } from '../utils/helpers';
// import Navigation from './components/Navigation';
require('dotenv').config()


function Contact() {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_ID);

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!errorMessage) {
  //     console.log('Submit Form', formState);
  //   }
  // };

  // function refreshPage() {
  //   window.location.reload(true);
  // }


  if (state.succeeded) {
    return (
      <div>
        <p>Thanks for reaching out!</p>
        <button className="button is-medium is-primary is-half m-6" onClick={()=> window.open("/#contact")}>Back to About</button>
        {/* This form button is broken. It was supposed to refresh the page so you can submit a new form, but I'm changing this bug into a feature that takes you back to the about section. */}
      </div>
    );
}


  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <div>
      <p className="content is-medium">Contact Me</p>
      <hr />
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" htmlFor="name">Name</label>
          <input className="input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="field">
          <label className="label" htmlFor="email">Email Address</label>
          <input className="input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="field">
          <label className="label" htmlFor="message">Message</label>
          <textarea className="textarea" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="is-danger">{errorMessage}</p>
          </div>
        )}
        <button className="button is-medium is-primary is-fullwidth" data-testid="button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;




// import React from "react";
// import React, { useContext } from 'react';
// import Fade from 'react-reveal/Fade';
// import { Container } from 'react-bootstrap';
// import PortfolioContext from '../../context/context';
// import Title from '../Title/Title';

// const Contact = () => {
//   const { contact } = useContext(PortfolioContext);
//   const { cta, btn, email } = contact;

// function Contact(props) {
//     const { cta, btn, email } = contact;
//   return (
//     <section id="contact">
//     <Container>
//       <Title title="Contact" />
//       <Fade bottom duration={1000} delay={800} distance="30px">
//         <div className="contact-wrapper">
//           <p className="contact-wrapper__text">
//             {cta || 'Would you like to work with me? Great!'}
//           </p>
//           <a
//             target="_blank"
//             rel="noopener noreferrer"
//             className="cta-btn cta-btn--resume"
//             href={email ? `mailto:${email}` : 'https://github.com/hannybear88/Hannah-Chung-React-Challenge-React-Professional-Portfolio'}
//           >
//             {btn || "Let's Talk"}
//           </a>
//         </div>
//       </Fade>
//     </Container>
//   </section>
//   );
// }

// export default Contact;
