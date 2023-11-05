import {IChampion } from '../interfaces/Champion.ts'


function ChampionTile(champion : IChampion) {
    let url = "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/champion/" + champion.id + ".png"; 

    return (
        <div className="basis-24 border-2 border-black hover:border-white hover:cursor-pointer">
            <img className='w-full' src={url}/>
        </div>
    )
  }
  
  export default ChampionTile
  