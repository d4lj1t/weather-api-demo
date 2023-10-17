import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import WeatherDisplay from "./WeatherDisplay";
import { MyContext } from "@/api/context";

jest.mock("../api/weather", () => ({
    getWeather: jest.fn().mockRejectedValue(new Error("API error")),
}));


describe("weather display component", () => {
    it("renders error state when fetching data fails", async () => {
        const city = { name: "New York", country: "US" };

        render(
            <MyContext.Provider value={{city}}>
                <WeatherDisplay/>
            </MyContext.Provider>
        );

        await screen.findByText("error fetching data");
        expect(screen.getByText("error fetching data")).toBeInTheDocument();

    });
});
