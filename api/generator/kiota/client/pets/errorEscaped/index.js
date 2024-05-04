"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorRequestBuilderRequestsMetadata = exports.ErrorRequestBuilderUriTemplate = void 0;
/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
const models_1 = require("../../models/");
/**
 * Uri template for the request builder.
 */
exports.ErrorRequestBuilderUriTemplate = "{+baseurl}/pets/error";
/**
 * Metadata for all the requests in the request builder.
 */
exports.ErrorRequestBuilderRequestsMetadata = {
    get: {
        uriTemplate: exports.ErrorRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory: models_1.createPetFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */