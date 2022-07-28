import React from 'react';
import { useState } from 'react';
import contactImg from '../assets/img/contact-img.svg';

export const Contact = () => {
    const formIniaialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''

    }

    const [formDetails, setformDetails] = useState(formIniaialDetails);
    const [buttonText, setbuttonText] = useState('Send');
    const [status, setStatus] = useState({})
    const onFormUpdate = (category, value) => {
        setformDetails({
            ...formDetails,
            [category]: value
        })
    }
//submit

    const handleSubmit = async (e) => {
        e.preventDefault();
        setbuttonText('Sending...');
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
          });
        setbuttonText("Send");
        let result = response.json();
        setformDetails(formInitialDetails);
        if (SpeechRecognitionResultList.code === 200) {
            setStatus ({ success: true, message: 'Message sent successfully'});
        } else {
            setStatus ({ sucess: false, message: 'Something went wrong, please try again later'})
        }



    }


  return (
    <section className='contact' id="contact">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImg} alt="contact header image" />
                </Col>
                <Col sm={6} className="px-1" >
                    <h2>Get in touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                    <input 
                    type="text" 
                    value={formDetails.firstName} 
                    placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />

                
                <Col sm={6} className="px-1">
                    <input 
                    type="text" 
                    value={formDetails.lastName} 
                    placeholder="Last Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />

                </Col>
                <Col sm={6} className="px-1">
                    <input 
                    type="email" 
                    value={formDetails.email} 
                    placeholder="EMail Address" onChange={(e) => onFormUpdate('firstName', e.target.value)} 
                    />

                </Col>
                <Col sm={6} className="px-1">
                    <input 
                    type="tel" 
                    value={formDetails.phone} 
                    placeholder="Phone" onChange={(e) => onFormUpdate('firstName', e.target.value)} 
                    />

                </Col>
                <Col>
                <textarea 
                row="6" 
                value={formDetails.message} 
                placeholder="Message" onChange={(e) => onFormUpdate('firstName', e.target.value)} 
                />
                <button type='submit'><span>{buttonText}</span></button>
                </Col>
                {
                    status.message && 
                    <Col>
                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    </Col>

                }
                </Row>
                </form>

                </Col>
            </Row>
        </Container>



    </section>
  )
}
