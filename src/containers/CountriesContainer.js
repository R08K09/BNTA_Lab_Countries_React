import { useState, useEffect } from "react"
import Country from "../components/Country";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])

    const fetchCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json();

        setCountries(data);
    }

    useEffect(() => {
        fetchCountries()
    }, []);


    const updateVisitedList = (country) => {
        if(visitedCountries.includes(country)){
            const updatedCountries = [country, ...countries];
            const updatedVisitedCountries = visitedCountries.filter((countryObject) => countryObject.name.common !== country.name.common)
            setVisitedCountries(updatedVisitedCountries);
            setCountries(updatedCountries);
        } 
        else if (countries.includes(country)){
            const updatedVisitedCountries = [...visitedCountries, country];
            const updatedCountries = countries.filter((countryObject) => countryObject.name.common !== country.name.common)
            setVisitedCountries(updatedVisitedCountries);
            setCountries(updatedCountries);
        }
    }

    return (
        <>
            <div class="visited_countries">
                <h3>Visited Countries</h3>
                <ul>{visitedCountries.map((country) => (
                    <Country country={country} updateVisitedList={updateVisitedList} visited={true}/>))}</ul>
            </div>
            <div class="countries_to_visit">
                <h3>Countries Yet To Visit</h3>
                <ul>{countries.map((country) => (
                    <Country country={country} updateVisitedList={updateVisitedList} visited={false}/>))}</ul>
            </div>
       </>
    );

};

export default CountriesContainer;