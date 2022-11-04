import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }

  static getDerivedStateFromErorr(error) {
    return { error };
  }

  render() {
    if (this.state.error)
      return (
        <p style={{ color: "red" }}>
          Something went wrong!!!
          <Link to="/">Go Back</Link>
        </p>
      );

    return this.props.children;
  }
}

export default ErrorBoundary;
