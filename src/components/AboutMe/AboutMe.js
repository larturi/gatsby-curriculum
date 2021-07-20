import React from 'react';
import { Container, Button } from 'react-bootstrap';
import CV from '../../images/CV-Leandro-Arturi.pdf';
import './AboutMe.scss';

const AboutMe = () => {
  return (
    <Container className="about-me">
      <p>
        Licenciado en Sistemas de Información y Desarrollador con catorce años
        de experiencia en desarrollo de software, gestión de proyectos y
        coordinación de equipos técnicos. Soy una persona apasionada por la
        profesión, lo que me mantiene en constante aprendizaje. Me considero
        pragmático, flexible y organizado. Siempre estoy dispuesto a aprender y
        a brindar mi ayuda.
      </p>
      <hr />
      <a href={CV} target="_blank">
        <Button>Descargar CV</Button>
      </a>
    </Container>
  );
};

export default AboutMe;
