import { useEffect, useState } from 'react'
import Team from './Team'
import { Champion, Champions } from '../interfaces/Champion.ts'

function TeamContainer(championsData : Champions) {
    const [redTeam, setRedTeam] = useState<Champion[]>([])
    const [blueTeam, setBlueTeam] = useState<Champion[]>([])

  

    if(championsData !== undefined) {
        let teamSize = 10;
        let champions = championsData.values.slice();    
    
        console.log("BASE CHAMPS")
        console.log(champions)

        //Shuffle
        for(let i = champions.length-1; i > 0; i--){
            let index = Math.floor(Math.random() * i);

            let lastIndexChampion = champions[i];
            let randomIndexChampion = champions[index]

            //perform swap
            champions[i] = randomIndexChampion;
            champions[index] = lastIndexChampion;
        }

        console.log("SHUFFLED CHAMPS")
        console.log(champions)
     

        useEffect(() => {
            setBlueTeam((blueTeam) => blueTeam.concat(champions.slice(0, teamSize)))

            return () => { 
                setBlueTeam([]);
            }
        }, [championsData])

        useEffect(() => {
            setRedTeam((redTeam) => redTeam.concat(champions.slice(teamSize, teamSize * 2)))

            return () => { 
                setRedTeam([])
            }
        }, [championsData])
    }

    return (    
    <div className="w-full flex px-24 box-border">
        <div className="grow">
            <h1 className="text-3xl font-bold underline">
                Blue Team:
            </h1>
            <div className=" border-t-8 border-sky-500">
                <Team values={blueTeam}/>
            </div>
        </div>
        <div className="w-1/4">

        </div>


        <div className="grow">
            <h1 className="text-3xl font-bold underline">
                Red Team:
            </h1>
            <div className=" border-t-8 border-rose-500">
                <Team values={redTeam}/>
            </div>
        </div>
    </div>
  )
}

export default TeamContainer