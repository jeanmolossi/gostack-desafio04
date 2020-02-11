import React from 'react';


import Logo from '../../assets/facebook-1.png';

import './styles.css';

export default class Header extends React.Component {
  render(){
    return (
      <header className="header">
        <img src={Logo} />
        <a href="#">Meu perfil</a>
      </header>
    );
  }
}
