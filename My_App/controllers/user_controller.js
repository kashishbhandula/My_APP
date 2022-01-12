const User = require('../models/user');
//const cookieParser=require('cookie-parser');
module.exports.profile = function (req, resp) {
    if (req.cookies.user_id) {
        User.findById(req.cookies.user_id, function (err, user) {
            if (user) {
                return resp.render('profile', {
                    user: user
                });
            }

        });
    }

}
module.exports.sign_in = function (req, resp) {
    resp.render('user_sign_in');
}
module.exports.sign_up = function (req, resp) {
    resp.render('user_sign_up');
}
module.exports.create = function (req, resp) {

    //console.log("hii");
    if (req.body.password != req.body.confirm_password) {
        return resp.redirect('back');
    }
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) { console.log("error in finding user"); return; }
        if (!user) {
            User.create(req.body, function (err, user) {
                if (err) { console.log("error in creating sign up"); return; }
                return resp.redirect('/user/sign_in');
            });
        }
        else {
            return resp.redirect('back');
        }
    });
};
module.exports.createSession = function (req, resp) {

    // find the users
    // console.log('Hii');
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) { console.log('error in signing in'); return; }
        if (user) {
            if (user.password != req.body.password) {
                return resp.redirect('back');
            }
            resp.cookie('user_id', user.id);
            //console.log('Hii');
            return resp.redirect('/user/profile');

        } else {
            return resp.redirect('back');
        }

    });

};
module.exports.sign_out = function (req, resp) {
    User.findById(req.cookies.user_id, function (err, user) {
        if (user) {
            //req.clearCookie('user');
            return resp.redirect('/user/sign_in');
        }

    });

};