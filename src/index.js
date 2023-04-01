const app = require('./app')

const port = 5001;


app.listen(port, () => {
    console.log(`server is working on http://localhost:${port}`);
});