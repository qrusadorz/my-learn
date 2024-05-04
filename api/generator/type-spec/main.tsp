import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";

import "./modules/decorator.tsp";
import "./modules/enum.tsp";
import "./modules/interface.tsp";
import "./modules/Pet.tsp";
import "./modules/template.tsp";
import "./modules/type-literal.tsp";
import "./modules/type-relation.tsp";
import "./modules/union.tsp";
import "./modules/built-in-decorators.tsp";
// import "./modules";

using TypeSpec.Http;
using TypeSpec.Rest;

/**
 * This is a sample server Petstore server.
 * https://typespec.io/docs/getting-started/getting-started-http
 */
@service({
  title: "Pet Store Service",
})
@server(
  "https://{region}.foo.com",
  "Regional endpoint",
  {
    /** Region name */
    region?: string = "westus",
  }
)
@route("/pets")
namespace Pets {
  // model Pet {
  //   @minLength(100)
  //   name: string;

  //   @minValue(0)
  //   @maxValue(100)
  //   age: int32;

  //   kind: "dog" | "cat" | "fish";
  // }
  @get
  op list(@query skip: int32, @query top: int32): {
    @statusCode statusCode: 200;
    @body pPetets: [];
  };
  // op list(@query skip?: int32, @query top?: int32): Pet[];
  // // op list(): Pet[];
  // // // or you could also use
  // // //@get op listPets(): Pet[];

  // op read(@path petId: int32): Pet;
  op read(@path petId: int32, @header ifMatch?: string): {
    @statusCode statusCode: 200;
    @header eTag: string;
    @body pet: Pet;
  } | {
    @statusCode statusCode: 404;
  };
  // op read(@path petId: int32): {
  // 	@body pet: Pet;
  // };
  @post
  op create(@body pet: Pet): {
    @statusCode statusCode: 204;
  };
  // @post
  // op create(...Pet): {};

  // @route("/pets/{petId}/toys")
  @route("/{petId}/toys")
  namespace PetToys {
    model Toy {
      name: string;
    }

    /**
     * Get a Pet list.
     * @param petId The ID of the pet to retrieve.
     */
    // op list(@path petId: int32): Toy[];
    op ReadResource<T>(@path petId: string): T;
    op readPet is ReadResource<Pets.Pet>;
  }
}
