const Country = ({country, updateVisitedList}) => {

    const handleClick = (e) => {
        updateVisitedList(country)
    }

    return(
        <>
            <li>{country.name.common}
            <button onClick={handleClick}>Visited</button>
            </li>
        </>

    );

}

export default Country;