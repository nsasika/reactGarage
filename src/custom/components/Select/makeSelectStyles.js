import { css } from '@styled-system/css';

export const makeSelectStyles = (...styleObjects) => theme => {
  const fn = (...args) => (provided, state) => {
    const custom = args.reduce((result, arg) => {
      const x = typeof arg === 'function' ? arg(state) : arg;
      const val = css(x)(theme);
      return Object.assign(result, val);
    }, {});
    return {
      ...provided,
      ...custom,
    };
  };

  const allStyles = styleObjects.reduce((acc, obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(value);
    });
    return acc;
  }, {});

  return Object.entries(allStyles).reduce((finalResult, [componentName, componentStylesArray]) => {
    finalResult[componentName] = fn(...componentStylesArray);
    return finalResult;
  }, {});
};
