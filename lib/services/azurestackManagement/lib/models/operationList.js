/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * List of Operations
 */
class OperationList extends Array {
  /**
   * Create a OperationList.
   * @member {string} [nextLink] URI to the next page of operations.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of OperationList
   *
   * @returns {object} metadata of OperationList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OperationList',
      type: {
        name: 'Composite',
        className: 'OperationList',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'OperationElementType',
                  type: {
                    name: 'Composite',
                    className: 'Operation'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OperationList;