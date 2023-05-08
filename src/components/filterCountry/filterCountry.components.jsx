export const FilterCountry = ({onSelect}) => {
    const selectHandler = (evt) => {
        const regionName = evt.target.value 
        onSelect(regionName)
    }
    return (
        <select className="select__filter" onChange={selectHandler}>
            <option className="option"> Filter by Region</option>
            <option className="option" value="Africa">Africa</option>
            <option className="option" value="America">America</option>
            <option className="option" value="Asia">Asia</option>
            <option className="option" value="Europe">Europe</option>
            <option className="option" value="Oceania">Oceania</option>

        </select>
    )
}