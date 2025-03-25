import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CustomButton from "./CustomButton";

describe("CustomButton", () => {
  const defaultProps = {
    onClick: jest.fn(),
    appearance: "solid" as const,
    sentiment: "accented" as const,
    children: "Click Me",
  };

  it("renders without crashing", () => {
    render(<CustomButton {...defaultProps} />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("applies the correct appearance and sentiment props", () => {
    render(<CustomButton {...defaultProps} />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("appearance", "solid");
    expect(button).toHaveAttribute("sentiment", "accented");
  });

  it("handles click events", () => {
    render(<CustomButton {...defaultProps} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it("renders with different appearances", () => {
    const appearances = ["solid", "outline", "ghost"] as const;
    appearances.forEach((appearance) => {
      render(<CustomButton {...defaultProps} appearance={appearance} />);
      const button = screen.getByRole("button");
      const expectedAppearance =
        appearance === "outline"
          ? "bordered"
          : appearance === "ghost"
          ? "transparent"
          : appearance;
      expect(button).toHaveAttribute("appearance", expectedAppearance);
    });
  });

  it("renders with different sentiments", () => {
    const sentiments = ["accented", "neutral", "positive", "negative"] as const;
    sentiments.forEach((sentiment) => {
      render(<CustomButton {...defaultProps} sentiment={sentiment} />);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("sentiment", sentiment);
    });
  });

  it("is accessible via keyboard interactions", () => {
    render(<CustomButton {...defaultProps} />);
    const button = screen.getByRole("button");
    button.focus();
    expect(button).toHaveFocus();
    fireEvent.keyDown(button, { key: "Enter", code: "Enter" });
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it("handles disabled state", () => {
    render(<CustomButton {...defaultProps} disabled />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });

  it("passes additional attributes", () => {
    render(<CustomButton {...defaultProps} data-testid="custom-button" />);
    const button = screen.getByTestId("custom-button");
    expect(button).toBeInTheDocument();
  });

  it("renders children correctly", () => {
    render(<CustomButton {...defaultProps}>Test Button</CustomButton>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });
});
