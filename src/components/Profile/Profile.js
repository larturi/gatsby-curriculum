import React from 'react';
import './Profile.scss';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profileImage from '../../images/avatar.jpeg';
import Social from './Social';

const data = [
  { title: 'Email', content: 'lea.arturi@gmail.com' },
  { title: 'Nacionalidad', content: 'Argentino' },
  {
    title: 'Residencia',
    content: 'Ciudad Autónoma de Buenos Aires (Argentina)',
  },
];

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
          <Col xs={12} md={8} className="info__data">
            <p>Leandro Arturi</p>
            <p>Full-Stack Developer</p>
            <hr />
            <div className="more-info">
              {data.map((item, index) => (
                <div key={index} className="item">
                  <p>{item.title}</p>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Social />
      </Container>
    </div>
  );
};

export default Profile;
