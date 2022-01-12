module.exports.home=function(req,resp){
    //console.log(req.cookies);
    //resp.cookie('user_id',25);
    return resp.render('home');
};

/////////action name