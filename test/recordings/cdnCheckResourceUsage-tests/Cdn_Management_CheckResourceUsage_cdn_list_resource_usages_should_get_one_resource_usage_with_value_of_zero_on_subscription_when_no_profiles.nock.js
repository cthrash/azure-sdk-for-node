// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'e2ee545b-783f-4634-a277-e35f55c90660';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/providers/Microsoft.Cdn/checkResourceUsage?api-version=2017-10-12')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"resourceType\":\"profile\",\"unit\":\"count\",\"currentValue\":0,\"limit\":25\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '111',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': '2424a9bb-a5d5-4799-8a37-91795f0fc031',
  'x-ms-client-request-id': '15ee731a-f07f-4e50-924a-8fcbf81b4d06',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '4ae87bc8-09e4-42f6-9577-e83b4269e224',
  'x-ms-routing-request-id': 'WESTUS2:20180226T202758Z:4ae87bc8-09e4-42f6-9577-e83b4269e224',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:27:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/providers/Microsoft.Cdn/checkResourceUsage?api-version=2017-10-12')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"resourceType\":\"profile\",\"unit\":\"count\",\"currentValue\":0,\"limit\":25\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '111',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': '2424a9bb-a5d5-4799-8a37-91795f0fc031',
  'x-ms-client-request-id': '15ee731a-f07f-4e50-924a-8fcbf81b4d06',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '4ae87bc8-09e4-42f6-9577-e83b4269e224',
  'x-ms-routing-request-id': 'WESTUS2:20180226T202758Z:4ae87bc8-09e4-42f6-9577-e83b4269e224',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:27:57 GMT',
  connection: 'close' });
 return result; }]];