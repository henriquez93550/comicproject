import React, { PureComponent } from 'react';

class Test extends PureComponent {
    state = {
        data: ''
    };

    componentDidMount() {
        const dataUrl = 'http://localhost:3005/api/data';
        fetch(dataUrl, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Accept": "application/json"
            }
        })
        .then(res => {
            console.log(res.body);
            // You'll need to do this when you respond with json
            return res.json();
        })
        .then(data => {
            console.log(data);
            this.setState({ data: data.data });
        });
    }

    render() {
        return (
            <div>
                TEST DATA: 
                {this.state.data}
            </div>
        );
    }
}

export default Test;