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
 * The resource from which the rule collects its data.
 *
 */
class RuleDataSource {
  /**
   * Create a RuleDataSource.
   * @member {string} [resourceUri] the resource identifier of the resource the
   * rule monitors. **NOTE**: this property cannot be updated for an existing
   * rule.
   * @member {string} odatatype Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of RuleDataSource
   *
   * @returns {object} metadata of RuleDataSource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RuleDataSource',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'RuleDataSource',
        className: 'RuleDataSource',
        modelProperties: {
          resourceUri: {
            required: false,
            serializedName: 'resourceUri',
            type: {
              name: 'String'
            }
          },
          odatatype: {
            required: true,
            serializedName: 'odata\\.type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RuleDataSource;
