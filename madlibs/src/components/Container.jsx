import React, { Component } from 'react';
import './Container.css';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noun: '',
            adjective: '',
            adverb: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // const data = this.data
        // console.log("This was sent to backend", data);
    }

    handleInputChange = (event) => {
        event.preventDefault()
        // console.log(event);
        // console.log(event.target.name);
        // console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    render() {
        const {noun} = this.state
        const {adjective} = this.state
        const {adverb} = this.state

        return (
            <div className="grid">
                <div className="madlibwrap">
                    <p>Driving a car can be fun if you follow this <strong style={{fontWeight:"bold"}}>{adjective}</strong> advice:
When approaching a <strong style={{fontWeight:"bold"}}>{noun}</strong> on the right, always blow your <strong style={{fontWeight:"bold"}}>{noun}</strong>
  Before making a <strong style={{fontWeight:"bold"}}>{adjective}</strong> turn, always stick your <strong style={{fontWeight:"bold"}}>{noun}</strong> out of the window.
Every 2000 miles, have your <strong style={{fontWeight:"bold"}}>{noun}</strong> inspected and your <strong style={{fontWeight:"bold"}}>{noun}</strong> checked.
When approaching a school, watch out for <strong style={{fontWeight:"bold"}}>{adjective}</strong> [plural noun]
Above all, drive <strong style={{fontWeight:"bold"}}>{adverb}</strong> The <strong style={{fontWeight:"bold"}}>{noun}</strong> you save may be your own!</p>
                    <form onSubmit={this.handleSubmit}>
                        <p><input type='text' placeholder='noun' name='noun' onChange={this.handleInputChange} /></p>
                        <p><input type='text' placeholder='adjective' name='adjective' onChange={this.handleInputChange} /></p>
                        <p><input type='text' placeholder='adverb' name='adverb' onChange={this.handleInputChange} /></p>
                    
                    </form>
                    {/* <button type="submit"> Results</button> */}
                </div>



            </div>

        );
    }

}

export default Container