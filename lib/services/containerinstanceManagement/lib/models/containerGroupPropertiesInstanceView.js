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
 * The instance view of the container group. Only valid in response.
 *
 */
class ContainerGroupPropertiesInstanceView {
  /**
   * Create a ContainerGroupPropertiesInstanceView.
   * @member {array} [events] The events of this container group.
   * @member {string} [state] The state of the container group. Only valid in
   * response.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ContainerGroupPropertiesInstanceView
   *
   * @returns {object} metadata of ContainerGroupPropertiesInstanceView
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContainerGroup_properties_instanceView',
      type: {
        name: 'Composite',
        className: 'ContainerGroupPropertiesInstanceView',
        modelProperties: {
          events: {
            required: false,
            readOnly: true,
            serializedName: 'events',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EventElementType',
                  type: {
                    name: 'Composite',
                    className: 'Event'
                  }
              }
            }
          },
          state: {
            required: false,
            readOnly: true,
            serializedName: 'state',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ContainerGroupPropertiesInstanceView;
