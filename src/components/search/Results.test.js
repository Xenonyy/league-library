import { Results } from "./Results";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<Results />", () => {
  it("should render component without crashing", () => {
    const { getByTestId } = render(<Results />);
    expect(getByTestId("results")).toBeDefined();
  });
  it("should show 'No results found. :(' text", () => {
    const { getByTestId } = render(<Results />);
    expect(getByTestId("results")).toHaveTextContent("No results found. :(");
  });
});