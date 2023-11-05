import './App.css'
import { useEffect, useState } from 'react'
// import ChampionBan from './components/ChampionBan.tsx'
import TeamContainer from './components/TeamContainer.tsx'
import { Champion } from './interfaces/Champion.ts'

function App() {
  const [champions, setChampions] = useState<Champion[]>([])

  useEffect(() => {
    const abortController = new AbortController();

    fetch("https://ddragon.leagueoflegends.com/cdn/13.21.1/data/en_US/champion.json", {  signal: abortController.signal })
    .then((response) => response.json())
    .then(json => json.data)
    .then(championsData => {
        let x = new Array<Champion>();

        Object.keys(championsData).forEach((key) => {
            let championData = championsData[key]
            let champion = new Champion;
        
            champion.id = championData.id;
            champion.tags = championData.tags;

            x.push(champion);
        })

        console.log(x)

        setChampions(champions => champions.concat(x))
    })
    .catch((error) => {
      // handle your errors here
      console.error(error)
    })
    return () => {
        // this will cancel the fetch request when the effect is unmounted
        abortController.abort();
        setChampions([])
    };
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        In-House Aram
      </h1>
      {/* <ChampionBan values={champions}/> */}

      <TeamContainer values={champions}/>
    </div>
  )
}

export default App
