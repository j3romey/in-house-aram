export interface IChampion{
    id: string;
    tags: string[];
}

export interface IChampions{
    values: Champion[];
}

export class Champion implements IChampion{
    id ='';
    tags = [] as string[];
}

export class Champions implements IChampions{
    values = [] as Champion [];
}