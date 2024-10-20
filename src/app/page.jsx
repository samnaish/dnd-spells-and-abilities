"use client";

import { useEffect, useState } from "react";
import { getAllSpells } from "@/../utility/api";
import SpellCard from "@/../components/spellCard";


export default function Home() {
  const [spells, setSpells] = useState([]);
  
  useEffect(() => {
    const savedSpells = localStorage.getItem("spells");
    if (savedSpells) setSpells(JSON.parse(savedSpells));
    getAllSpells().then((spells) => {
      setSpells(spells);
      localStorage.setItem("spells", JSON.stringify(spells));
    });
}, []);

  return (
    <div className="font-serif text-center">
      {spells.length === 0 && <span className="text-yellow-400">Loading...</span>}
      <header>
        <h1 className="justify-center">DnD Spells</h1>
      </header>
      <ul className="flex flex-wrap justify-center gap-16 p-0 m-0">
        {spells.map((spell) => (
          <SpellCard key={spell.index} spell={spell} />
        ))}
      </ul>
    </div>
  )
}
