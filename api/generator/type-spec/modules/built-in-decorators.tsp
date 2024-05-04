namespace Pets;

using TypeSpec.Http;

@route("/deprecated")
namespace Deprecated {
  model Result {
    valid: boolean;
  }

  #deprecated "Use ActionV2"
  op Action<Result>(): Result;

  @deprecated("非推奨デコレータのテスト")
  model DeprecatedPet {}
}

@route("/error")
namespace Error {
  @error
  model PetStoreError {
    code: string;
    message: string;
  }

  @errorsDoc("Returns doc")
  op get(): Pet; //| NotFound;
}

namespace Format {
  @format("uuid")
  scalar uuid extends string;
}

// next section: inspectType
// https://typespec.io/docs/standard-library/built-in-decorators#@inspectType
