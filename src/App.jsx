import { useState, useEffect } from "react";
import "./App.css";
import PokemonCard from "./PokemonCard";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]); 
  const [searchTerm, setSearchTerm] = useState("");

  const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=20";

  const fetchAllPokemon = async () => {
   
      const response = await fetch(API_URL);
      const data = await response.json();


      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return await res.json();
        })
      );

      setPokemonList(pokemonDetails);
 
  };

  const searchPokemon = async (pokemonName) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      const data = await response.json();
      setPokemonList([data]); 
  };

  useEffect(() => {
    fetchAllPokemon(); 
  }, []);

  return (
    <>
      <p className="mx-auto mt-10 max-w-lg text-center text-2xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
        Pokémon Search
      </p>
      <h2 className="text-center text-base/7 font-lighter text-gray-600">
        Look for a Pokémon
      </h2>

      <div className="m-8">
        <form
          className="max-w-md mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            searchPokemon(searchTerm);
          }}
        >
          <div className="relative">
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full p-4 ps-10 text-sm text-sky-50 border border-sky-50 rounded-lg bg-slate-900"
              placeholder="Enter Pokémon name"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-neutral-800 px-4 py-1.5 rounded-lg"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {pokemonList.length > 0 ? (
        <div className="mx-8 flex flex-wrap gap-2 lg:justify-center">
          {pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-gray-500">Pokémon not found</h1>
        </div>
      )}
    </>
  );
};

export default App;
