import React, { Component } from 'react';
import Bag from '../../images/Bag.png'
import {FormattedMessage} from 'react-intl';
import '../../styles/pages/main.css';

class Main extends Component {
  render() {
    return (
    	<div id="Main">
            <div id="MainContainer" className="container">
                <div className="col-md-5">
                    <div id="FeaturedTextSection">
                        <h1><FormattedMessage id="lang.title" />  </h1>
                        <br/>
                        <p><FormattedMessage id="lang.message" />  </p>
                        <br/>
                        <a id="UsePlentifulButton" className="btn btn-lg"><FormattedMessage id="lang.buttonText" /></a>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div id="FeaturedImagePanel" className="col-md-6">
	               <img id="FeaturedImageBag" src={Bag} alt="lang_english" className="img-responsive"/>
                </div>
            </div>
    </div>
    );
  }
}

export default Main;
