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

/**
 *
 * @param image string url of the image
 * @returns image or placeholder
 */
export const useImageOrPlaceholder = (image?: string | null) => {
  const imageOrPlaceholder = image
    ? {uri: image}
    : require('../assets/images/placeholder.png');
  return imageOrPlaceholder;
};
