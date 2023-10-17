import React from "react";
import { render } from "@testing-library/react";
import Home from "./";
import { City } from "@/types/city";

// Mock the SearchBar and WeatherDisplay components
jest.mock("../components/SearchBar", () => {
    return function MockedSearchBar() {
        return <div data-testid="search-bar-mock"></div>;
    };
});

jest.mock("../components/WeatherDisplay", () => {
    return function MockedWeatherDisplay() {
        return <div data-testid="weather-display-mock"></div>;
    };
});

describe("Home Component", () => {
    it("renders the Home component with the initial city", () => {
        const initialCity: City = { name: "New York", country: "US" };

        const { getByText, getByTestId } = render(
            <Home initialCity={initialCity} />
        );

        // Check that the component renders the titlew

        // Check that the SearchBar and WeatherDisplay components are rendered

        expect(getByTestId("search-bar-mock")).toBeInTheDocument();
        expect(getByTestId("weather-display-mock")).toBeInTheDocument();
    });
});
