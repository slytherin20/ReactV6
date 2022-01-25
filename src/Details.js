import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
class Details extends Component {
  state = { loading: true };

  async componentDidMount() {
    let res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    let json = await res.json();
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }
  render() {
    // throw new Error("hi all");
    if (this.state.loading) {
      return <h2>Loading... Sit tight :)</h2>;
    }
    const { name, animal, city, state, breed, description, images } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <h1>{animal}</h1>
        <h2>
          {breed}-{city},{state}
        </h2>
        <button>Adopt {name}</button>
        <p>{description}</p>
      </div>
    );
  }
}

//export default withRouter(Details); //in class components the router does not automatically passes props and
//params to Details component. So, we use withRouter which is a HOC.
//withRouter passes the params to details here by doing this.

let DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
