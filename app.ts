/*  
  Служебные типы

  Awaited - представлен в 4.5
*/

type A = Awaited<Promise<string>>; //type A = string
type A2 = Awaited<Promise<Promise<string>>>

/* Реализация под капотом

  type Awaited<T> =
    T extends null | undefined ? T : // special case for `null | undefined` when not in `--strictNullChecks` mode
        T extends object & { then(onfulfilled: infer F, ...args: infer _): any } ? // `await` only unwraps object types with a callable `then`. Non-object types are not unwrapped
            F extends ((value: infer V, ...args: infer _) => any) ? // if the argument to `then` is callable, extracts the first argument
                Awaited<V> : // recursively unwrap the value
                never : // the argument to `then` was not callable
        T; // non-object or non-thenable


*/

/* Кейсы */
interface IMenu {
  name: string;
  url: string;
}

async function getMenu(): Promise<IMenu[]> {
  return [{ name: 'Аналитика', url: 'analytics'}];
}

type R = ReturnType<typeof getMenu>; //type R = Promise<IMenu[]>
type R2 = Awaited<ReturnType<typeof getMenu>>; //type R = IMenu[]

/* Читабельность типов */

/* x - какая то функция, которую можем эвейтить */
async function getArra<T>(x:T): Promise<Awaited<T>[]> {
  return [await x];
}

/* старая типизация */
async function getArra2<T>(x:T): Promise<T[]> {
  return [await x];
}