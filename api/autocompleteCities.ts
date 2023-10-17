const baseUrl = "https://api.weatherapi.com/v1/search.json";
import { City } from "@/types/city";

export async function getCities(query: string) {
    const qs = `format=json&accept-language=en-US&q=${query}`;
    const key = '5280a30432fb4a2cb39131417231310'
    const url = `${baseUrl}?key=${key}&${qs}`;
    const res: City[] = await (await fetch(url)).json();
    return res;
}