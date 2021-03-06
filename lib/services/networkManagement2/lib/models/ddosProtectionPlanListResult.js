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
 * A list of DDoS protection plans.
 */
class DdosProtectionPlanListResult extends Array {
  /**
   * Create a DdosProtectionPlanListResult.
   * @member {string} [nextLink] The URL to get the next set of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DdosProtectionPlanListResult
   *
   * @returns {object} metadata of DdosProtectionPlanListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DdosProtectionPlanListResult',
      type: {
        name: 'Composite',
        className: 'DdosProtectionPlanListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DdosProtectionPlanElementType',
                  type: {
                    name: 'Composite',
                    className: 'DdosProtectionPlan'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
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

module.exports = DdosProtectionPlanListResult;
