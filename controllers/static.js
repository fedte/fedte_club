var multiline = require('multiline');
// static page
// About
exports.about = function (req, res, next) {
  res.render('static/about', {
    pageTitle: '关于我们'
  });
};

// FAQ
exports.faq = function (req, res, next) {
  res.render('static/faq');
};
//获取node入门资料
exports.getNodeStart = function (req, res) {
  res.render('static/getnodestart', {
    pageTitle: 'Node.js 新手入门'
  });
};
//获取WEB前端资料
exports.getFrontStart = function (req, res) {
  res.render('static/getfrontstart', {
    pageTitle: 'web前端资料'
  });
};

exports.robots = function (req, res, next) {
  res.type('text/plain');
  res.send(multiline(function () {;
/*
# See http://www.robotstxt.org/robotstxt.html for documentation on how to use the robots.txt file
#
# To ban all spiders from the entire site uncomment the next two lines:
# User-Agent: *
# Disallow: /
*/
  }));
};

exports.api = function (req, res, next) {
  res.render('static/api');
};
