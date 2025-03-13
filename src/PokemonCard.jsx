import React from "react";


const PokemonCard = ({ pokemon }) => {


    return (



        <div className="max-w-sm mx-auto  my-4 bg-slate-900 border border-gray-200 rounded-lg shadow-sm border-gray-700">
            <img className="mx-auto  mt-6 rounded-full h-20 w-20" src="data:image/png;base64,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" alt="" />
            <div className="flex justify-center p-4">
                <img className="rounded-lg mt-3 h-70 w-70" src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`} alt="{pokemon.name}" />
            </div >
            <div className="p-5">
            {/* <p className="pt-4 text-center font-bold text-sky-50">{pokemon.id}</p> */}
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pokemon.name}</h5>
                </a>
                
                <div className="mb-3">
                    {pokemon.stats.map((stat) => (
                        <p key={stat.stat.name} className="text-gray-300">
                            <span className="font-bold tracking-tight">{stat.stat.name.toUpperCase()}</span>: {stat.base_stat}
                        </p>
                    ))}
                </div>
            </div>
        </div>






    );
}

export default PokemonCard