// import { expectType } from "tsd";
import { Expect, Equal } from "@total-typescript/helpers";

// Basic Annotations
// 1. Basic Types with Function Parameters

const add = (a: number, b: number) => { // Changed the type of a and b to number
    return a + b; // Error: Operator '+' cannot be applied to types 'boolean' and 'boolean'.
};

const result = add(1, 2); // Error: Argument of type 'number' is not assignable to parameter of type 'boolean'.

type test = Expect<Equal<typeof result, number>>;

// 2. Annotating Empty Parameters

const concatTwoStrings = (a: string, b: string) => {
    return [a, b].join(" ");
}

const result2 = concatTwoStrings("Hello", "World");

type test2 = Expect<Equal<typeof result2, string>>;

// 3. The Basic Types

export let example1: string = "Hello World!";
export let example2: number = 42; // Error: Type 'number' is not assignable to type 'string'.
export let example3: boolean = true; // Error: Type 'boolean' is not assignable to type 'string'.
export let example4: symbol = Symbol(); // Error: Type 'symbol' is not assignable to type 'string'.
export let example5: bigint = BigInt(123); // Error: Type 'bigint' is not assignable to type 'string'.

// 4. The any Type
export const handleFormData = (e: any) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const value = Object.fromEntries(data.entries());

    return value;
};


// Object Literal Types
// 1. Object Literal Types

export const concatName = (user: { first: string, last: string }) => {
    return `${user.first} ${user.last}`;
};


// 2. Optional Property Types
const concatName2 = (user2: { firstName: string; lastName?: string }) => {
    if (!user2.lastName) {
        return user2.firstName;
    }

    return `${user2.firstName} ${user2.lastName}`;
};

const result3 = concatName2({
    firstName: "John",
});

// Typing Functions

// 1. Optional Function Parameters
const concatName3 = (firsT: string, lasT?: string) => {
    if (!lasT) {
        return firsT;
    }

    return `${firsT} ${lasT}`;
};

const result4 = concatName3("John", "Doe");
const result5 = concatName3("John");


// 2. Default Function Parameters
export const concatName4 = (firST: string, laST: string = "Pocock"): string => {
    if (!laST) {
        return firST;
    }
    return `${firST} ${laST}`;
};


// export const concatName4 = (firST: string, laST: string= "Pocock"):string => {
//     if (!laST) {
//         return firST;
//     }

//     return `${firST} ${laST}`;
// };

// 3. Rest Parameters
export function concatenate(...strings: string[]) {
    return strings.join("");
}

// 4. Function Types
type User = {
    id: string;
    name: string;
}

const modifyUser = (user3: User[], id: string, makeChange: (user: User) => User) => {
    return user3.map((u) => {
        if (u.id === id) {
            return makeChange(u);
        }

        return u;
    });
}

const users: User[] = [
    { id: "1", name: "John" },
    { id: "2", name: "Jane" },
];

modifyUser(users, "1", (user) => {
    return { ...user, name: "Waqas" };
});

// modifyUser(
//     users,
//     "1",
//     // @ts-expect-error
//     (user) => {
//       return { ...user, name: 123 };
//     },
// );

// 5. Function Returning void
const addClickEventListener = (listener: (this: Document, ev: MouseEvent) => any) => {
    document.addEventListener("click", listener);
};

addClickEventListener(() => {
    console.log("Clicked!");
});

addClickEventListener(() => {
    "abc";
});

// 6. void vs undefined
const acceptsCallback = (callback: () => undefined) => {
    callback();
};

const returnUndefined = () => {
    return undefined;
};

acceptsCallback(returnUndefined);

// 7. Typing Async Functions
async function fetchData() {
    const response = await fetch("https://api.example.com/data");

    const data = await response.json();

    return data;
}

const example = async () => {
    const data: number = await fetchData();

    
    type test = Expect<Equal<typeof data, number>>;
};