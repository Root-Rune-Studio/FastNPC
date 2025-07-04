export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
}

export interface NPC {
  id: number;
  name: string;
  race: string;
  age: number;
  hp: number;
  ac: number;
  speed: number;
  caster: boolean;
  potency_id: number;
  age_id: number;
  gender_id: number;
  archetype_id: number;
  user_id: number;
  bond_id: number;
  flaw_id: number;
}

export interface Potency {
    id: number;
    name: string;
    modifier: number;
}

export interface Age {
    id: number;
    name: string;
}

export interface Gender {
    id: number;
    name: string;
}

export interface Bond {
  id: number;
  description: string;
}

export interface Flaw {
  id: number;
  description: string;
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
}