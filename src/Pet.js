import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Pet = ({ name, breed, animal, images, location, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal}-${breed}-${location}`}</h2>
      </div>
    </Link>
  );
};
export default Pet;
