import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Search from "./Search";

describe("should render component without crashing", () => {
    test("should render search container correctly", () => {
        const { getByTestId } = render(<Search />);
        expect(getByTestId("search-container")).toBeDefined();
        expect(getByTestId("search-input")).not.toHaveTextContent();
    });

    // test("should call onclick event when clicked", () => {
    //     const { getByTestId } = render(<Search />);
    //     const reset = getByTestId('reset');
    //     expect(reset).toHaveTextContent("X");
    //     const spy = jest.spyOn(Search.prototype.resetSearch, "onClick");
    //     fireEvent.click(reset);
    //     expect(spy).toHaveBeenCalled();
    //     spy.mockRestore();
    // });
});
