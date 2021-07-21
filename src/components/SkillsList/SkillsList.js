import React from 'react';
import loadable from '@loadable/component';

import './SkillsList.scss';

const SkillBar = loadable(() => import('react-skillbars'));

const SkillsList = props => {
  const { skills, colors } = props;

  return (
    <div className="skills-list">
      <SkillBar skills={skills} colors={colors} height={27} />
    </div>
  );
};

export default SkillsList;
