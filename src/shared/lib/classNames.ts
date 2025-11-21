type Mods = Record<string, boolean | string>;
type ClassNames = Array<Mods | string>

export const classNamesUlbi = (cls: string, mods: Mods, additional: string[]): string => {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
    ...additional,
  ].join(' ')
}

export const classNames = (...args: ClassNames): string => {
  const stringifiedArgs: string[] = [];
  for (const arg of args) {
    if(!arg) continue;
    if(typeof arg === 'string') stringifiedArgs.push(arg);
    if(typeof arg !== 'string') {
      Object.entries(arg)
        .filter(([className, value]) => Boolean(value))
        .forEach(([className]) => stringifiedArgs.push(className));
    }
  }
  return stringifiedArgs.join(' ');
}
