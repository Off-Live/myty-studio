import { TokenID } from 'src/@types/assetCollection';

export const displayTokensToString = (tokenIDs: TokenID[]): string => {
  const { start, current, result } = tokenIDs
    .map((id) => Number(id))
    .sort((a, b) => a - b)
    .reduce(
      (prev, cur) =>
        prev.current + 1 === cur
          ? { ...prev, current: cur }
          : {
              start: cur,
              current: cur,
              result: [
                ...prev.result,
                prev.start === prev.current ? `${prev.current}` : `${prev.start}-${prev.current}`,
              ],
            },
      { start: -100000, current: -100000, result: new Array<string>() }
    );
  return [...result.slice(1), start === current ? `${current}` : `${start}-${current}`].join(', ');
};
