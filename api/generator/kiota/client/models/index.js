"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet_kindObject = exports.serializePet = exports.deserializeIntoPet = exports.createPetFromDiscriminatorValue = void 0;
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Pet}
 */
function createPetFromDiscriminatorValue(parseNode) {
    return deserializeIntoPet;
}
exports.createPetFromDiscriminatorValue = createPetFromDiscriminatorValue;
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
function deserializeIntoPet(pet = {}) {
    return {
        "age": n => { pet.age = n.getNumberValue(); },
        "kind": n => { pet.kind = n.getEnumValue(exports.Pet_kindObject); },
        "name": n => { pet.name = n.getStringValue(); },
        "PetV2": n => { var _a; pet.petV2 = (_a = n.getStringValue()) !== null && _a !== void 0 ? _a : "123456"; },
    };
}
exports.deserializeIntoPet = deserializeIntoPet;
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
function serializePet(writer, pet = {}) {
    var _a;
    writer.writeNumberValue("age", pet.age);
    writer.writeEnumValue("kind", pet.kind);
    writer.writeStringValue("name", pet.name);
    writer.writeStringValue("PetV2", (_a = pet.petV2) !== null && _a !== void 0 ? _a : "123456");
    writer.writeAdditionalData(pet.additionalData);
}
exports.serializePet = serializePet;
exports.Pet_kindObject = {
    Dog: "dog",
    Cat: "cat",
    Fish: "fish",
};
/* tslint:enable */
/* eslint-enable */
