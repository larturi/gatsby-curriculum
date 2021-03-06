import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import './Menu.scss';

const Menu = props => {
  const { menuColor } = props;

  return (
    <header className={classNames(['menu', menuColor])}>
      <Container>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/skills">Skils</Link>
          </li>
          <li>
            <Link to="/projects">Proyectos</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};
export default Menu;
