import {IChampion } from '../interfaces/Champion.ts'

function ChampionImage(champion : IChampion) {
    let url = "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + champion.id + "_0.jpg"; 

    return (
        <div className="w-1/5">
            <img className='w-full' id={champion.id} src={url}/>
        </div>
    )
}

export default ChampionImage
