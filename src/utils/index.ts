type ClassName = string | undefined | null;
type Classes = (ClassName | [boolean, ClassName, ClassName?])[];

export function createNamespace(name: string) {
  const namespace = `v-${name}`;

  const BEM = (suffix?: string) => {
    if (!suffix) return namespace;

    return suffix.startsWith('--') ? `${namespace}${suffix}` : `${namespace}__${suffix}`;
  };

  const classes = (...classes: Classes) => {
    return classes.map((className) => {
      if (Array.isArray(className)) {
        const [condition, truthy, falsy = null] = className;
        return condition ? truthy : falsy;
      }

      return className;
    });
  };

  return {
    BEM,
    classes,
  };
}
