import React, {Component} from 'react';

import SummaryOption from './SummaryOption';

class Summary extends Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
      
            return (
              <SummaryOption
                featureHash={featureHash}
                feature={feature}
                selectedOption={selectedOption}
                USCurrencyFormat={this.props.USCurrencyFormat}
              />
            );
          });
        return ( 
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {this.props.USCurrencyFormat.format(this.props.total)}
                </div>
                </div>
            </section>
        );
    }
}

export default Summary;