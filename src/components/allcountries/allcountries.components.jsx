import React, { useState, useEffect } from "react";
import { apiUrl } from "../api";
import { SearchInput } from "../search";
import { FilterCountry } from "../filterCountry";
import { Link } from "react-router-dom";


export const AllCountries = () => {
    const [countries, setCountries] = useState([]);
    const [isloading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
  
    const getAllCountries = async () => {
      try {
        const res = await fetch(`${apiUrl}/all`);
        if (!res.ok) throw new Error(`Something went wrong!`);
        const data = await res.json();
        setCountries(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };
  
    const getCountryByName = async (countryName) => {
      const res = await fetch(`${apiUrl}/name/${countryName}`);
      try {
        if (!res.ok) throw new Error(`Not found any Country`);
        const data = await res.json();
        setCountries(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };
    
    const getCountryByRegion = async (regionName) => {
      const res = await fetch(`${apiUrl}/region/${regionName}`);
      try {
        if (!res.ok) throw new Error(`Not found any region`);
        const data = await res.json();
        setCountries(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };
  
    useEffect(() => {
      getAllCountries();
    }, []);
  
    return (
      <div className="all__country-wrapper">
        <div className="country__top">
          <div className="search">
            <SearchInput onSearch={getCountryByName} />
          </div>
          <div className="filter">
            <FilterCountry onSelect={getCountryByRegion} />
          </div>
        </div>
        <div className="country__bottom">
          {isloading && !error && (
            <h4 className="country__bottom__loading">Loading....</h4>
          )}
          {error && !isloading && <h4>{error}</h4>}
  
          {countries?.map((country) => (
            <Link key={country.name.common} to={`/country/${country.name.common}`}>
              <div className="country__card">
                <div className="country__img">
                  <img src={country.flags.png} alt="" />
                </div>
                <div className="country__data">
                  <h3 className="country__data__name">{country.name.common}</h3>
                  <h6 className="country__data__info">
                    Population: {country.population}
                  </h6>
                  <h6 className="country__data__info">
                    Region: {country.region}{" "}
                  </h6>
                  <h6 className="country__data__info">
                    Capital: {country.capital}{" "}
                  </h6>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  