"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithPetItemRequestBuilderRequestsMetadata = exports.WithPetItemRequestBuilderNavigationMetadata = exports.WithPetItemRequestBuilderUriTemplate = void 0;
/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
const models_1 = require("../../models/");
// @ts-ignore
const toys_1 = require("./toys/");
/**
 * Uri template for the request builder.
 */
exports.WithPetItemRequestBuilderUriTemplate = "{+baseurl}/pets/{petId}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
exports.WithPetItemRequestBuilderNavigationMetadata = {
    toys: {
        requestsMetadata: toys_1.ToysRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
exports.WithPetItemRequestBuilderRequestsMetadata = {
    get: {
        uriTemplate: exports.WithPetItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory: models_1.createPetFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
