namespace Pets {
  scalar Password extends string;

  @doc("Represent a Pet available in the PetStore")
  model Pet {
    /* This is a multi-line comment 
	that spans multiple lines */
    @minLength(100)
    name: string;

    /**
     * This is a multi-line comment \n that spans multiple lines
     */
    @minValue(0)
    @maxValue(100)
    age: int32;

    kind: "dog" | "cat" | "fish";

    /** This is a secret field */
    @encodedName("application/json", "PetV2")
    secret?: Password = "123456";
  }

  model HasHome {
    address: string;
  }

  model Cat is Pet {
    meow: boolean;
    ...HasHome;
    furColor: string;
  }
}
