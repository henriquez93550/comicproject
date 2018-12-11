import React, { Component } from 'react';
import './Container.css';

class Madlib extends Component {
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
                    <p>Count Olaf was a very <strong style={{fontWeight:"bold"}}>{adjective}</strong> superhero.
He had a <strong style={{fontWeight:"bold"}}>{noun}</strong> that was so strong it could even lift <strong style={{fontWeight:"bold"}}>{noun}</strong>.
He was even more powerful if he had on his <strong style={{fontWeight:"bold"}}>{adjective}</strong> cape.  Which was given to him by the Grand <strong style={{fontWeight:"bold"}}>{noun}</strong> of America. 
One time he even saved the entire <strong style={{fontWeight:"bold"}}>{noun}</strong> with only his trusty <strong style={{fontWeight:"bold"}}>{noun}</strong>.
Not to mention the time he rescued the bus full of <strong style={{fontWeight:"bold"}}>{adjective}</strong> [plural noun] by <strong style={{fontWeight:"bold"}}>{adverb}</strong> throwing the bus to safety. 
For his bravery the mayor of his city gave him the <strong style={{fontWeight:"bold"}}>{noun}</strong> to the city!
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

export default Madlib