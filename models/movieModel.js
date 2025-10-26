const db = require ('../config/db');

const Movie = {
  //getALL
  getAll: async() =>{
    const [rows] = await db.promise().query('select * from movies');
    return rows;
  },
  //getById
  getById: async(id) =>{
    const [rows] = await db.promise().query('select * from movies where id = ?', [id]);
    return rows[0];
  },
  //create
  create: async(data) =>{
    const [result] = await db.promise().query('insert into movies set ?', data);
    return result.insertId;
  },
  //update
  update: async(id, data) =>{
    const [result] = await db.promise().query('update movies set ? where id = ?', [data, id]);
    return result.affectedRows;
  },
  //delete remove
  remove: async(id) =>{
    const [result] = await db.promise().query('delete from movies where id = ?', [id]);
    return result.affectedRows;
  }
};

module.exports = Movie;