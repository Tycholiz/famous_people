const pg = require("pg"); //pg is a driver for node

// var settings = "postgres://postgres:secret@localhost/test_db";
const settings = require("./settings");
var id = process.argv[2];

//client here does NOT represent the browser. it represents the server talking to the db
const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

if (process.argv.length <= 2) { 
  return console.error('please provide an id to look up'); 
}
  
client.connect((err) => {
  if (err) {
    return console.error("Connection Error. Couldn't connect to Postgres", err);
  }

  //whenever we have 'INSERT', we should have 'RETURNING' of some sort (ex. RETURNING *)
  client.query("SELECT first_name FROM famous_people WHERE first_name = $1::text LIMIT 1", [id], (err, result) => { //$1 refers to first argument
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows);
    // console.log('%j', result);
    client.end();
  });
});


