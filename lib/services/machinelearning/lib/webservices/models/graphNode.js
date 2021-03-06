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

const models = require('./index');

/**
 * Specifies a node in the web service graph. The node can either be an input,
 * output or asset node, so only one of the corresponding id properties is
 * populated at any given time.
 *
 */
class GraphNode {
  /**
   * Create a GraphNode.
   * @member {string} [assetId] The id of the asset represented by this node.
   * @member {string} [inputId] The id of the input element represented by this
   * node.
   * @member {string} [outputId] The id of the output element represented by
   * this node.
   * @member {object} [parameters] If applicable, parameters of the node.
   * Global graph parameters map into these, with values set at runtime.
   */
  constructor() {
  }

  /**
   * Defines the metadata of GraphNode
   *
   * @returns {object} metadata of GraphNode
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GraphNode',
      type: {
        name: 'Composite',
        className: 'GraphNode',
        modelProperties: {
          assetId: {
            required: false,
            serializedName: 'assetId',
            type: {
              name: 'String'
            }
          },
          inputId: {
            required: false,
            serializedName: 'inputId',
            type: {
              name: 'String'
            }
          },
          outputId: {
            required: false,
            serializedName: 'outputId',
            type: {
              name: 'String'
            }
          },
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'WebServiceParameterElementType',
                  type: {
                    name: 'Composite',
                    className: 'WebServiceParameter'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GraphNode;
