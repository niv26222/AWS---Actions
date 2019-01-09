const AWS = require("aws-sdk");
AWS.config.update({region: 'us-east-1'});

const dynamodb = new AWS.DynamoDB();


//watch table
// dynamodb.listTables({}, (err, data)=>{
//     if(err) {
//         console.log(err);
//     }else {
//         console.log(data);
//     }    
// });



//watch meta data of our table
// dynamodb.describeTable({
//     TableName:"td_notes_sdk"
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     }else {
//         console.log(JSON.stringify(data, null, 2));
//     }       
// });


//create a table
// dynamodb.createTable({
//     TableName: "td_notes_test", 
//     AttributeDefinitions : [
//         {
//            AttributeName: "user_id", 
//            AttributeType: "S" 
//         },
//         {
//             AttributeName: "timestamp", 
//             AttributeType: "N" 
//         }
//     ],
//     KeySchema: [
//         {
//             AttributeName: "user_id",
//             KeyType: "HASH"
//         },
//         {
//             AttributeName: "timestamp",
//             KeyType: "RANGE"
//         }
//     ],
//     ProvisionedThroughput: {
//         ReadCapacityUnits:1,
//         WriteCapacityUnits: 1
//     }
// }, (err, data)=>{
//          if(err) {
//              console.log(err);
//          }else {
//              console.log(JSON.stringify(data, null, 2));
//          }       
// });


// dynamodb.updateTable({
//     TableName: "td_notes_sdk",
//     ProvisionedThroughput: {
//         ReadCapacityUnits:2,
//         WriteCapacityUnits: 1
//     }
// }, (err, data) => {
//    if(err) {
//         console.log(err);
//     }else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });


// dynamodb.deleteTable({
//     TableName: "td_notes_sdk"
// }, (err, data) => {
//     if(err) {
//         console.log(err);
//     }else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// })



