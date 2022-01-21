import React from "react";
import {
  Grid,
  CircularProgress,
  GridList,
  GridListTile,
  GridListTileBar
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useQuery } from "react-query";
import { useNavigate } from "react-router";

export default function HomePage() {
  let navigate = useNavigate();

  const getPokemons = async () => {
    const response = await fetch("https://localhost:44305/api/pokemon");
    const data = await response.json();

    return data;
  };

  const getPokemon = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  };

  const PokemonTile = ({ name, url }) => {
    const { error, isLoading, data } = useQuery(`pokemon${name}`, () =>
      getPokemon(url)
    );

    if (error) {
      return <Alert severity="error">{error}</Alert>;
    }

    if (isLoading) {
      return (
        <Grid container justify="center">
          <CircularProgress />
        </Grid>
      );
    }

    const {
      sprites: { front_default }
    } = data;

    const OpenDetailPage = ({ name }) => {
      localStorage.setItem('detail', name);
      navigate('/detail');
    }

    return (
      <GridListTile>
        <a onClick={() => { OpenDetailPage({ name }) }}>
          <img src={front_default} alt={name} />
          <GridListTileBar title={name} />
        </a>
      </GridListTile>
    );
  };

  const { error, isLoading, data } = useQuery("pokemons", getPokemons);

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (isLoading) {
    return (
      <Grid container justify="center">
        <CircularProgress />
      </Grid>
    );
  }

  const { results: pokemons } = data;

  return (
    <div>
      <h1>Pokemons</h1>
      <GridList cellHeight={300}>
        {pokemons.map((pokemon) => (
          <PokemonTile key={pokemon.name} {...pokemon} />
        ))}
      </GridList>
    </div>
  );
};
