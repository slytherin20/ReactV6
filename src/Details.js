import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  state = { loading: true, showModal: false };

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

  adopt = () => {
    window.location = "http://bit.ly/adopt-pets";
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    // throw new Error("hi all");
    if (this.state.loading) {
      return <h2>Loading... Sit tight :)</h2>;
    }
    const { name, animal, city, state, breed, description, images, showModal } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <h1>{animal}</h1>
        <h2>
          {breed}-{city},{state}
        </h2>
        <ThemeContext.Consumer>
          {([theme]) => (
            <button
              style={{ backgroundColor: theme }}
              onClick={this.toggleModal}
            >
              Adopt {name}
            </button>
          )}
        </ThemeContext.Consumer>
        <p>{description}</p>
        {showModal ? (
          <Modal>
            <h1>Would you like to adopt {name}?</h1>
            <div className="buttons">
              <button onClick={this.adopt}>Yes</button>
              <button onClick={this.toggleModal}>No</button>
            </div>
          </Modal>
        ) : null}
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
