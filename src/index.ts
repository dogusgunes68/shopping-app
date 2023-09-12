import dotenv from 'dotenv';

import createServer from './server';

dotenv.config();

const port = process.env.PORT || 4001;

const app = createServer();

app.listen(port, function(){
  console.log("listening on port", port);
});

export default app;

