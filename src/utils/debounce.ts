// const debounce = <F extends (...args: any[]) => any[]>(
//   func: F,
//   delay: number
// ) => {
//   let timer: ReturnType<typeof setTimeout>;

//   return (...args: any[]) => {
//     if (timer) {
//       clearTimeout(timer);
//     }

//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// };

export const debounce = (fn: Function, ms = 500) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
