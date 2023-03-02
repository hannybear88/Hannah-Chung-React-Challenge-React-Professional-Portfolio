// contact form with fields for
// a name,
// an email address, and
// a message
// WHEN I move my cursor out of one of the form fields without entering text THEN I receive a notification that this field is required
// WHEN I enter text into the email address field THEN I receive a notification if I have entered an invalid email address

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { validateEmail } from '../utils/helper';


function Contact() {
  // const [state, handleSubmit] = useForm({});

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSuccess, setIsSuccess] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formState)

    if(formState.name && formState.email && formState.message) {
      window.location.href = `mailto:hannahkchung88@gmail.com?subject=${formState.name}&body=${formState.email}`
      setIsSuccess(true)
    }

  //   if (!errorMessage) {
  //     console.log('Submit Form', formState);
  //   }
  // };

  // function refreshPage() {
  //   window.location.reload(true);
  }


  if (isSuccess) {
    return (
      <div>
        <p>Thanks for reaching out!</p>
        <button className="button is-medium is-primary is-half m-6" onClick={()=> window.open("/#contact")}>Back to About</button>
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

// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/hand-img.png";
// import "animate.css";
// import TrackVisibility from "react-on-screen";

// export const Contact = () => {
//   const formInitialDetails = {
//     name: "",
//     email: "",
//     message: "",
//   };
//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   // eslint-disable-next-line no-unused-vars
//   const [buttonText, setButtonText] = useState("Send");
//   // eslint-disable-next-line no-unused-vars
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (e) => {
//     setFormDetails({
//       ...formDetails,
//       [e.target.name]: e.target.value,
//     });
//   };

// return (
//   <section className="contact" id="connect">
//     <Container>
//       <Row className="align-items-center">
//         <Col size={12} md={6}>
//           <TrackVisibility>
//             {({ isVisible }) => (
//               <img
//                 className={
//                   isVisible ? "animate__animated animate__zoomIn" : ""
//                 }
//                 src={contactImg}
//                 alt="hands"
//               />
//             )}
//           </TrackVisibility>
//         </Col>
//         <Col size={12} md={6}>
//           <TrackVisibility>
//             {({ isVisible }) => (
//               <div
//                 className={
//                   isVisible ? "animate__animated animate__fadeIn" : ""
//                 }
//               >
//                 <h2>Get In Touch</h2>
//                 <form
//                   action="https://formsubmit.co/hannahkchung88@gmail.com"
//                   method="POST"
//                 >
//                   <Row>
//                     <Col size={12} sm={6} className="px-1">
//                       <input
//                         name="name"
//                         type="text"
//                         value={formDetails.name}
//                         placeholder="Name"
//                         onChange={onFormUpdate}
//                         required
//                       />
//                     </Col>
//                     <Col size={12} sm={6} className="px-1">
//                       <input
//                         name="email"
//                         type="email"
//                         value={formDetails.email}
//                         placeholder="Email Address"
//                         onChange={onFormUpdate}
//                         required
//                       />
//                     </Col>
//                     <Col size={12} className="px-1">
//                       <textarea
//                         name="message"
//                         rows="6"
//                         value={formDetails.message}
//                         placeholder="Message"
//                         onChange={onFormUpdate}
//                         required
//                       ></textarea>
//                       <button type="submit">
//                         <span>{buttonText}</span>
//                       </button>
//                     </Col>
//                     <input
//                       name="_url"
//                       type="hidden"
//                       value="https://github.com/hannybear88"
//                     />
//                     {status.message && (
//                       <Col>
//                         <p
//                           className={
//                             status.success === false ? "danger" : "success"
//                           }
//                         >
//                           {status.message}
//                         </p>
//                       </Col>
//                     )}
//                   </Row>
//                 </form>
//               </div>
//             )}
//           </TrackVisibility>
//         </Col>
//       </Row>
//     </Container>
//   </section>
// );
// };


// export default Contact;