import React, { Component } from 'react';
import './Container.css';

class Madlibtwo extends Component {
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
                    <p>Dogs are man’s <strong style={{fontWeight:"bold"}}>{adjective}</strong> friend.  Every <strong style={{fontWeight:"bold"}}>{noun}</strong>  should have one, 
                        unless they already have a <strong style={{fontWeight:"bold"}}>{noun}</strong> , then they should have 2. 
                        The best dogs to have are really <strong style={{fontWeight:"bold"}}>{adjective}</strong> .  They are the best <strong style={{fontWeight:"bold"}}>{noun}</strong> . 
                        They love to go to the <strong style={{fontWeight:"bold"}}>{noun}</strong> and play at the <strong style={{fontWeight:"bold"}}>{noun}</strong> . 
                        And if you give them <strong style={{fontWeight:"bold"}}>{adjective}</strong>  [plural noun] they <strong style={{fontWeight:"bold"}}>{adverb}</strong> love you, the rest of your {noun}!
</p>
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

export default Madlibtwo