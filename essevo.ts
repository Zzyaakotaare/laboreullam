type Partial<T> = {
  [P in keyof T]?: T[P];
};

// Usage example:
interface User {
  id: number;
  name: string;
  age: number;
}

// PartialUser type will have all properties of User as optional
type PartialUser = Partial<User>;

// Now you can create a user with some properties omitted
const user: PartialUser = {
  name: "Alice",
};
