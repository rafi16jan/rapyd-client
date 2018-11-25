import React from 'react';
import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavRight,
    Link,
} from 'framework7-react';

export default (props) => (
  <Page>
    <Navbar>
      <NavLeft>
        <Link iconMd="material:menu" panelOpen="left"></Link>
      </NavLeft>
      <NavTitle>Form</NavTitle>
      <NavRight>
        <Link iconMd="material:person" panelOpen="right"></Link>
      </NavRight>
    </Navbar>
    {props.children}
  </Page>
);
