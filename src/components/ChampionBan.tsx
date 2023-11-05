import ChampionTile from './ChampionTile'
import { Champions} from '../interfaces/Champion.ts'

function ChampionBan(champions : Champions) {
    return (
        <div className="w-full px-24 box-border">
            <h1>Champion Pool:</h1>
            <div className="max-h-[16rem] mb-6 flex flex-wrap overflow-y-scroll">
                {
                    champions.values.map((x) =>
                        <ChampionTile id={x.id} tags={x.tags} />
                    )
                }
            </div>

            {/* <h1>Champion Ban:</h1>
            <div className="max-h-[16rem] mb-6 flex flex-wrap overflow-y-scroll">
                
            </div> */}
        </div>

    )
  }
  
  export default ChampionBan
  