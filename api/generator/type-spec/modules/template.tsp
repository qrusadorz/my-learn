namespace Pets;

model Dog {
  type: "dog" | "cat" | "fish";
}

model Page<Item = string> {
  size: int32; // number;
  item: Item[];
}

model DogPage {
  ...Page<Dog>;
}
