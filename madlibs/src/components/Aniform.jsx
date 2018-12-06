import React, { Component } from 'react';
import './Aniform.css';



const formValid= ({ formErrors, ...rest }) => {
    let valid = true;
    // validate form errors being empty
Object.values(rest).forEach(val => {
val.length > 0 && (valid = false);
});

// validate the form was filled out
Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

return valid;
};

class Aniform extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            noun: null,
            verb: null,
            adjective: null,
            adverb: null,
            formErrors: {
                noun: "",
                verb: "",
                adjective: "",
                adverb: ""

            }
        };
    }
    




    // e = event
handleSubmit = (e) => {
    e.preventDefault();
// console logs if submit was successful
    if (formValid(this.state.formErrors)) {
        console.log(`
        --SUBMITTED--
        noun: ${this.state.noun}
        verb: ${this.state.verb}
        adjective: ${this.state.adjective}
        adverb: ${this.state.adverb}
        
        `)
    } else {
        console.error('FORM INVALID - Display error message');
    }
};
// makes sure a certain amount of characters are put into the fields
    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        let formErrors = this.state.formErrors;
        // console.log("Name: ", name);
        // console.log("Value: ", value);
        
        switch (name) {
            case "noun":
              formErrors.noun =
                value.length < 2 ? "minimum 2 characaters required" 
                : "";
              break;
            case "verb":
              formErrors.verb =
                value.length < 2 ? "minimum 2 characaters required" 
                : "";
              break;
            case "adjective":
              formErrors.adjective = 
              value.length < 2 ? "minimum 2 characaters required" 
              : "";
              break;
            case "adverb":
            formErrors.adverb = 
            value.length < 2 ? "minimum 2 characaters required" 
            : "";
              break;
            default:
              break;
            }
      // allows dev to view entire object and error messages
            this.setState({formErrors, [name]: value }, () => console.log(this.state));
        
    };


    render() {
        // brings the state so it can be plug into the UI
        const { formErrors } = this.state;


        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Fill in the blanks</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="noun">
                            <label htmlFor="noun">Noun</label>
                            <input type="text"
                                className={ formErrors.noun.length > 0 ? "error" : null}
                                placeholder="noun"
                                name="noun"
                                noValidate
                                onChange={this.handleChange}
                            />
                        </div>
                        {/* shows error messages under input box if length requirement are not met */}
                        {formErrors.noun.length > 0 && (
                            <span className="errorMessage">{formErrors.noun}</span>
                        )}

                        <div className="verb">
                            <label htmlFor="verb">Verb</label>
                            <input type="text"
                                className={ formErrors.verb.length > 0 ? "error" : null}
                                placeholder="verb"
                                name="verb"
                                noValidate
                                onChange={this.handleChange}
                            />
                        </div>
                         {/* shows error messages under input box if length requirement are not met */}
                         {formErrors.verb.length > 0 && (
                            <span className="errorMessage">{formErrors.verb}</span>
                        )}

                        <div className="adjective">
                            <label htmlFor="adjective">Adjective</label>
                            <input type="text"
                                className={ formErrors.adjective.length > 0 ? "error" : null}
                                placeholder="adjective"
                                name="adjective"
                                noValidate
                                onChange={this.handleChange}
                            />
                        </div>
                         {/* shows error messages under input box if length requirement are not met */}
                         {formErrors.adjective.length > 0 && (
                            <span className="errorMessage">{formErrors.adjective}</span>
                        )}

                        <div className="adverb">
                            <label htmlFor="adverb">Adjective</label>
                            <input type="text"
                                className={ formErrors.adjective.length > 0 ? "error" : null}
                                placeholder="adverb"
                                name="adverb"
                                noValidate
                                onChange={this.handleChange}
                            />
                             {/* shows error messages under input box if length requirement are not met */}
                        {formErrors.adverb.length > 0 && (
                            <span className="errorMessage">{formErrors.adverb}</span>
                        )}
                            <div className="addOptions">
                            <button type="submit"> Submit</button>
                            
                            </div>
                        </div>
                    </form>
                </div>

            </div>

        );
    }
}

export default Aniform