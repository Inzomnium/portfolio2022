import React, { useState } from 'react'
import { Col, Modal, Button } from 'react-bootstrap'

export const ProjectCard = ({title, subtitle, description, imgUrl, year, link, type}) => {


  const [modalShow, setModalShow] = React.useState(false);

  function ModalProject(props) {
    return (
      <Modal
        {...props}
        className={`modalPrjts ${type}`}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <picture>
              <img className="w-70 mx-auto d-flex" src={imgUrl} />
           </picture>
           <h5>{subtitle}</h5>
          <p>
            {description}
          </p>
          <span className='year'>Year:{year}</span>
          <a href={link} target="_blank" className='btn btn-primary'>Check it</a>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


  return (
    <Col sm={6} md={4} >
      <a className='projecto' onClick={() => setModalShow(true)} >
        <div className='proj-imgbx'>
            <img src={imgUrl} alt={title} />
            <div className='proj-txtx'>
                <h4>{title}</h4>
                <span>{subtitle}</span>
            </div>

        </div>
      
      </a>

      <ModalProject
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Col>

    
  )
}
