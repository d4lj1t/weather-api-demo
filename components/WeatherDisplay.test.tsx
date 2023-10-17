import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import WeatherDisplay from "./WeatherDisplay";
import { MyContext } from "@/api/context";

jest.mock("../api/weather", () => ({
    getWeather: jest.fn().mockReturnValue([{
            current: {
                temp_c: 25,
                humidity: 60,
                wind_mph: 5,
            }
        }]
    ),
}));

describe("WeatherDisplay Component", () => {
    it("renders loading state when fetching data", () => {
        const city = { name: "New York", country: "US" };
        render(
            <MyContext.Provider value={{city}}>
                <WeatherDisplay/>
            </MyContext.Provider>
        );
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("renders weather data when available", async () => {
        render(
            <MyContext.Provider value={{ city: { name: "New York", country: "US" } }}>
                <WeatherDisplay />
            </MyContext.Provider>
        );

        await screen.findByText("Temperature: 25 degrees celsius");
        await screen.findByText("Humidity: 60%");
        await screen.findByText("Wind Speed: 5 miles per hour");

        expect(screen.getByText("Temperature: 25 degrees celsius")).toBeInTheDocument();
        expect(screen.getByText("Humidity: 60%")).toBeInTheDocument();
        expect(screen.getByText("Wind Speed: 5 miles per hour")).toBeInTheDocument();
    });
});
