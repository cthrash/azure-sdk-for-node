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
 * Linux specific update configuration.
 *
 */
class LinuxProperties {
  /**
   * Create a LinuxProperties.
   * @member {string} [includedPackageClassifications] Update classifications
   * included in the software update configuration. Possible values include:
   * 'Unclassified', 'Critical', 'Security', 'Other'
   * @member {array} [excludedPackageNameMasks] packages excluded from the
   * software update configuration.
   */
  constructor() {
  }

  /**
   * Defines the metadata of LinuxProperties
   *
   * @returns {object} metadata of LinuxProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LinuxProperties',
      type: {
        name: 'Composite',
        className: 'LinuxProperties',
        modelProperties: {
          includedPackageClassifications: {
            required: false,
            serializedName: 'includedPackageClassifications',
            type: {
              name: 'String'
            }
          },
          excludedPackageNameMasks: {
            required: false,
            serializedName: 'excludedPackageNameMasks',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = LinuxProperties;
