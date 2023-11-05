import ChampionImage from './ChampionImage'
import { Champions } from '../interfaces/Champion.ts'

function Team(champions : Champions) {
    return (
        <div className="w-full flex flex-wrap">
            {
                champions.values.map((x) => {
                    return <ChampionImage id={x.id} tags={x.tags}/>
                })
            }
        </div>
    )
}

export default Team
