namespace Pets;

namespace PropetyType {
  model T {
    foo: string;
    bar: int32;
  }

  // Valid

  model S1 { // When properties types are the exact same
    foo: string;
    bar: int32;
  }
  model S2 { // When the properties types are literal assignable to the target type
    foo: "abc";
    bar: 123;
  }
  model S3 {
    foo: string;
    bar: int8; // int8 is assignable to int16
  }
  model S4 {
    foo: string;
    bar: int32;
    otherProp: boolean; // Additional properties are valid.
  }

  // Invalid
  model S5 { // Missing property bar
    foo: string;
  }
  model S6 {
    foo: string;
    bar: int64; // int64 is NOT assignable to int32
  }
}

namespace RecordType {
  // Represent an object where all the values are int32.
  alias T = Record<int32>;

  // Valid
  alias S1 = {
    foo: 123;
    bar: 345;
  };
  alias S2 = {
    foo: int8;
    bar: int32;
  };
  model S3 is Record<int32>;
  model S4 is Record<int32> {
    foo: 123;
  }

  // Invalid
  alias S5 = {
    foo: "abc";
    bar: 456;
  };
  alias S6 = {
    foo: int64;
    bar: int32;
  };
  model S7 {
    foo: 123;
    bar: 456;
  }
}
