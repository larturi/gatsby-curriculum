import React from 'react';
import { Container } from 'react-bootstrap';
import SkillsList from '../components/SkillsList';
import BasicLayout from '../layouts/BasicLayout';
import {
  frontendSkills,
  frontendSkillsColors,
  backendSkills,
  backendSkillsColors,
  dbSkills,
  dbSkillsColors,
  devOpsSkills,
  devOpsSkillsColors,
  moreSkills,
  moreSkillsColors,
} from '../utils/skills';

import './skills.scss';

const Skills = () => (
  <BasicLayout menuColor="background-menu-dark">
    <Container className="skills">
      <div className="skills__block">
        <h2>FRONTEND</h2>
        <SkillsList skills={frontendSkills} colors={frontendSkillsColors} />
      </div>

      <div className="skills__block">
        <h2>BACKEND</h2>
        <SkillsList skills={backendSkills} colors={backendSkillsColors} />
      </div>

      <div className="skills__block">
        <h2>DATABASE</h2>
        <SkillsList skills={dbSkills} colors={dbSkillsColors} />
      </div>

      <div className="skills__block">
        <h2>DEVOPS</h2>
        <SkillsList skills={devOpsSkills} colors={devOpsSkillsColors} />
      </div>

      <div className="skills__block">
        <h2>OTROS SKILLS</h2>
        <SkillsList skills={moreSkills} colors={moreSkillsColors} />
      </div>
    </Container>
  </BasicLayout>
);

export default Skills;
