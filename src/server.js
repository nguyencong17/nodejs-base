import express from 'express';
import configViewEngine from './configs/viewEngine';
import 'dotenv/config';
import initWebRoute from './route/web';
// Tạo instance từ thư viện express
const app = express();
// Config port
const port = process.env.PORT || 8080;
console.log("check port : ", port);

// Truyen instance vào configViewEngine
configViewEngine(app);

//Config Web Route
initWebRoute(app);

// Listening on port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

