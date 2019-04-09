const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let { ip } = req;
    if (ip.startsWith("::ffff:")) {
        // remove ipv4 signature
        ip = ip.slice(7);
    }
    res.send(ip);
    return;
})

app.listen(port, () => console.log(`app listening on port ${port}!`))