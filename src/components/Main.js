import TopNav from './TopNav'
import ContentContainer from './ContentContainer'
import TopScreen from './TopScreen'

//import React, { useState, useEffect } from 'react';

function Main() {
  const topNav = {
    page_top: '#page_top',
    height: '80px'
  }
  const title = {
    title: "My Business", 
    sub_title:"Creative-solutions, Creative results"
  };
  return (
    <div class="Main">
      <TopNav page_top={topNav}></TopNav>
      {/* INFO: set style in react style*/}
      <div style={{top: topNav.height, position:'relative'}}>
        <TopScreen title={title}></TopScreen>
        <ContentContainer title="About"></ContentContainer>
      </div>
    </div>
  );
}

export default Main;
