// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup8531/providers/Microsoft.Cdn/profiles/cdnTestProfile6538/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customDomains?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'b1239f3f-ee14-455a-86fc-694e3280dde6',
  'x-ms-client-request-id': '2b820993-4f32-46da-94c9-347f297980a9',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '5fbec894-905c-4439-ba09-4dffce175735',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T225012Z:5fbec894-905c-4439-ba09-4dffce175735',
  date: 'Wed, 02 Mar 2016 22:50:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup8531/providers/Microsoft.Cdn/profiles/cdnTestProfile6538/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customDomains?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'b1239f3f-ee14-455a-86fc-694e3280dde6',
  'x-ms-client-request-id': '2b820993-4f32-46da-94c9-347f297980a9',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '5fbec894-905c-4439-ba09-4dffce175735',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T225012Z:5fbec894-905c-4439-ba09-4dffce175735',
  date: 'Wed, 02 Mar 2016 22:50:12 GMT',
  connection: 'close' });
 return result; }]];