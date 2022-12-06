import { Container } from "@mui/material";
import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./SearchPage.css";

export default function SearchPage({ getSearch }) {
  return (
    <Container className="list">
      <div>SearchPage</div>
      <SearchBar getSearch={getSearch} />
    </Container>
  );
}
