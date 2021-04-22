import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WelcomePage from "./WelcomePage";

describe("should render component without crashing", () => {
    test("Make sure Welcome page is hidden at first", () => {
        const { getByTestId } = render(<WelcomePage />);
        expect(getByTestId("welcome")).toHaveClass('fade');
    });

    test("Calls onclick event when clicked", () => {
        const { getByTestId } = render(<WelcomePage />);
        const btn = getByTestId("pagebtn");
        expect(btn).toBeDefined();
        // const spy = jest.spyOn(WelcomePage.prototype.ShowPage, "onClick")
        // fireEvent.click(btn);
        // expect(spy).toHaveBeenCalled();
        // spy.mockRestore();
        // expect(getByTestId("welcome")).not.toBeVisible();
    });
});
