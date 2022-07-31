// bem规范
// b block 代码块
// e element 元素
// m modifiler 装饰
// w-button__element--disabled
// is-checked is-enabled

/**
 *
 * @param prefixName 前置
 * @param block 代码块
 * @param element 元素
 * @param modifiler 修饰
 */
function _bem(prefixName: string, blockSuffix: string, element: string, modifiler: string) {
  if (blockSuffix) {
    prefixName += `-${blockSuffix}`;
  }
  if (element) {
    prefixName += `__${element}`;
  }

  if (modifiler) {
    prefixName += `--${modifiler}`;
  }
  return prefixName;
}

function createBEM(prefixName: string) {
  const b = (blockSuffix: string = '') => _bem(prefixName, blockSuffix, '', '');
  const e = (element: string) => (element ? _bem(prefixName, '', element, '') : '');
  const m = (modifiler: string) => (modifiler ? _bem(prefixName, '', '', modifiler) : '');
  const bm = (blockSuffix: string, modifiler: string) =>
    blockSuffix && modifiler ? _bem(prefixName, blockSuffix, '', modifiler) : '';
  const be = (blockSuffix: string, element: string) =>
    blockSuffix && element ? _bem(prefixName, blockSuffix, element, '') : '';
  const em = (element: string, modifiler: string) =>
    element && modifiler ? _bem(prefixName, '', element, modifiler) : '';
  const bem = (blockSuffix: string, element: string, modifiler: string) =>
    blockSuffix && element && modifiler ? _bem(prefixName, blockSuffix, element, modifiler) : '';
  const is = (name: string, state: boolean) => (state ? `is-${name}` : '');
  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is,
  };
}

export function createNamespace(name: string) {
  const prefixName = `w-${name}`;

  return createBEM(prefixName);
}
/*
const bem = createNamespace('button');

console.log(bem.b('button'));
console.log(bem.e('element'));
console.log(bem.m('modifiler'));
console.log(bem.is('check', false));
*/
