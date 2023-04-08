import { useState } from "react";

export default function Searchbar({ countries }) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  if (searchInput.length > 0) {
    countries.filter((country) => {
      return country.name.common.includes(searchInput);
    });
  }
  console.log(searchInput);

  return (
    <input
      type="text"
      placeholder="Search here"
      onChange={handleChange}
      value={searchInput}
    />
  );
}
