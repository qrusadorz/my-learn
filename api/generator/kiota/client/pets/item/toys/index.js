"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToysRequestBuilderRequestsMetadata = exports.ToysRequestBuilderUriTemplate = void 0;
/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
const models_1 = require("../../../models/");
/**
 * Uri template for the request builder.
 */
exports.ToysRequestBuilderUriTemplate = "{+baseurl}/pets/{petId}/toys";
/**
 * Metadata for all the requests in the request builder.
 */
exports.ToysRequestBuilderRequestsMetadata = {
    get: {
        uriTemplate: exports.ToysRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory: models_1.createPetFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */