# cos-nodejs-sdk-slim

modified from: [tencentyun/cos-nodejs-sdk-v5](https://github.com/tencentyun/cos-nodejs-sdk-v5)

change:
- use `sdk/slimRequest.js` instead of huge `request` package
- trim method from `sdk/base.js`
- delete `sdk/advance.js`

remaining base method:
- getService
- getBucket
- headBucket
- getObject
- putObject
- putObjectCopy
