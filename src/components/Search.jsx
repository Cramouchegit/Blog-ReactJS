import { useState } from "react";
import PropTypes from "prop-types";

const Search = (props) => {
  // Fitur Filter Data dan Pengenalan useState
  const [search, setSearch] = useState("");

  // Mengembalikan Value ke Parent melalui Props
  const onSearchChange = () => {
    props.onSearchChange(search);
  };

  const searchKeydown = (e) => {
    if (e.key === "Enter") {
      onSearchChange();
    }
  };

  return (
    <div>
      <div>
        Cari Artikel :{" "}
        <input
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchKeydown}
          type="text"
        />
        <button onClick={onSearchChange}>Cari</button>
      </div>
      <small>
        Ditemukan {props.totalPosts} data dengan pencarian kata {search}
      </small>
    </div>
  );
};

// Menggunakan PropTypes

Search.propTypes = {
  totalPosts: PropTypes.number.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default Search;
