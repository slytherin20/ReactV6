import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(err, msg) {
    console.log("Caught error:", err, "with message:", msg);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          Error: <Link to="/">Click here</Link> to go back to home page.
        </h2>
      );
    }
    return this.props.children;
  }
}

//<ErrorBoundary>
//<h1>Hi there</h1>
//</ErrorBoundary>;

export default ErrorBoundary;
