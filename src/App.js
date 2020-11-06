import React, { Component } from 'react';

import Header from './Header';
import FeatureList from './FeatureList';
import Summary from './Summary';

import store from './store';

import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    features: store,
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };
  
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );
    
    return (
      <div className="App">
        <Header />
        <main>
          <FeatureList
            features={this.state.features}
            selected={this.state.selected}
            USCurrencyFormat={USCurrencyFormat}
            updateFeature={this.updateFeature}
          />
          <Summary 
            selected={this.state.selected}
            USCurrencyFormat={USCurrencyFormat}
            total={total}
          />
        </main>
      </div>
    );
  }
}

export default App;
