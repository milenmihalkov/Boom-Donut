import React from "react";

//const Title = ({ text }) => <h1 className="title">{text}</h1>;


class Title extends React.Component {
    render() {
      return <div>{this.props.children}</div>;
    }
  }

export default Title;
