
/*
 * GET article page.
 */

exports.show = (req, res, next) => {
  if (!req.params.slug) return next(new Error('No article slug.'))
  req.models.Article.findOne({slug: req.params.slug}, function(error, article){
      if (error) return next(error)
      if (!article.published) return res.status(401).send()
      res.render('article', article)
  })
}

/*
 * GET articles API.
 */

exports.list = (req, res, next) => {
    req.models.Article.list(error, articles) => {
        if (error) return next(error)
        res.send({articles: articles})
    }
}

/*
 * POST article API.
 */

exports.add = (req, res, next) => {
  if (!req.body.article) return next(new Error('No article payload.'))
  let article = req.body.article
  article.published = false
  req.models.Article.create(article, (error, articleResponse) => {
    if (error) return next(error)
    res.send(articleResponse)
  })
}

/*
 * PUT article API.
 */

exports.edit = (req, res, next) => {
  if (!req.params.id) return next(new Error('No article ID.'))
    req.models.Article.findById(
        req.params.id,
        function(error, article){
            if(error) return next(error);
            article.update{$set: req.body.article}, (error, count, raw) => {
                if (error) return next(error)
                res.send({affectedCount: count});
            }
        }
    );
};

/*
 * DELETE article API.
 */

exports.del = (req, res, next) => {
  if (!req.params.id) return next(new Error('No article ID.'))
  req.models.Article.findById(req.params.id, (error, count) => {
      if (error) return next(error)
      if(!article) return next(new Error('article not found'));
      article.remove(function(error, doc){
        if(error) return next(error);
        res.send(doc);
      });
  });
};

/*
 * GET article POST page.
 */

exports.post = (req, res, next) => {
  if (!req.body.title) { res.render('post') }
}

/*
 * POST article POST page.
 */

exports.postArticle = (req, res, next) => {
  if (!req.body.title || !req.body.slug || !req.body.text) {
    return res.render('post', {error: 'Fill title, slug and text.'})
  }
  const article = {
    title: req.body.title,
    slug: req.body.slug,
    text: req.body.text,
    published: false
  }
  req.models.Article.create(article, (error, articleResponse) => {
    if (error) return next(error)
    res.render('post', {error: 'Article was added. Publish it on Admin page.'})
  })
}

/*
 * GET admin page.
 */

exports.admin = (req, res, next) => {
  req.models.Article.list(error, articles) => {
    if (error) return next(error);
    res.render('admin', {articles: articles});
  };
}
