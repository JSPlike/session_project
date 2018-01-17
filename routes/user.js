
/*
 * GET users listing.
 */

exports.list = (req, res, next) => {
  res.send('respond with a resource')
}

/*
 * GET login page.
 */

exports.login = (req, res, next) => {
  res.render('login')
}

/*
 * GET logout route.
 */

exports.logout = (req, res, next) => {
	req.session.destroy();
	res.redirect('/')
}

/*
 * POST authenticate route.
 */

exports.authenticate = (req, res, next) => {
	if (!req.body.email || !req.body.password)
		return res.render('login', {
			error: '아이디와 페스워드를 다시 입력해주세요'
		});
	req.models.User.findOne({
		email: req.body.email,
		password: req.body.password
	}, function(err, user) {
		if (err) return next(err);
		if(!user) return res.render('login', {
			err : '아이디와 패스워드가 부정확합니다.'
		});
		req.session.user = user;
		req.session.admin = user.admin;
  		res.redirect('/admin')
  	})
};
