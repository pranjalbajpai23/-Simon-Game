const express = require('express');
const viewRouter = express.Router();
const {getLandingpage, getSignIn, getSignUp,game,analysis} = require('../Controller/viewController');

viewRouter.route("/signIn").get(getSignIn);
viewRouter.route("/signUp").get(getSignUp);
viewRouter.route("/").get(getLandingpage);
viewRouter.route("/game").get(game);
viewRouter.route("/analysis").get(analysis);


module.exports.viewRouter = viewRouter;