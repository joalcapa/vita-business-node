var Business = require('./src');

Business.config({
    "env": 'local',
    "X_Login": "b8acb26d21f4d6eaad5cd3008f6dedc667b8ea00",
    "X_Trans_Key": "1JcgVCUURSsbPUS4IeuzU0J6ZT8=",
    "secret": "8cb36c7ed71788a2a10df5317765c6de55fa4dceea4fa44072e5bb351a006e5af6bab924da87e847ab541ca5c79af269b77478b28ae4a1a0fce51e9096fa4b30a4fbc5d017dea213473f64d76fab8f12c63a0edb06b1839dd68a68b423d8f9038cdef1d3717033d87c80fe64ff2c9d2c94b06c9ad34c2bd21cf5d878fe8e1267af025fc6bfd745a70d284b86911ba8dc3e15f2436e961bd2051c667c51485e1e6497bd168a1285bcd13ec2f5cab479f88ad9e80e2fa8b9eaf8958d0751a608673dc14f0ec182c70aa5b4d530167bffd0f3fd3f87dbd037244c0ee05deab48d69d566e20c781c337443ea1528eac60d563dd85f8d8b31951fb9cea5fb0b2ee1e36e7fef8404c8095776cc75af85819c54abe0b8a5f1bb07cda8a9676cfb0bfc1f35221c5e7a56f6a67fd00121",
});

Business
    .default
    .rulesProvider
    .getWithdrawalRules()
    .then(function (response) {
        console.log('Response: ', response);
        response.rules.ar.map(function (item) {
            console.log('Item: ', item)
        })
    })
    .catch(function (error) {
        console.log('Error: ', error);
    });