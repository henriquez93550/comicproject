import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
              
                    <div class="typewriter">
                        <h2 className="display-4">{this.props.title}</h2>
                        <p className="lead">{this.props.subtitle}</p>
                   
                   
                   
                    </div>
                </div>
            </div>
        );
    }

}

export default Jumbotron