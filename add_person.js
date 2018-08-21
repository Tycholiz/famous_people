const pg = require("pg");
const settings = require("./settings");
var knex = require('knex')({
  client: 'pg',
  connection: settings
});

var firstName = process.argv[2];
var lastName = process.argv[3];
var birthDate = process.argv[4];

knex('famous_people')
  .insert({ first_name: firstName, last_name: lastName, birthdate: birthDate })
  .returning('*')
  .asCallback((err, res) => console.log(res));


// knex.select('name').from('users')
// .where('id', '>', 20)
// .andWhere('id', '<', 200)
// .limit(10)
// .offset(x)
// .asCallback(function(err, rows) {
//   if (err) return console.error(err);
//   knex.select('id').from('nicknames')
//     .whereIn('nickname', _.pluck(rows, 'name'))
//     .asCallback(function(err, rows) {
//       if (err) return console.error(err);
//       console.log(rows);
//     });
// });