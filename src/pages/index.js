import React from 'react';
import Profile from '../components/Profile';
import AboutMe from '../components/AboutMe';
import BasicLayout from '../layouts/BasicLayout';

const Index = () => (
  <BasicLayout menuColor="background-menu-transparent">
    <Profile />
    <AboutMe />
  </BasicLayout>
);

export default Index;
