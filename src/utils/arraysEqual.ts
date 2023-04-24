export const arraysEqual = <T>(arr1: Array<T>, arr2: Array<T>): boolean =>
  JSON.stringify(arr1) === JSON.stringify(arr2);
