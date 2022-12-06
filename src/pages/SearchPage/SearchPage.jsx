import { Container } from "@mui/material";
import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./SearchPage.css";

export default function SearchPage({ query, setQuery, setSearch, getSearch }) {
  return (
    <Container className="list">
      <div>SearchPage</div>
      <SearchBar
        query={query}
        setQuery={setQuery}
        setSearch={setSearch}
        getSearch={getSearch}
      />
    </Container>
  );
}
