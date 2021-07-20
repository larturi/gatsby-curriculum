import React from 'react';
import './Social.scss';
import IconTwitter from '../../../images/icons/twitter.svg';
import IconLinkedIn from '../../../images/icons/linkedin.svg';
import IconGitHub from '../../../images/icons/github.svg';
import IconWeb from '../../../images/icons/web.svg';

const socialMedia = [
  {
    icon: <IconLinkedIn />,
    url: 'https://www.linkedin.com/in/leandroarturi',
  },
  {
    icon: <IconGitHub />,
    url: 'https://github.com/larturi',
  },
  {
    icon: <IconTwitter />,
    url: 'https://twitter.com/leandroarturi',
  },
  {
    icon: <IconWeb />,
    url: 'https://www.leandroarturi.com.ar',
  },
];

const Social = () => {
  return (
    <div className="social">
      {socialMedia.map((item, index) => (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
