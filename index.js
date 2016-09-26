var awsIot = require('aws-iot-device-sdk');
var device = awsIot.device({
  keyPath: "./47a9839906-private.pem.key",
  certPath: "./47a9839906-certificate.pem.crt",
  caPath: "./root-CA.crt",
  clientId: "Tsubakiya_aws_02",
  region: "us-east-1"
});

device.on('connect', function() {
  console.log('connected');
  device.publish('photo/send', "hi~");
});
