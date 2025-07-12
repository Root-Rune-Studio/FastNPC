/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";

type DefaultValues = {
  genderId?: number;
  ageId?: number;
  potencyId?: number;
  archetypeId?: number;
  speciesId?: number;
}
export default function useRandom({
  archetypesLength,
  speciesLength,
  genderId,
  ageId,
  potencyId,
  archetypeId,
  speciesId,
  typeRandom,
}: DefaultValues & {
  archetypesLength: number,
  speciesLength: number,
  typeRandom: string
}) {
  const [defaultValues, setDefaultValues] = React.useState<DefaultValues>({
    genderId: genderId || 2,
    ageId: ageId || 2,
    potencyId: potencyId || 3,
    archetypeId,
    speciesId,
  });
  const randomNumber = (limit: number): number => {
    return Math.floor((Math.random() * limit) + 1);
  }
  const randomValues = React.useMemo(() => {
    switch(typeRandom) {
      case 'default':
        setDefaultValues({
          ...defaultValues,
          archetypeId: randomNumber(archetypesLength),
          speciesId: randomNumber(speciesLength),
        })
      case 'all':
        setDefaultValues({
          genderId: randomNumber(3),
          ageId: randomNumber(3),
          potencyId: randomNumber(3),
          archetypeId: randomNumber(archetypesLength),
          speciesId: randomNumber(speciesLength),
        })
    }
  }, [])
  return randomValues;
}
