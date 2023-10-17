import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { getCities } from "@/api/autocompleteCities";
import styles from "@/styles/SearchBar.module.css";
import { MyContext } from "@/api/context";
import { City } from "@/types/city";
import SearchIcon from "@/public/icons/search.svg";
import useDebounce from "@/hooks/useDebounce";
import SearchBarCities from "@/components/SearchBarCities";

export default function SearchBar() {
    const [value, setValue] = useState("");
    const [cities, setCities] = useState<City[]>([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    function handleSearch(value: string) {
        setValue(value);
        if (!value) return;
    }

    const debounced = useDebounce(value);

    useEffect(() => {
        const fetchCities = async () => {
            if (value.length > 0) {
                setLoading(true);
                setError(null);
                try {
                    const data = await getCities(value);
                    setCities(data || null);
                } catch (error) {
                    setError("Failed to fetch weather data.");
                } finally {
                    setLoading(false);
                }
            }
        };

        void fetchCities();
    }, [debounced]);

    const { setCity } = useContext(MyContext);

    function changeCity(selectedCity: City) {
        setValue("");
        setCity(selectedCity);
    }

    return (
        <div className={styles.container}>
            <div className={styles.information}>
                {loading && (
                    <div>Loading...</div>
                )}
                {error && (
                    <div>error fetching data</div>
                )}
            </div>
            <Image src={SearchIcon} alt="search icon"></Image>
            <input
                value={value}
                onChange={e => handleSearch(e.target.value)}
                placeholder="Search a city..."
                className={styles.input}
            />
            {value && (
                <SearchBarCities
                    cities={cities}
                    changeCity={changeCity}
                />
            )}
        </div>
    );
}