// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup8531/providers/Microsoft.Cdn/profiles/cdnTestProfile6538/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/stop?api-version=2015-06-01')
  .reply(202, "{\r\n  \"hostName\":\"testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopping\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '500',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup8531/providers/Microsoft.Cdn/operationresults/87c01dbe-89f5-4413-829f-adc89e6f8c47/profileresults/cdnTestProfile6538/endpointresults/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': 'fe1491ac-c910-4007-bd76-246c6e136c73',
  'x-ms-client-request-id': '4f4497f8-f57e-499e-a0a4-1d62643f3171',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup8531/providers/Microsoft.Cdn/operationresults/87c01dbe-89f5-4413-829f-adc89e6f8c47?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'eea17328-1074-473b-86f7-95f51fcbbb6e',
  'x-ms-routing-request-id': 'WESTUS:20160302T224827Z:eea17328-1074-473b-86f7-95f51fcbbb6e',
  date: 'Wed, 02 Mar 2016 22:48:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup8531/providers/Microsoft.Cdn/profiles/cdnTestProfile6538/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/stop?api-version=2015-06-01')
  .reply(202, "{\r\n  \"hostName\":\"testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopping\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '500',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup8531/providers/Microsoft.Cdn/operationresults/87c01dbe-89f5-4413-829f-adc89e6f8c47/profileresults/cdnTestProfile6538/endpointresults/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': 'fe1491ac-c910-4007-bd76-246c6e136c73',
  'x-ms-client-request-id': '4f4497f8-f57e-499e-a0a4-1d62643f3171',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup8531/providers/Microsoft.Cdn/operationresults/87c01dbe-89f5-4413-829f-adc89e6f8c47?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'eea17328-1074-473b-86f7-95f51fcbbb6e',
  'x-ms-routing-request-id': 'WESTUS:20160302T224827Z:eea17328-1074-473b-86f7-95f51fcbbb6e',
  date: 'Wed, 02 Mar 2016 22:48:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup8531/providers/Microsoft.Cdn/operationresults/87c01dbe-89f5-4413-829f-adc89e6f8c47?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '98185659-b6c5-435c-830e-8ad4bf4c1a3b',
  'x-ms-client-request-id': '5f801b5d-b3b8-4bc5-9277-f3f8d58569c7',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '2c15b540-5d9a-4ef6-861a-c784d3f30409',
  'x-ms-routing-request-id': 'WESTUS:20160302T224858Z:2c15b540-5d9a-4ef6-861a-c784d3f30409',
  date: 'Wed, 02 Mar 2016 22:48:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup8531/providers/Microsoft.Cdn/operationresults/87c01dbe-89f5-4413-829f-adc89e6f8c47?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '98185659-b6c5-435c-830e-8ad4bf4c1a3b',
  'x-ms-client-request-id': '5f801b5d-b3b8-4bc5-9277-f3f8d58569c7',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '2c15b540-5d9a-4ef6-861a-c784d3f30409',
  'x-ms-routing-request-id': 'WESTUS:20160302T224858Z:2c15b540-5d9a-4ef6-861a-c784d3f30409',
  date: 'Wed, 02 Mar 2016 22:48:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup8531/providers/Microsoft.Cdn/profiles/cdnTestProfile6538/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customDomains/cdnTestCustomDomain5269?api-version=2015-06-01', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestCustomDomain5269\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup8531/providers/Microsoft.Cdn/profiles/cdnTestProfile6538/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customdomains/cdnTestCustomDomain5269\",\"type\":\"Microsoft.Cdn/profiles/endpoints/customdomains\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"sdk-2-1a5f6171-364f-49c5-9e09-27d07dac882b.azureedge-test.net\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '494',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': '519f8d29-6556-4c5b-93e8-ed686a855e0f',
  'x-ms-client-request-id': '56e80c5d-feca-4486-9105-23f14838f1c2',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'da8e1bd7-5d98-4e5d-a780-1d1301011561',
  'x-ms-routing-request-id': 'WESTUS:20160302T224900Z:da8e1bd7-5d98-4e5d-a780-1d1301011561',
  date: 'Wed, 02 Mar 2016 22:48:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup8531/providers/Microsoft.Cdn/profiles/cdnTestProfile6538/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customDomains/cdnTestCustomDomain5269?api-version=2015-06-01', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestCustomDomain5269\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup8531/providers/Microsoft.Cdn/profiles/cdnTestProfile6538/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customdomains/cdnTestCustomDomain5269\",\"type\":\"Microsoft.Cdn/profiles/endpoints/customdomains\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"sdk-2-1a5f6171-364f-49c5-9e09-27d07dac882b.azureedge-test.net\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '494',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': '519f8d29-6556-4c5b-93e8-ed686a855e0f',
  'x-ms-client-request-id': '56e80c5d-feca-4486-9105-23f14838f1c2',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'da8e1bd7-5d98-4e5d-a780-1d1301011561',
  'x-ms-routing-request-id': 'WESTUS:20160302T224900Z:da8e1bd7-5d98-4e5d-a780-1d1301011561',
  date: 'Wed, 02 Mar 2016 22:48:59 GMT',
  connection: 'close' });
 return result; }]];