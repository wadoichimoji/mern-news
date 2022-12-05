import { Container } from "@mui/material";
import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./SearchPage.css";

export default function SearchPage() {
  return (
    <Container class="list">
      <div>SearchPage</div>
      <SearchBar />
    </Container>
  );
}
