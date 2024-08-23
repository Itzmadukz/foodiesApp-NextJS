// import sql from 'better-sqlite3';
const sql = require('better-sqlite3');

const db = sql('meals.db');

export async function getMeals() {
    //loading state simulation on setTimeout 
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare('SELECT * FROM meals').all();
}