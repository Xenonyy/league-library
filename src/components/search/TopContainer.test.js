import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TopContainer from "./TopContainer";

describe("<TopContainer />", () => {
    test("should render component without crashing", () => {
        const { getByTestId } = render(<TopContainer />);
        expect(getByTestId("league-title")).toHaveTextContent("League Library");
    });
});