/**
 *
 * @param array Array of items having id
 * @returns  map with Id associated with the item {id:item}
 */
export const convertArrayToIdMap = <T extends {id: string}>(array: T[]) => {
  const map: {[key: string]: T} = {};

  array.forEach(item => {
    map[item.id] = item;
  });

  return map;
};
