import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Card from './components/Card';
import Loading from './components/Loading';
import Navigation from './components/Navigation';
import data from './data/data.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleLogo: true,
      cards: [
        {
          id: 0,//arrays  start at 0
          animation: 'card'//animation class in card.js as is "card" variable
        },
        {
          id: 1,
          animation: 'card'// 'card' is a prop
        },
        {
          id: 2,
          animation: 'card'
        },
        {
          id: 3,
          animation: 'card'
        },
        {
          id: 4,
          animation: 'card'
        },
        {
          id: 5,
          animation: 'card'
        }],
    }

    this.toggleLogo = this.toggleLogo.bind(this);
    //this.clickCard = this.clickCard.bind(this); to use clickCard={this.clickCard bind must be used first
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.showBack = this.showBack.bind(this);
    this.showFront = this.showFront.bind(this);
  }

  componentWillMount() {
    this.setState({
      cards: data,//cards are being set data file contents so there are 18 cards
    });
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000);// loading will stop/be false after 3 seconds
  }
  toggleLogo(event) {
    this.setState((prevState) => ({//if false previous state turn true !not previous state
      toggleLogo: !prevState.toggleLogo
    }));
  }
  /*
    clickCard(card) {//cards prop function
      let cards = this.state.cards;
      cards[card.id].animation = 'card animated zoomOut'; //cards prop + animation = zoom out
      console.log(cards);
  
      this.setState({//state is cards
        cards,
      });
    } */

  showBack(card) {
    let cards = this.state.cards;
    cards[card.id].animation = 'card card-flip';
    console.log(cards);

    this.setState({
      cards,
    });
  }

  showFront(card) {
    let cards = this.state.cards;
    cards[card.id].animation = 'card';
    console.log(cards);

    this.setState({
      cards,
    });
  }





  openNav() {//when id is clicked it becomes 100%
    document.getElementById("myNav").style.width = "100%";
  }

  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo}
            className={this.state.toggleLogo ? 'static-logo' : 'static-logo animated jello'} // ? then add css class to animate enter and leave animations
            alt="logo"
            onMouseEnter={this.toggleLogo}
            onMouseLeave={this.toggleLogo}
            onClick={this.openNav}
          //because onclick opennav is in the app div with logo in it opennav is activated with the logo

          />

      
          <h1
            className={this.state.toggleLogo ? 'menu-hidden' : 'menu animated bounceInDown'}//this code will cause menu text to appear when logo is moused over
            onClick={this.openNav}//menu in quotes refers to css class
          >Menu</h1>


          <Navigation closeNav={this.closeNav} />
        </header>

        {
          this.state.loading ? <Loading /> :
            <div className="Grid animated bounceInUp">
              {
                this.state.cards.map((card) => (
                  <Card duration={150}

                    key={card.id}

                    card={card}

                    showBack={this.showBack}

                    showFront={this.showFront}

                  />
                ))
              }
            </div>
        }
      </div>
    );
  }
}

export default App;
