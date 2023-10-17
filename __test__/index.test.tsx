import React from "react";
import { render } from "@testing-library/react";
import Home from "@/pages/index";
import { City } from "@/types/city";

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

        expect(getByTestId("search-bar-mock")).toBeInTheDocument();
        expect(getByTestId("weather-display-mock")).toBeInTheDocument();
    });
});
