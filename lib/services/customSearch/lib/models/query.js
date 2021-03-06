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
 * Defines a search query.
 *
 */
class Query {
  /**
   * Create a Query.
   * @member {string} text The query string. Use this string as the query term
   * in a new search request.
   * @member {string} [displayText] The display version of the query term. This
   * version of the query term may contain special characters that highlight
   * the search term found in the query string. The string contains the
   * highlighting characters only if the query enabled hit highlighting
   * @member {string} [webSearchUrl] The URL that takes the user to the Bing
   * search results page for the query.Only related search results include this
   * field.
   * @member {string} [searchLink]
   */
  constructor() {
  }

  /**
   * Defines the metadata of Query
   *
   * @returns {object} metadata of Query
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Query',
      type: {
        name: 'Composite',
        className: 'Query',
        modelProperties: {
          text: {
            required: true,
            serializedName: 'text',
            type: {
              name: 'String'
            }
          },
          displayText: {
            required: false,
            readOnly: true,
            serializedName: 'displayText',
            type: {
              name: 'String'
            }
          },
          webSearchUrl: {
            required: false,
            readOnly: true,
            serializedName: 'webSearchUrl',
            type: {
              name: 'String'
            }
          },
          searchLink: {
            required: false,
            readOnly: true,
            serializedName: 'searchLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Query;
