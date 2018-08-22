exports.up = function(knex, Promise) {  //migrate:latest runs this
  return Promise.all([
    knex.schema.createTable('milestones', function(table){
      table.increments('id').unsigned().primary();
      table.string('description');
      table.date('date_achieved');
    })
  ]);
};     
 
//'down' should do the opposite of whatever 'up' does
exports.down = function(knex, Promise) {  //migrate:rollback
  return Promise.all([
    knex.schema.drop('milestones')
  ])
};