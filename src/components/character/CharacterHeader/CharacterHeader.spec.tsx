import React from "react";
import { render, screen } from "@testing-library/react";
import CharacterHeader from "./CharacterHeader";
import { BrowserRouter as Router } from "react-router-dom";

describe("CharacterHeader", () => {
  it("should have a SearchBar", () => {
    render(
      <Router>
        <CharacterHeader />
      </Router>
    );
    const textInput = screen.getByPlaceholderText("Procure por heróis");
    expect(textInput).toBeInTheDocument();
  });

  it("should have a SearchBar", () => {
    render(
      <Router>
        <CharacterHeader />
      </Router>
    );
    const textInput = screen.getByAltText("logo");
    expect(textInput).toBeInTheDocument();
  });
});
