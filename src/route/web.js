import express from "express";
import homeController from '../controller/homeController'
let router = express.Router();

const initWebRoute = (app) => {

  // Home Page
  router.get('/', homeController.getHomePage);

  // About Page
  router.get('/about', (req, res) => {
    res.render('index.ejs');
  })

  return app.use('/', router);
}

export default initWebRoute;