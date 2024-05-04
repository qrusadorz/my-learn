/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Pet}
 */
export function createPetFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoPet;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoPet(pet: Partial<Pet> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "age": n => { pet.age = n.getNumberValue(); },
        "kind": n => { pet.kind = n.getEnumValue<Pet_kind>(Pet_kindObject); },
        "name": n => { pet.name = n.getStringValue(); },
        "PetV2": n => { pet.petV2 = n.getStringValue() ?? "123456"; },
    }
}
/**
 * Represent a Pet available in the PetStore
 */
export interface Pet extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * This is a multi-line comment /n that spans multiple lines
     */
    age?: number;
    /**
     * The kind property
     */
    kind?: Pet_kind;
    /**
     * The name property
     */
    name?: string;
    /**
     * This is a secret field
     */
    petV2?: string;
}
export type Pet_kind = (typeof Pet_kindObject)[keyof typeof Pet_kindObject];
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializePet(writer: SerializationWriter, pet: Partial<Pet> | undefined = {}) : void {
    writer.writeNumberValue("age", pet.age);
    writer.writeEnumValue<Pet_kind>("kind", pet.kind);
    writer.writeStringValue("name", pet.name);
    writer.writeStringValue("PetV2", pet.petV2 ?? "123456");
    writer.writeAdditionalData(pet.additionalData);
}
export const Pet_kindObject = {
    Dog: "dog",
    Cat: "cat",
    Fish: "fish",
} as const;
/* tslint:enable */
/* eslint-enable */