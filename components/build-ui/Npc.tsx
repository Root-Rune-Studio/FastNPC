type FormNpc = {
  id: number;
  name: string;
  hp: number;
  ac: number;
  speed: number;
  caster: boolean;
  campaign: {
    id: number,
    campaign: string,
  };
  gender: {
    id: number,
    gender: string,
  };
  age: {
    id: number,
    age: string,
  };
  potency: {
    id: number,
    potency: string,
  };
  archetype: {
    id: number,
    archetype: string,
  };
  species: {
    id: number,
    species: string,
  };
  bond: {
    id: number,
    bond: string,
  };
  flaw: {
    id: number,
    flaw: string,
  };
}

export default function Npc({
  id,
  name,
  hp,
  ac,
  speed,
  caster,
  campaign,
  gender,
  age,
  potency,
  archetype,
  species,
  bond,
  flaw
}: FormNpc) {

}
