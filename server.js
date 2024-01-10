const app = require('./app')
const connectDatabase = require('./database')



connectDatabase();

app.listen(process.env.SMT_PORT,()=>{
    console.log(`server running to the port ${process.env.SMT_PORT} in ${process.env.NODE_ENV} `);
})