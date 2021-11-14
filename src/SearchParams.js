import { useState } from "react";

const ANIMALS = ["dog", "cat", "bird", "reptile", "rabbit"];
const BREEDS = [];
const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");

  const updateLocation = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="search-params">
      <label htmlFor="location">
        Location
        <input
          type="text"
          value={location}
          onChange={updateLocation}
          placeholder="Location"
          id="location"
        />
      </label>
      <label htmlFor="animal">
        Animal
        <select
          id="animal"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
          onBlur={(e) => setAnimal(e.target.value)}
        >
          <option />
          {ANIMALS.map((animal) => (
            <option value={animal} key={animal}>
              {animal}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="breed">
        Breed
        <select
          id="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          onBlur={(e) => setBreed(e.target.value)}
        >
          <option />
          {BREEDS.map((breed) => (
            <option value={breed} key={breed}>
              {breed}
            </option>
          ))}
        </select>
      </label>
      <button>Submit</button>
    </div>
  );
};

export default SearchParams;
