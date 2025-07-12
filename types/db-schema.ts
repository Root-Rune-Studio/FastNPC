export interface Campaign {
  id: number;
  title: string;
}

export interface Gender {
  id: number;
  name: string;
}

export interface Age {
  id: number;
  name: string;
}

export interface Potency {
  id: number;
  name: string;
  modifier: number;
}

export interface Archetype {
  id: number;
  name: string;
  description: string;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  primary_ability: string;
}

export interface Species {
  id: number;
  name: string;
}

export interface NPC {
  id: number;
  name: string;
  hp: number;
  ac: number;
  speed: number;
  caster: boolean;
  campaign_id: number;
  gender_id: number;
  age_id: number;
  potency_id: number;
  archetype_id: number;
  species_id: number
  bond_id: number;
  flaw_id: number;
}

export interface Bond {
  id: number;
  description: string;
}

export interface Flaw {
  id: number;
  description: string;
}
