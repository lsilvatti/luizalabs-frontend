import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { BrowserRouter as Router } from "react-router-dom";

describe("CharacterHeader", () => {
  it("should have a enabled text input", async () => {
    render(
      <Router>
        <SearchBar />
      </Router>
    );
    const textInput = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(textInput, { target: { value: "spider" } });
    expect(textInput.value).toBe("spider");
  });
});
