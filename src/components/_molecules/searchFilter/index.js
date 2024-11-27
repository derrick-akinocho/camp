import "./searchFilter.css"
import {useEffect, useState} from "react";
import {tourDeFrance2024} from "../../../data/stage";

function SearchFilter ({setResult}) {

    const [city, setCity] = useState("")
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        filter();
    }, [city, isChecked]);

    const filter = () => {

        if (city !== '') {
            const results = tourDeFrance2024.filter((stage) => {
                if (isChecked === false){
                    return stage.start.toLowerCase().startsWith(city.toLowerCase()) + stage.finish.toLowerCase().startsWith(city.toLowerCase())
                }else {
                    return stage.finish.toLowerCase().startsWith(city.toLowerCase())
                }
            });
            setResult(results)
        } else {
            setResult(tourDeFrance2024)
        }

    };

    return (
        <div className="search">
            <input
                type="search"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="input"
                placeholder="Recherche par ville"
            />

            <label >
                <input type="checkbox" onChange={() => setIsChecked((prev) => !prev)}/>
                <span> Voir uniquement les étapes à venir</span>
            </label>
        </div>
    );
}

export default SearchFilter