import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ query, setQuery, setSearch }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    setSearch({ search: query.query });
  }

  function handleChange(evt) {
    setQuery({ ...query, query: evt.target.value });
  }

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      onSubmit={handleSubmit}
    >
      <InputBase
        fullWidth
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search News Stories"
        value={query.query}
        onChange={handleChange}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
