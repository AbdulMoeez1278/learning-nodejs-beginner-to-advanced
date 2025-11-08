const helloUser = (name: string): string => {
    return name;
};

console.log(helloUser("Abdul Moeez"));

// using template literal
const greet = (name: string): string => {
    return `Hello, ${name}!`;
};

console.log(greet("Abdul Moeez"));

// condition base - returns age as well
const greetSecond = (name: string, age: number): string | number => {
    if (age < 18) {
        return `Hi ${name}, you’re too young!`;
    }
    return age; // returns number
};

console.log(greetSecond("Moizy", 23));

// condition base - does'nt return age as well
const greetUser = (name: string, age: number): string | number => {
    if (age < 18) {
        return `Hi ${name}, you’re too young!`;
    } else if (age > 18) {
        return `Hi ${name}, you've grown up!`;
    }
    return age; // returns number
};

console.log(greetUser("Abdul Moeez", 23));
