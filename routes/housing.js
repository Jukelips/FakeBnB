var express = require('express');
var router = express.Router();
var Housing = require('../models/housing');

/* GET users listing. */
router.get('/housing', function (req, res, next) {
    res.render('housing', { title: 'Annonce ' });
});


//POST route for updating data
router.post('/housing', function (req, res, next) {

        var housingData = {
            title: req.body.title,
            address: req.body.address,
            zipCode: req.body.zipCode,
            city: req.body.city,
            country:req.body.country,
            numberRoom: req.body.numberRoom,
            numberBathRoom: req.body.numberBathRoom,
            numberTraveler:req.body.numberTraveler,
            price:req.body.price,
            start: req.body.start,
            end:req.body.end,
            description :req.body.description,

        }

        Housing.create(housingData, function (error, housing) {
            if (error) {
                return next(error);
            } else {

                return res.redirect('/housing'); // /profile
            }
        });

    } else if (req.body.logemail && req.body.logpassword) {
        User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
            if (error || !user) {
                var err = new Error('Wrong email or password.');
                err.status = 401;
                return next(err);
            } else {
                req.session.userId = user._id;
                return res.redirect('/login'); // /profile
            }
        });
    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
})

// GET route after registering
router.get('/profile', function (req, res, next) {
    User.findById(req.session.userId)
        .exec(function (error, user) {
            if (error) {
                return next(error);
            } else {
                if (user === null) {
                    var err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    return next(err);
                } else {
                    return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
                }
            }
        });
});

// GET for logout logout
router.get('/logout', function (req, res, next) {
    if (req.session) {
        // delete session object
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            } else {
                return res.redirect('/');
            }
        });
    }
});

module.exports = housing;