const express = require('express');
const router = require('./routes')
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', express.static('client/dist'));
app.use(express.json())

app.route('/api')
.get(router.getMovies)
.post(router.addMovies);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})