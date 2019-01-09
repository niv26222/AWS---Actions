const AWS = require("aws-sdk");
AWS.config.update({region: 'us-east-1'});
const docClient  = new AWS.DynamoDB.DocumentClient();



// docClient.get({
//     TableName : 'td_notes_sdk' ,
//     Key: {
//         user_id: 'ABC',
//         timestamp:1,
//     }
// },(err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });


// docClient.query({
//     TableName : 'td_notes_sdk' ,
//     KeyConditionExpression: "user_id = :uid",
//     ExpressionAttributeValues: {
//         ":uid": "ABC"
//     }
// },(err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });


//count rows and show all the tables rows
// docClient.scan({
//     TableName: 'td_notes_sdk',
//     FilterExpression : "user_id = :user_id",
//     ExpressionAttributeValues: {
//         ":user_id": "ABC"
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });