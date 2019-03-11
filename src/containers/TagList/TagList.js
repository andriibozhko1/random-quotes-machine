import React, { Component } from "react";
import api from "../../api/api";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader"
import "./TagList.scss";

export default class TagList extends Component {
  state = {
    tags: []
  };

  async componentDidMount() {
    const tags = await api.getTagList();

    this.setState({ tags });
  }

  render() {
    if (this.state.tags.length === 0) {
      return <Loader />;
    }

    return (
      <ul className="TagList">
        {this.state.tags.map(tag => (
          <Link key={tag.id} to={tag.tag}>
            <li className="TagList__item">
              <div className="TagList__img-block">
                <img className="TagList__img" src={tag.img} alt={tag.tag} />
              </div>
              <div className="TagList__title">
                {" "}
                {tag.tag.split("")[0].toUpperCase() + tag.tag.slice(1, tag.tag.length)}{" "}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    );
  }
}
