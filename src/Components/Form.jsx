import React, { Component } from 'react';


class Form extends Component {
    constructor() {
        super();
        this.displayData = [];
        
        this.state = {
            name: "",
            deportment: "",
            rating: "",
            showData: this.displayData,
        };

        this.description = this.description.bind(this);
        this.setName = this.setName.bind(this);
        this.setDeportment = this.setDeportment.bind(this);
        this.setRating = this.setRating.bind(this);
        this.showForm = this.showForm.bind(this);
    }


description() {
    this.displayData.push(
        <div className="data">
            Name: {this.state.name} | Deportment: {this.state.deportment} | Rating:  {this.state.rating}
        </div>
    );

    this.setState({
        name: "",
        deportment: "",
        rating: "",
        showData: this.displayData,
    });

}

setName(e) {
    let val = e.target.value;
    this.setState({
        name: val,
    });
}
setDeportment(e) {
    let val = e.target.value;
    this.setState({
        deportment: val,
    });
}

setRating(e) {
    let val = e.target.value;
    this.setState({
        rating: val,
    });
}



// hideForm() {
//     this.description();
//     this.setState({
//       displayForm: true
//     });
//   }

showForm() {
    this.setState({
      displayForm: true
    });
}






onsubmit = (e) =>{
    e.preventDefault();
};

render() {
    return (
        <div className="container">
            <h1 className='headingg'>EMPOLYEE FEEDBACK FORM</h1>
            <form className='note' onSubmit={this.onSubmit}>
            <label>
                Name:
                <input type="text" value={this.state.name} onChange={this.setName} />
            </label>

            <label>
                Deportment:
                <input type="text" value={this.state.deportment} onChange={this.setDeportment} />
            </label>

            <label>
                Rating:
                <input type="text" value={this.state.rating} onChange={this.setRating} />
            </label> <br />
            <button onClick={this.description}>submit</button>
            </form>

            <div id="data1">{this.displayData}</div>

        </div>
    );
}
}


export default Form;