/*--------------------------------------------------
              PROPERTY DECORATORS
 ---------------------------------------------------*/
export function listable(target: any, key: string) {
  if (Reflect.has(target, 'listable')) {
    Reflect.get(target, 'listable').push(key);
  } else {
    Reflect.defineProperty(target, 'listable', {value: [key]});
  }
}

export function category(categoryName: string) {
  return function setGroup(target: any, key: string) {
    let existCategory = false;
    if (Reflect.has(target, 'categories')) {
      Reflect.get(target, 'categories').forEach(function (categoryItem) {
        if (categoryItem === categoryName) {
          existCategory = true;
        }
      });
      if (existCategory) {
        Reflect.get(target, categoryName).push(key);
      } else {
        Reflect.get(target, 'categories').push(categoryName);
        Reflect.defineProperty(target, categoryName, {value: [key]});
      }
    } else {
      Reflect.defineProperty(target, 'categories', {value: [categoryName]});
      Reflect.defineProperty(target, categoryName, {value: [key]})
    }
  }
}
