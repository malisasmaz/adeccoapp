import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Detail() {

    const baseUrl = "https://localhost:44305/api/pokemon";

    const [APIData, setAPIData] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${baseUrl}/${localStorage.getItem('detail')}`)
            .then((response) => {
                try {
                    setAPIData(response.data);
                    setLoading(false);
                } catch (error) {
                    console.error("Error ", error);
                }
            })
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
      }
    return (
        <div>
            <img src={APIData.sprites.frontDefault} ></img>
            <h1>{APIData.name}</h1>
            <h3>Height: {APIData.height}</h3>
            <h3>Weight: {APIData.weight}</h3>
            <h3>BaseExperience: {APIData.baseExperience}</h3>
            <h3>
                Abilities;
                {APIData.abilities.map(item => {
                    return <li>{item.ability.name}</li>;
                })}
            </h3>
            <h3>
                Forms;
                {APIData.forms.map(item => {
                    return <li>{item.name}</li>;
                })}
            </h3>
            <h3>
                Types;
                {APIData.types.map(item => {
                    return <li>{item.type.name}</li>;
                })}
            </h3>
        </div>
    )
};
