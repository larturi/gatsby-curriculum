import React from 'react';
import { Container } from 'react-bootstrap';
import SkillsList from '../components/SkillsList';
import BasicLayout from '../layouts/BasicLayout';

import './skills.scss';

const skills = [
  { name: 'HTML', level: 95, color: '#0098d3' },
  { name: 'CSS', level: 85, color: '#0098d3' },
  { name: 'JavaScript', level: 85, color: '#0098d3' },
  { name: 'Bootstrap', level: 85, color: '#0098d3' },
  { name: 'NextJs', level: 85, color: '#0098d3' },
  { name: 'NuxtJs', level: 75, color: '#0098d3' },
  { name: 'React', level: 85, color: '#0098d3' },
  { name: 'Vue', level: 75, color: '#0098d3' },
  { name: 'Angular', level: 70, color: '#0098d3' },
  { name: 'jQuery', level: 70, color: '#0098d3' },
];

const Skills = () => (
  <BasicLayout menuColor="background-menu-dark">
    <Container className="skills">
      <div className="skills__block">
        <h2>Frontend</h2>
        <SkillsList skills={skills} />
      </div>
    </Container>
  </BasicLayout>
);

export default Skills;
