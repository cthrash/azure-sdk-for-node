// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'northeurope';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster/listRemoteLoginInformation?api-version=2018-05-01')
  .reply(200, "{\"value\":[{\"nodeId\":\"tvm-913932285_1-20180614t033432z\",\"ipAddress\":\"40.112.67.68\",\"port\":50000}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '97',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '541aeb34-5f75-484b-9824-d3c8ea51ea2a',
  'request-id': '768264e0-e66b-4a84-8eed-183cbae64564',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '541aeb34-5f75-484b-9824-d3c8ea51ea2a',
  'x-ms-routing-request-id': 'WESTUS:20180614T035122Z:541aeb34-5f75-484b-9824-d3c8ea51ea2a',
  date: 'Thu, 14 Jun 2018 03:51:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster/listRemoteLoginInformation?api-version=2018-05-01')
  .reply(200, "{\"value\":[{\"nodeId\":\"tvm-913932285_1-20180614t033432z\",\"ipAddress\":\"40.112.67.68\",\"port\":50000}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '97',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '541aeb34-5f75-484b-9824-d3c8ea51ea2a',
  'request-id': '768264e0-e66b-4a84-8eed-183cbae64564',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '541aeb34-5f75-484b-9824-d3c8ea51ea2a',
  'x-ms-routing-request-id': 'WESTUS:20180614T035122Z:541aeb34-5f75-484b-9824-d3c8ea51ea2a',
  date: 'Thu, 14 Jun 2018 03:51:21 GMT',
  connection: 'close' });
 return result; }]];