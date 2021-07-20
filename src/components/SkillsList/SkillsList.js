import React from 'react';
import { SkillBars } from 'react-skills';

import './SkillsList.scss';

const SkillsList = props => {
  const { skills } = props;

  return (
    <div>
      <SkillBars skills={skills} flat={true} labelsWidth={120} />
    </div>
  );
};

export default SkillsList;
