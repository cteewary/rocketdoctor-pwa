import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import ChatIcon from './../../images/chatIcon.svg';
import UploadImage from './../../images/uploadImage.svg';
import DoctorIcon from './../../images/doctorIcon.svg';
import Prescription from './../../images/prescription.svg';
import { SecondDivSection }  from './style';

const SecondSection = () => {
    return (
      <SecondDivSection>
        <Container>
          <Row className="text-head-home">
            <Col xs={"12"} className="text-center">
                <h2 className="text-center text-heading">How It Works</h2>
            </Col>
          </Row>
          <Row className="work-bottom">
            <Col xs={12} xl={3} className="text-center">
              <img src={ChatIcon} alt="ChatIcon" />
              <div>
                <p>Explain your health issue</p>
              </div>                        
            </Col>
            <Col xs={12} xl={3} className="text-center">
              <img src={UploadImage} alt="ChatIcon" />
              <div>
                <p>Upload image  of problem</p>
              </div>
            </Col>
            <Col xs={12} xl={3} className="text-center">
              <img src={DoctorIcon} alt="ChatIcon" />
              <div>
                <p>Talk to Doctor</p>
              </div>
            </Col>
            <Col xs={12} xl={3} className="text-center">
              <img src={Prescription} alt="ChatIcon" />
              <div>
                <p>Get E-prescription</p>
              </div>
            </Col>
          </Row>
        </Container>
      </SecondDivSection>
    )
}

SecondSection.propTypes = {
}

export default SecondSection;