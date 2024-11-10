/*
  18 - Length of Tuple
  -------
  by sinoon (@sinoon) #easy #tuple

  ### Question

  For given a tuple, you need create a generic `Length`, pick the length of the tuple

  For example:

  ```ts
  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

  type teslaLength = Length<tesla>  // expected 4
  type spaceXLength = Length<spaceX> // expected 5
  ```

  > View on GitHub: https://tsch.js.org/18
*/

/* _____________ Your Code Here _____________ */

type Length<T extends readonly any[]> = T['length'];

// 아래는 안 됨. 왜냐하면 readonly는 리터럴 타입에만 붙일 수 있음
// 리터럴 타입: 값 자체를 타입으로 사용하는 것
// type Length<T extends readonly Array<any>> = T['length'];

// 만약 Array를 사용하려면 다음과 같이 사용해야함
// type Length<T extends Readonly<Array<any>>> = T['length'];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const;

type cases = [
    Expect<Equal<Length<typeof tesla>, 4>>,
    Expect<Equal<Length<typeof spaceX>, 5>>,
    // @ts-expect-error
    Length<5>,
    // @ts-expect-error
    Length<'hello world'>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/18/answer
  > View solutions: https://tsch.js.org/18/solutions
  > More Challenges: https://tsch.js.org
*/
