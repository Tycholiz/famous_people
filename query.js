const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

//whenever we have 'INSERT', we should have 'RETURNING' of some sort (ex. RETURNING *)
module.exports = client.query("SELECT first_name FROM famous_people WHERE first_name = $1::text LIMIT 1", [id], (err, result) => { //$1 refers to first argument
  //client here does NOT represent the browser. it represents the server talking to the db

  
  var id = process.argv[2];
  if (err) {
    return console.error("error running query", err);
  }
  console.log(result.rows);
  client.end();
});