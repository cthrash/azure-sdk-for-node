// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls7162.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01?op=MKDIRS&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '20cfdb56-fabc-4a57-ace7-248077b0fac9',
  'set-cookie': [ 'UserPrincipalSession=cefbcdca-e218-4a0d-a10d-cd7e91f2a10c; path=/; secure; HttpOnly' ],
  'server-perf': '[20cfdb56fabc4a57ace7248077b0fac9][ AuthTime::1627.80701548042::PostAuthTime::30428.3578865881 ][HdfsMkdirs :: 00:00:119 ms]%0a[MKDIRS :: 00:00:119 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 01 Mar 2016 02:45:00 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7162.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01?op=MKDIRS&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '20cfdb56-fabc-4a57-ace7-248077b0fac9',
  'set-cookie': [ 'UserPrincipalSession=cefbcdca-e218-4a0d-a10d-cd7e91f2a10c; path=/; secure; HttpOnly' ],
  'server-perf': '[20cfdb56fabc4a57ace7248077b0fac9][ AuthTime::1627.80701548042::PostAuthTime::30428.3578865881 ][HdfsMkdirs :: 00:00:119 ms]%0a[MKDIRS :: 00:00:119 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 01 Mar 2016 02:45:00 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7162.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":268435456,\"accessTime\":1456800300948,\"modificationTime\":1456800300948,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1645bb14-d2a5-41dc-8ddc-bf171f685cb6',
  'set-cookie': [ 'UserPrincipalSession=2dcef317-e568-4045-a669-197b1bdc2e2e; path=/; secure; HttpOnly' ],
  'server-perf': '[1645bb14d2a541dc8ddcbf171f685cb6][ AuthTime::1796.31729293273::PostAuthTime::32771.2428419964 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:178 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:178 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 01 Mar 2016 02:45:01 GMT',
  connection: 'close',
  'content-length': '227' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7162.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":268435456,\"accessTime\":1456800300948,\"modificationTime\":1456800300948,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1645bb14-d2a5-41dc-8ddc-bf171f685cb6',
  'set-cookie': [ 'UserPrincipalSession=2dcef317-e568-4045-a669-197b1bdc2e2e; path=/; secure; HttpOnly' ],
  'server-perf': '[1645bb14d2a541dc8ddcbf171f685cb6][ AuthTime::1796.31729293273::PostAuthTime::32771.2428419964 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:178 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:178 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 01 Mar 2016 02:45:01 GMT',
  connection: 'close',
  'content-length': '227' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7162.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls7162.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/emptyfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': '9fddd0b1-8160-44c8-b30c-6580be2aabbb',
  'set-cookie': [ 'UserPrincipalSession=59a11039-1941-4c5c-86a7-fcbaa55fa879; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[9fddd0b1816044c8b30c6580be2aabbb][ AuthTime::1736.86848727779::PostAuthTime::31400.9227942497 ][FsOpenStream :: 00:00:100 ms]%0a[Open :: 00:00:100 ms]%0a[Write :: 00:00:000 ms]%0a[FsAppendStream :: 00:00:016 ms]%0a[FlushWrite :: 00:00:016 ms]%0a[CREATE :: 00:00:119 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 01 Mar 2016 02:45:02 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7162.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls7162.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/emptyfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': '9fddd0b1-8160-44c8-b30c-6580be2aabbb',
  'set-cookie': [ 'UserPrincipalSession=59a11039-1941-4c5c-86a7-fcbaa55fa879; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[9fddd0b1816044c8b30c6580be2aabbb][ AuthTime::1736.86848727779::PostAuthTime::31400.9227942497 ][FsOpenStream :: 00:00:100 ms]%0a[Open :: 00:00:100 ms]%0a[Write :: 00:00:000 ms]%0a[FsAppendStream :: 00:00:016 ms]%0a[FlushWrite :: 00:00:016 ms]%0a[CREATE :: 00:00:119 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 01 Mar 2016 02:45:02 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7162.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1456800301957,\"modificationTime\":1456800301957,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '733bcc75-eece-4cf5-9a14-6364345ae389',
  'set-cookie': [ 'UserPrincipalSession=89b53967-21b1-49c9-97e5-46de346503dd; path=/; secure; HttpOnly' ],
  'server-perf': '[733bcc75eece4cf59a146364345ae389][ AuthTime::1762.1017254483::PostAuthTime::31284.1487402042 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:114 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:114 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 01 Mar 2016 02:45:01 GMT',
  connection: 'close',
  'content-length': '222' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7162.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1456800301957,\"modificationTime\":1456800301957,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '733bcc75-eece-4cf5-9a14-6364345ae389',
  'set-cookie': [ 'UserPrincipalSession=89b53967-21b1-49c9-97e5-46de346503dd; path=/; secure; HttpOnly' ],
  'server-perf': '[733bcc75eece4cf59a146364345ae389][ AuthTime::1762.1017254483::PostAuthTime::31284.1487402042 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:114 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:114 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 01 Mar 2016 02:45:01 GMT',
  connection: 'close',
  'content-length': '222' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7162.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls7162.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/contentfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': '2899922f-0cb3-4a75-8d5f-0e19078d3b8f',
  'set-cookie': [ 'UserPrincipalSession=4e5b8b20-b265-4fb5-a7ba-43d3a3b53c23; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[2899922f0cb34a758d5f0e19078d3b8f][ AuthTime::1706.50069842497::PostAuthTime::31319.6339962312 ][FsOpenStream :: 00:00:188 ms]%0a[Open :: 00:00:188 ms]%0a[FsAppendStream :: 00:00:817 ms]%0a[Write :: 00:00:818 ms]%0a[FsAppendStream :: 00:00:011 ms]%0a[FlushWrite :: 00:00:012 ms]%0a[CREATE :: 00:01:020 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 01 Mar 2016 02:45:03 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7162.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls7162.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/contentfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': '2899922f-0cb3-4a75-8d5f-0e19078d3b8f',
  'set-cookie': [ 'UserPrincipalSession=4e5b8b20-b265-4fb5-a7ba-43d3a3b53c23; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[2899922f0cb34a758d5f0e19078d3b8f][ AuthTime::1706.50069842497::PostAuthTime::31319.6339962312 ][FsOpenStream :: 00:00:188 ms]%0a[Open :: 00:00:188 ms]%0a[FsAppendStream :: 00:00:817 ms]%0a[Write :: 00:00:818 ms]%0a[FsAppendStream :: 00:00:011 ms]%0a[FlushWrite :: 00:00:012 ms]%0a[CREATE :: 00:01:020 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 01 Mar 2016 02:45:03 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7162.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1456800303053,\"modificationTime\":1456800303650,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ccf3dbb9-6069-4270-90ac-48a5f39a3c02',
  'set-cookie': [ 'UserPrincipalSession=1b3a534c-219d-4d1e-848e-f8f54ae50353; path=/; secure; HttpOnly' ],
  'server-perf': '[ccf3dbb96069427090ac48a5f39a3c02][ AuthTime::1684.69044508076::PostAuthTime::31429.1640915866 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:141 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:142 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 01 Mar 2016 02:45:03 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7162.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1456800303053,\"modificationTime\":1456800303650,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ccf3dbb9-6069-4270-90ac-48a5f39a3c02',
  'set-cookie': [ 'UserPrincipalSession=1b3a534c-219d-4d1e-848e-f8f54ae50353; path=/; secure; HttpOnly' ],
  'server-perf': '[ccf3dbb96069427090ac48a5f39a3c02][ AuthTime::1684.69044508076::PostAuthTime::31429.1640915866 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:141 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:142 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 01 Mar 2016 02:45:03 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7162.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=LISTSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":22,\"pathSuffix\":\"contentfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1456800303053,\"modificationTime\":1456800303650,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"},{\"length\":0,\"pathSuffix\":\"emptyfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1456800301957,\"modificationTime\":1456800301957,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6833415c-5169-46ec-8cf1-8ee0e265fe8c',
  'set-cookie': [ 'UserPrincipalSession=067758d5-f876-4e96-b47b-5852fc5faff9; path=/; secure; HttpOnly' ],
  'server-perf': '[6833415c516946ec8cf18ee0e265fe8c][ AuthTime::1729.17219997494::PostAuthTime::31220.475657079 ][FsEnumerateDirectory :: 00:00:127 ms]%0a[FsEnumerateDirectory :: 00:00:127 ms]%0a[ListDirectory :: 00:00:127 ms]%0a[LISTSTATUS :: 00:00:128 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 01 Mar 2016 02:45:04 GMT',
  connection: 'close',
  'content-length': '478' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7162.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=LISTSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":22,\"pathSuffix\":\"contentfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1456800303053,\"modificationTime\":1456800303650,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"},{\"length\":0,\"pathSuffix\":\"emptyfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1456800301957,\"modificationTime\":1456800301957,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6833415c-5169-46ec-8cf1-8ee0e265fe8c',
  'set-cookie': [ 'UserPrincipalSession=067758d5-f876-4e96-b47b-5852fc5faff9; path=/; secure; HttpOnly' ],
  'server-perf': '[6833415c516946ec8cf18ee0e265fe8c][ AuthTime::1729.17219997494::PostAuthTime::31220.475657079 ][FsEnumerateDirectory :: 00:00:127 ms]%0a[FsEnumerateDirectory :: 00:00:127 ms]%0a[ListDirectory :: 00:00:127 ms]%0a[LISTSTATUS :: 00:00:128 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 01 Mar 2016 02:45:04 GMT',
  connection: 'close',
  'content-length': '478' });
 return result; }]];