// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');

// const app = express();
// const PORT = 3001;

// app.use(cors());

// app.get('/proxy', async (req, res) => {
//   try {
//     const { url } = req.query;

//     // Fetch the data from the specified URL using axios
//     const response = await axios.get(url, { responseType: 'arraybuffer' });

//     // Set appropriate headers
//     res.setHeader('Content-Type', 'audio/mpeg');
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

//     // Send the audio data to the client
//     res.send(response.data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).send('An error occurred');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Proxy server listening on port ${PORT}`);
// });


const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
