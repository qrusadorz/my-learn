namespace Pets;

enum Direction {
  //   North,
  //   East,
  //   South,
  //   West,
  North: "north",

  East: "east",
  South: "south",
  West: "west",
}

enum DirectionExt {
  ...Direction,
  `North East`,
  `North West`,
  `South East`,
  `South West`,
}

alias North = Direction.North;
