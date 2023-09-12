const getLandingpage=(req,res )=>{
    res.render("landingpage.ejs");
}   

const getSignIn=(req,res)=>{
    res.render("signIn.ejs");
}
const getSignUp=(req,res)=>{
    res.render("signUp.ejs");
}
const game=(req,res)=>{
    res.render("index.ejs");
}
const analysis=(req,res)=>{
    res.render("analysis.ejs");
}

module.exports.getLandingpage = getLandingpage;
module.exports.getSignIn = getSignIn;
module.exports.getSignUp = getSignUp;
module.exports.game = game;
module.exports.analysis = analysis;
