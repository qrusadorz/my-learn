// import "@typespec/http";
// import "@typespec/rest";
// import "@typespec/openapi3";

// using TypeSpec.Http;
// using TypeSpec.Rest;
// using TypeSpec.Reflection;

namespace Pets {
  @@tag(Pets, "");
  model Thing<T> {
    property: T;
  }

  model StringThing is Thing<string>;

  // // The StringThing declaration is equivalent to the following declaration:
  // @decorator
  // model StringThing {
  //   property: string;
  // }
}
