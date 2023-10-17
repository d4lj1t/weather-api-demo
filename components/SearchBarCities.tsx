import { City } from "@/types/city";
import styles from "styles/SearchBarCities.module.css";

type ParamsType = { cities: City[], changeCity: Function };
export default function SearchBarCities({
  cities,
  changeCity,
}: ParamsType) {
  if (!cities.length)
    return (
      <ul className={styles.list}>
        <li className={styles.listItem}>No city found</li>
      </ul>
    );
  else
    return (
      <ul className={styles.list}>
        {cities.map(item => (
          <li key={item.id} className={styles.listItem}>
            <a onClick={() => changeCity(item)}>
              {item.name} - {item.country}
            </a>
          </li>
        ))}
      </ul>
    );
}
