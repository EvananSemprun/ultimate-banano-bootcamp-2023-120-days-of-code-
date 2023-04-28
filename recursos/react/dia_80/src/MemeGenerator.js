import React, { Component } from 'react';

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: '',
      bottomText: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="meme-generator">
        <h1>Generador de memes</h1>
        <form>
          <label>
            Texto superior:
            <input
              type="text"
              name="topText"
              value={this.state.topText}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Texto inferior:
            <input
              type="text"
              name="bottomText"
              value={this.state.bottomText}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
        <div className="meme">
          <img src="https://tusmemes.es/i/memes/miniaturas250/chica-nina-incendio.jpg" alt="Meme" />
          <div className="top-text" style={{ textTransform: 'uppercase' }}>
            {this.state.topText}
          </div>
          <div className="bottom-text" style={{ textTransform: 'uppercase' }}>
            {this.state.bottomText}
          </div>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;

