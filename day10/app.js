const { Pool, Client } = require('pg');
const express = require('express');
const app = express();
const POPULATE_TABLE = false;

const client = new Client({
    connectionString: 'postgresql://localhost/input_app',
})
client.connect()

function spawn_table(){
    let make_table_query = 'CREATE TABLE IF NOT EXISTS input (id serial primary key, input text, length integer)'
    client.query(make_table_query);
    if(POPULATE_TABLE){
        client.query("INSERT INTO input (input, length) VALUES ('Miguel', 6), ('Kaizen', 6), ('Leo', 7)")
    }
}
spawn_table()

app.use(express.json()); 

app.get('/api/input', function (req, res) {
    client.query('SELECT * FROM input', (err, data) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(data.rows)
            res.send(data.rows)
        }
    })
    return;
})
app.get('/api/input/:inputID', function (req, res) {
    client.query('SELECT * FROM input WHERE id=' + req.params.inputID, (err, data) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(data.rows[0])
            res.send(data.rows[0])
        }
    })
    return
})
app.post('/api/input', function (req, res) {
    const input = req.body.input
    client.query(`INSERT INTO input (input, length) VALUES ('${input}', ${input.length})`, (err, data) => {
        if (err) {
            console.log(err.stack)
        } else {
            client.query('SELECT * FROM input', (err, data2) => {
                if (err) {
                    console.log(err.stack)
                } else {
                    res.status(201).send(data2.rows)
                }
            })
        }
    })
})

app.delete('/api/input/:inputID', function (req, res) {
    client.query('DELETE FROM input WHERE id=' + req.params.inputID, (err, data) => {
        if (err) {
            console.log(err.stack)
        } else {
            client.query('SELECT * FROM input', (err, data2) => {
                if (err) {
                    console.log(err.stack)
                } else {
                    res.status(201).send(data2.rows)
                }
            })
        }
    })
})

app.listen(3000, () => {
    console.log('Listening on port 3000!')
})
