import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class StripeWrapper extends Component {
    render(){
        
        return(
            <StripeCheckout 
            name="Mail Me"
            description="₹5 for 5 email credits"
            amount={500}
            currency="INR"// To show what currency to ask for, without this it shows USD by default
            token={token => this.props.handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>    
        );
    }
}

export default connect(null, actions) (StripeWrapper);