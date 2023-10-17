import { getWeather } from "./weather"; // Import your getWeather function

// Mock the global fetch function
global.fetch = jest.fn();

describe("getWeather function", () => {
    it("fetches weather data for a given query", async () => {
        const mockResponse = [
            {},
        ];

        // Mock the fetch function to return a response with your mock data
        fetch.mockResolvedValue({
            json: async () => mockResponse,
        });

        const query = "New York";
        const weatherData = await getWeather(query);

        // Check that the fetch function was called with the correct URL
        expect(fetch).toHaveBeenCalledWith(
            `https://api.weatherapi.com/v1/current.json?key=5280a30432fb4a2cb39131417231310&q=${query}`
        );

        // Check that the function returned the expected data
        expect(weatherData).toEqual(mockResponse);
    });

    it("handles fetch errors", async () => {
        // Mock the fetch function to throw an error
        fetch.mockRejectedValue(new Error("Failed to fetch data"));

        const query = "InvalidCity";

        try {
            await getWeather(query);

            // If no error is thrown, the test should fail
            expect(true).toBe(false);
        } catch (error) {
            // Check that the error message matches the expected error message
            expect(error.message).toBe("Failed to fetch data");
        }
    });
});
