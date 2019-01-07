interface IAbility{
name:string,
url:string
}
interface IPokemonAbility{
ability : IAbility,
slot:number
is_hidden: boolean

}
export interface IPokemonDetails
{
name:string,
weight:number,
height:number,
abilities : Array<IPokemonAbility>

}
