import React, { createContext } from "react";
import { City, defaultCity } from "@/types/city";

interface MyContextType {
    city: City;
    setCity: React.Dispatch<City>;
}
export const MyContext = createContext<MyContextType>({
    city: defaultCity,
    setCity: () => {},
});