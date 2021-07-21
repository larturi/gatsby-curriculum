import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import BasicLayout from '../layouts/BasicLayout';
import projects from '../utils/projects';

import './projects.scss';

const Projects = () => (
  <BasicLayout menuColor="background-menu-dark">
    <Container className="projects">
      <h1>Proyectos</h1>
      <Row>
        {projects.map((project, index) => (
          <Col xs={12} sm={4} className="project" key={index}>
            <Card>
              <div
                className="image"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.title}</Card.Text>
                <a href={project.url} target="_blank" rel="noreferrer">
                  <Button variant="primary">Ver Proyecto</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </BasicLayout>
);

export default Projects;
