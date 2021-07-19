import React from 'react';
import './Profile.scss';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profileImage from '../../images/avatar.jpeg';

const Profile = () => {
  return (
    <div className="profile">
      <div className="wallpaper" />
      <div className="dark" />
      <Container className="box">
        <Row className="info">
          <Col xs={12} md={4}>
            <Image src={profileImage} fluid />
          </Col>
          <Col xs={12} md={8}>
            Info
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
