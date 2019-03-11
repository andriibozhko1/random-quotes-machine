import React, { Component } from "react";
import api from "../../api/api";
import Loader from "../../components/Loader/Loader";
import { Link } from 'react-router-dom'
import '../Quotes/Quotes.scss';

export default class Quotes extends Component {
  state = {
    currentQuoteId: 0,
    quotes: []
  };

  get currentQuote() {
    if (this.state.quotes.length > 0) {
      return this.state.quotes[this.state.currentQuoteId];
    }
  }

  async componentDidMount() {
    const { quotes } = await api.getQuotesByTagName(this.props.match.params.id);

    this.setState({ quotes });
  }

  changeCurrentQuote = (newCurrentQuoteId) => {
    return () => {
      const currentQuoteId = Math.max(0, Math.min(this.state.quotes.length - 1, newCurrentQuoteId))
      this.setState({currentQuoteId})
    }
  }

  render() {
    window.scrollTo(0,0)
    if (this.state.quotes.length === 0) {
      return <Loader />;
    }
    return (
      <>
        <Link to="/"><button className="Quotes__back-to-home"> {'<'} </button></Link>
        <div className="Quotes">
          {this.currentQuote.body} <br /><br />
          {this.currentQuote.author}
          <div className="Quotes__nav">
            <button className="Quotes__nav-btn" onClick={this.changeCurrentQuote(this.state.currentQuoteId - 1)}>
                {'<'}
              </button>
              <button className="Quotes__nav-btn" onClick={this.changeCurrentQuote(this.state.currentQuoteId + 1)}>
                {'>'}
              </button>
          </div>
        </div>
      </>
    )
  }
}
