import React from 'react';
import './Navigation.css';

const Navigation = (props) => (//adding props to functions stop them from activating automaticaly times is a x icon
  <div id="myNav" className="overlay">
    <a className="closebtn" onClick={() => props.closeNav()}>&times;</a>
    <div className="overlay-content">
      <a href="">Vitamin Juice</a>
      <a href="">Clothing</a>
      <a href="">Supplements</a>
      <a href="">Contact</a>
    </div>
  </div>//close btn css class in Navigation.css
);

export default Navigation;
