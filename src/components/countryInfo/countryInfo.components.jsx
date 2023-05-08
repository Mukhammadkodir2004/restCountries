import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../api";
import { Link } from "react-router-dom";

export const CountryInfo = () => {
    const [country, setCountry] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const { countryName } = useParams();

    const getCountryByName = async () => {
        try {
            if (!countryName) {
                throw new Error('No country name provided.');
            }

            const res = await fetch(`${apiUrl}/name/${countryName}`);
            if (!res.ok) {
                throw new Error(`Failed to fetch data from API.`);
            }
            const data = await res.json();
            setCountry(data[0]);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    };

    useEffect(() => {
        getCountryByName();
    }, [countryName]);

    return (
        <div className="country__info__wrapper">
            <button>
                <Link to='/'>Back</Link>
            </button>

            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : country ? (
                <div className="country__info__container">
                    <div className="country__info-img">
                        <img src={country.flags.png} alt={country.name.common} />
                    </div>
                    <div className="country__info">
                        <div className="country__info-left">
                            <h5>
                                Native Name: <span>{country.name.common}</span>
                            </h5>
                            <h5>
                                Population: <span>{country.population}</span>
                            </h5>
                            <h5>
                                Region: <span>{country.region}</span>
                            </h5>
                            <h5>
                                Sub Region: <span>{country.subregion}</span>
                            </h5>
                        </div>
                    </div>
                </div>
            ) : (
                <p>No country data available.</p>
            )}
        </div>
    );
};
