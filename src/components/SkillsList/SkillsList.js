import React from 'react';
import SkillBar from 'react-skillbars';

import './SkillsList.scss';

const SkillsList = props => {
  const { skills, colors } = props;

  console.log(colors);

  return (
    <div className="skills-list">
      <SkillBar skills={skills} colors={colors} height={27} />
    </div>
  );
};

export default SkillsList;
