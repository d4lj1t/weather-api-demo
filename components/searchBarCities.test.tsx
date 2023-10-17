import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBarCities from "./SearchBarCities";
import { City } from "@/types/city";

describe("SearchBarCities component", () => {
    it("displays 'No city found' message when cities array is empty", () => {
        const emptyCities: City[] = [];
        const changeCity = jest.fn();

        render(<SearchBarCities cities={emptyCities} changeCity={changeCity} />);

        const noCityFoundMessage = screen.getByText("No city found");

        expect(noCityFoundMessage).toBeInTheDocument();
    });

    it("renders a list of cities when cities array is not empty", () => {
        const cities: City[] = [
            { id: 1, name: "City1", country: "Country1" },
            { id: 2, name: "City2", country: "Country2" },
        ];
        const changeCity = jest.fn();

        render(<SearchBarCities cities={cities} changeCity={changeCity} />);

        const cityList = screen.getByRole("list");
        const cityItems = screen.getAllByRole("listitem");

        expect(cityList).toBeInTheDocument();
        expect(cityItems).toHaveLength(2);

        // Check that city names and countries are displayed
        expect(screen.getByText("City1 - Country1")).toBeInTheDocument();
        expect(screen.getByText("City2 - Country2")).toBeInTheDocument();
    });

    it("calls changeCity function when a city is clicked", () => {
        const cities: City[] = [{ id: 1, name: "City1", country: "Country1" }];
        const changeCity = jest.fn();

        render(<SearchBarCities cities={cities} changeCity={changeCity} />);

        const cityLink = screen.getByText("City1 - Country1");
        fireEvent.click(cityLink);

        expect(changeCity).toHaveBeenCalledWith(cities[0]);
    });
});
