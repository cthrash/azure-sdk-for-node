// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'e2ee545b-783f-4634-a277-e35f55c90660';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup7330/providers/Microsoft.Cdn/profiles/cdnTestProfile2232?api-version=2017-10-12', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile2232\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup7330/providers/Microsoft.Cdn/profiles/cdnTestProfile2232\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '404',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '8eb6e9f2-6c90-44f5-b5a0-a0a16d45e11d',
  'x-ms-client-request-id': '4ca14040-417c-4e9f-9133-1caf3ff74444',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup7330/providers/Microsoft.Cdn/operationresults/ce6e2ea0-3d90-422a-aada-086856cd6676?api-version=2017-10-12',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '08c99ef3-b6e9-4187-a0ae-ebec60450bf0',
  'x-ms-routing-request-id': 'WESTUS2:20180226T193557Z:08c99ef3-b6e9-4187-a0ae-ebec60450bf0',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 19:35:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup7330/providers/Microsoft.Cdn/profiles/cdnTestProfile2232?api-version=2017-10-12', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile2232\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup7330/providers/Microsoft.Cdn/profiles/cdnTestProfile2232\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '404',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '8eb6e9f2-6c90-44f5-b5a0-a0a16d45e11d',
  'x-ms-client-request-id': '4ca14040-417c-4e9f-9133-1caf3ff74444',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup7330/providers/Microsoft.Cdn/operationresults/ce6e2ea0-3d90-422a-aada-086856cd6676?api-version=2017-10-12',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '08c99ef3-b6e9-4187-a0ae-ebec60450bf0',
  'x-ms-routing-request-id': 'WESTUS2:20180226T193557Z:08c99ef3-b6e9-4187-a0ae-ebec60450bf0',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 19:35:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup7330/providers/Microsoft.Cdn/operationresults/ce6e2ea0-3d90-422a-aada-086856cd6676?api-version=2017-10-12')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'f2f9a94f-c24d-4ef1-afd6-1d697f0d81c9',
  'x-ms-client-request-id': '57daed24-6d49-497b-874a-a2bdc4e021a1',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '921da35e-0b5a-444b-9958-81fab195fba0',
  'x-ms-routing-request-id': 'WESTUS2:20180226T193627Z:921da35e-0b5a-444b-9958-81fab195fba0',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 19:36:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup7330/providers/Microsoft.Cdn/operationresults/ce6e2ea0-3d90-422a-aada-086856cd6676?api-version=2017-10-12')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'f2f9a94f-c24d-4ef1-afd6-1d697f0d81c9',
  'x-ms-client-request-id': '57daed24-6d49-497b-874a-a2bdc4e021a1',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '921da35e-0b5a-444b-9958-81fab195fba0',
  'x-ms-routing-request-id': 'WESTUS2:20180226T193627Z:921da35e-0b5a-444b-9958-81fab195fba0',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 19:36:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup7330/providers/Microsoft.Cdn/profiles/cdnTestProfile2232?api-version=2017-10-12')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile2232\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup7330/providers/Microsoft.Cdn/profiles/cdnTestProfile2232\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '403',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '40d9b2d4-4d61-4a1f-bc79-71d6f2b1d95e',
  'x-ms-client-request-id': '0dfff430-f94a-403e-9b11-426961dba725',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '90f196ec-196c-431c-890e-614bf498a19c',
  'x-ms-routing-request-id': 'WESTUS2:20180226T193628Z:90f196ec-196c-431c-890e-614bf498a19c',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 19:36:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup7330/providers/Microsoft.Cdn/profiles/cdnTestProfile2232?api-version=2017-10-12')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile2232\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup7330/providers/Microsoft.Cdn/profiles/cdnTestProfile2232\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '403',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '40d9b2d4-4d61-4a1f-bc79-71d6f2b1d95e',
  'x-ms-client-request-id': '0dfff430-f94a-403e-9b11-426961dba725',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '90f196ec-196c-431c-890e-614bf498a19c',
  'x-ms-routing-request-id': 'WESTUS2:20180226T193628Z:90f196ec-196c-431c-890e-614bf498a19c',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 19:36:28 GMT',
  connection: 'close' });
 return result; }]];