// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'e2ee545b-783f-4634-a277-e35f55c90660';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357?api-version=2017-10-12', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile4357\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '404',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '59733631-e56b-40a9-833d-ddb9dd989f37',
  'x-ms-client-request-id': 'cb5c62f4-68ce-4261-8688-ac272a75b156',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4542/providers/Microsoft.Cdn/operationresults/902b4e37-17c7-4551-8440-fea189dc11cc?api-version=2017-10-12',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '82c27fec-0bc7-4ea1-a73d-ebd018753f99',
  'x-ms-routing-request-id': 'WESTUS2:20180226T200340Z:82c27fec-0bc7-4ea1-a73d-ebd018753f99',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:03:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357?api-version=2017-10-12', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile4357\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '404',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '59733631-e56b-40a9-833d-ddb9dd989f37',
  'x-ms-client-request-id': 'cb5c62f4-68ce-4261-8688-ac272a75b156',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4542/providers/Microsoft.Cdn/operationresults/902b4e37-17c7-4551-8440-fea189dc11cc?api-version=2017-10-12',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '82c27fec-0bc7-4ea1-a73d-ebd018753f99',
  'x-ms-routing-request-id': 'WESTUS2:20180226T200340Z:82c27fec-0bc7-4ea1-a73d-ebd018753f99',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:03:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4542/providers/Microsoft.Cdn/operationresults/902b4e37-17c7-4551-8440-fea189dc11cc?api-version=2017-10-12')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '4fc86702-1bcc-4c54-9bcf-a942d667e19a',
  'x-ms-client-request-id': '962d8cee-f464-4584-bf69-51e08f069af0',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '32e0230d-8cc5-4909-9e62-578b4d5fecaa',
  'x-ms-routing-request-id': 'WESTUS2:20180226T200410Z:32e0230d-8cc5-4909-9e62-578b4d5fecaa',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:04:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4542/providers/Microsoft.Cdn/operationresults/902b4e37-17c7-4551-8440-fea189dc11cc?api-version=2017-10-12')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '4fc86702-1bcc-4c54-9bcf-a942d667e19a',
  'x-ms-client-request-id': '962d8cee-f464-4584-bf69-51e08f069af0',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '32e0230d-8cc5-4909-9e62-578b4d5fecaa',
  'x-ms-routing-request-id': 'WESTUS2:20180226T200410Z:32e0230d-8cc5-4909-9e62-578b4d5fecaa',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:04:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357?api-version=2017-10-12')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile4357\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '403',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '351bbda7-a8fd-4ce2-bc04-4e8df7e20ceb',
  'x-ms-client-request-id': 'b349a1cc-06a6-49d4-bc5e-40e2bb590eb6',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '66f7b377-c80d-46bc-8889-935e1651858e',
  'x-ms-routing-request-id': 'WESTUS2:20180226T200411Z:66f7b377-c80d-46bc-8889-935e1651858e',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:04:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357?api-version=2017-10-12')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile4357\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '403',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '351bbda7-a8fd-4ce2-bc04-4e8df7e20ceb',
  'x-ms-client-request-id': 'b349a1cc-06a6-49d4-bc5e-40e2bb590eb6',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '66f7b377-c80d-46bc-8889-935e1651858e',
  'x-ms-routing-request-id': 'WESTUS2:20180226T200411Z:66f7b377-c80d-46bc-8889-935e1651858e',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:04:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8?api-version=2017-10-12', '*')
  .reply(201, "{\r\n  \"name\":\"testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"probePath\":null,\"geoFilters\":[\r\n      \r\n    ],\"deliveryPolicy\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1023',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '2f626f50-f954-45f2-a04c-a0d63b436f6d',
  'x-ms-client-request-id': '776bd3ca-424c-4149-84cf-f8c64735fbd1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4542/providers/Microsoft.Cdn/operationresults/a688bd22-b13f-48dd-b7db-a841ee04e283?api-version=2017-10-12',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '7f28e2f8-115d-41d8-8c93-7c010c137fe5',
  'x-ms-routing-request-id': 'WESTUS2:20180226T200413Z:7f28e2f8-115d-41d8-8c93-7c010c137fe5',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:04:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8?api-version=2017-10-12', '*')
  .reply(201, "{\r\n  \"name\":\"testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"probePath\":null,\"geoFilters\":[\r\n      \r\n    ],\"deliveryPolicy\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1023',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '2f626f50-f954-45f2-a04c-a0d63b436f6d',
  'x-ms-client-request-id': '776bd3ca-424c-4149-84cf-f8c64735fbd1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4542/providers/Microsoft.Cdn/operationresults/a688bd22-b13f-48dd-b7db-a841ee04e283?api-version=2017-10-12',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '7f28e2f8-115d-41d8-8c93-7c010c137fe5',
  'x-ms-routing-request-id': 'WESTUS2:20180226T200413Z:7f28e2f8-115d-41d8-8c93-7c010c137fe5',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:04:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4542/providers/Microsoft.Cdn/operationresults/a688bd22-b13f-48dd-b7db-a841ee04e283?api-version=2017-10-12')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '65ae68ee-431e-49e4-a844-eef6edc209bd',
  'x-ms-client-request-id': 'c8a39ea7-5290-4a6c-8495-708e2ba555ab',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '1f9970b0-a11b-49a9-9647-3fee5ace0216',
  'x-ms-routing-request-id': 'WESTUS2:20180226T200443Z:1f9970b0-a11b-49a9-9647-3fee5ace0216',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:04:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4542/providers/Microsoft.Cdn/operationresults/a688bd22-b13f-48dd-b7db-a841ee04e283?api-version=2017-10-12')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '65ae68ee-431e-49e4-a844-eef6edc209bd',
  'x-ms-client-request-id': 'c8a39ea7-5290-4a6c-8495-708e2ba555ab',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '1f9970b0-a11b-49a9-9647-3fee5ace0216',
  'x-ms-routing-request-id': 'WESTUS2:20180226T200443Z:1f9970b0-a11b-49a9-9647-3fee5ace0216',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:04:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8?api-version=2017-10-12')
  .reply(200, "{\r\n  \"name\":\"testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"probePath\":null,\"geoFilters\":[\r\n      \r\n    ],\"deliveryPolicy\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1023',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '556b583b-7927-4024-90f2-84839af5182e',
  'x-ms-client-request-id': 'cba01b95-2467-464a-b38d-a8854c4c797a',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '9786a84c-8fd3-41e9-b33c-b1e5f7ae2f28',
  'x-ms-routing-request-id': 'WESTUS2:20180226T200444Z:9786a84c-8fd3-41e9-b33c-b1e5f7ae2f28',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:04:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8?api-version=2017-10-12')
  .reply(200, "{\r\n  \"name\":\"testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"probePath\":null,\"geoFilters\":[\r\n      \r\n    ],\"deliveryPolicy\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1023',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '556b583b-7927-4024-90f2-84839af5182e',
  'x-ms-client-request-id': 'cba01b95-2467-464a-b38d-a8854c4c797a',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '9786a84c-8fd3-41e9-b33c-b1e5f7ae2f28',
  'x-ms-routing-request-id': 'WESTUS2:20180226T200444Z:9786a84c-8fd3-41e9-b33c-b1e5f7ae2f28',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:04:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customDomains?api-version=2017-10-12')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '07c6b82e-d423-4a70-9592-15b57b144c78',
  'x-ms-client-request-id': '78cb2cb4-0029-4c98-820c-e5bd19b9b761',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '29439ddb-833f-4a7e-bb51-f509aca3d6fd',
  'x-ms-routing-request-id': 'WESTUS2:20180226T200444Z:29439ddb-833f-4a7e-bb51-f509aca3d6fd',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:04:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup4542/providers/Microsoft.Cdn/profiles/cdnTestProfile4357/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customDomains?api-version=2017-10-12')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '07c6b82e-d423-4a70-9592-15b57b144c78',
  'x-ms-client-request-id': '78cb2cb4-0029-4c98-820c-e5bd19b9b761',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '29439ddb-833f-4a7e-bb51-f509aca3d6fd',
  'x-ms-routing-request-id': 'WESTUS2:20180226T200444Z:29439ddb-833f-4a7e-bb51-f509aca3d6fd',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:04:44 GMT',
  connection: 'close' });
 return result; }]];