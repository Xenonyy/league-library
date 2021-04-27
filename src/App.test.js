import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';

describe("<App />", () => {
    test('sould render components without crashing', () => {
        render(<App />);
    });
});
