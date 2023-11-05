import { Champion } from '../interfaces/Champion.ts'

export const retrieveChampions = async function() : Promise<Array<Champion>> {

    let x = new Array<Champion>();

    await fetch("http://ddragon.leagueoflegends.com/cdn/13.21.1/data/en_US/champion.json")
      .then((response) => response.json())
      .then(json => json.data)
      .then(championsData => {
        Object.keys(championsData).forEach((key) => {
          let championData = championsData[key]
          let champion = new Champion;

          champion.id = championData.id;
          champion.tags = championData.tags;

          x.push(champion);
        })
      })
      .catch((error) => {
        // handle your errors here
        console.error(error)
      })
    
    console.log(x);

    return x;
}

export default retrieveChampions