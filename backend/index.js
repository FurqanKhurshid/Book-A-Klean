import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
const PORT = 5000;
app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: false }));
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is up and running on port: http://localhost:${PORT}`);
});