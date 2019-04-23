/*
 * @Descripttion: 
 * @version: 
 * @Author: falost
 * @LastEditors: falost
 * @Date: 2018-08-02 15:24:05
 * @LastEditTime: 2019-04-23 16:52:06
 */
/**
 * config
 */

var path = require('path');

var config = {
  // debug 为 true 时，用于本地调试
  debug: false,

  get mini_assets() { return !this.debug; }, // 是否启用静态文件的合并压缩，详见视图中的Loader

  name: 'FEDTE', // 社区名字
  description: '前端技术人：WEB前端开发人员交流社区', // 社区的描述
  keywords: 'nodejs, node, css5, html5, javascript,fedte,h5,全栈,前端技术人',

  // 添加到 html head 中的信息
  site_headers: [
    '<meta name="author" content="FED Tema" />'
  ],
  //site_logo: '/public/images/logo.png?20170526', // default is `name`
  site_logo: '/public/images/logo_v2.svg?20170526',
  site_icon: '/public/images/icon_v1.png?20170601', // 默认没有 favicon, 这里填写网址
  // 右上角的导航区
  site_navs: [
    // 格式 [ path, title, [target=''] ]
    ['/stars', '达人'],
    [ '/about', '关于' ]
    
  ],
  // 友情链接
  links: [
    {
      url: 'https://falost.cc',
      name: 'falost的小窝',
      logo: '',
      target: '_blank'
    }
  ],
  // cdn host，如 http://cnodejs.qiniudn.com
  site_static_host: '', // 静态文件存储域名
  // 社区的域名
  host: 'www.fedte.org',
  // 默认的Google tracker ID，自有站点请修改，申请地址：http://www.google.com/analytics/
  google_tracker_id: '',
  // 默认的cnzz tracker ID，自有站点请修改
  cnzz_tracker_id: '1261822743',

  // mongodb 配置
  db: 'mongodb://name:user@127.0.0.1/fedte_club',
  
  // redis 配置，默认是本地
  redis_host: '127.0.0.1',
  redis_port: 6379,
  redis_db: 0,
  redis_password: '',

  session_secret: 'fedte_club_secret', // 务必修改
  auth_cookie_name: 'fedte_club',
  // cookid配置
  cookie:{
    domain:'.fedte.org',
    path: '/',
    maxAge: 1000 * 60 * 60 * 24 * 30,
    signed: true,
    secure:true,
    httpOnly: true
  },
  // 程序运行的端口
  port: 8089,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // RSS配置
  rss: {
    title: 'FEDTE：WEB前端开发人员交流社区',
    link: 'https://www.fedte.org',
    language: 'zh-cn',
    description: 'FEDTE：WEB前端开发人员交流社区，是以技术交流、经验分享、资源共享、共同超越为宗旨，建立一个专业技术交流社区平台！',
    //最多获取的RSS Item数量
    max_rss_items: 50
  },

  // 邮箱配置
  mail_opts: {
    host: 'smtp.126.com',
    port: 25,
    auth: {
      user: '',
      pass: ''
    },
    ignoreTLS: true
  },

  //weibo app key
  weibo_key: '',
  weibo_id: '',

  // admin 可删除话题，编辑标签。把 user_login_name 换成你的登录名
  admins: { falost: true },

  // github 登陆的配置
  GITHUB_OAUTH: {
    clientID: '',
    clientSecret: '',
    callbackURL: 'https://fedte.org/auth/github/callback'
  },
  // 是否允许直接注册（否则只能走 github 的方式）
  allow_sign_up: true,

  // oneapm 是个用来监控网站性能的服务
  oneapm_key: '',

  // 下面两个配置都是文件上传的配置
/*
  // 7牛的access信息，用于文件上传
    qn_access: {
    accessKey: '',
    secretKey: '',
    bucket: '',
    origin: '',
    // 如果vps在国外，请使用 http://up.qiniug.com/ ，这是七牛的国际节点
    // 如果在国内，此项请留空
    uploadURL: 'http://up.qiniug.com/',
  },
*/
  // 文件上传配置
  // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
  upload: {
    path: path.join(__dirname, 'public/upload/'),
    url: 'https://fedte.org/public/upload/'
  },

  file_limit: '1MB',

  // 版块
  tabs: [
    ['share', '分享'],
    ['ask', '问答'],
    ['job', '招聘'],
    ['nodercms', 'NoderCMS']
  ],

  // 极光推送
  jpush: {
    appKey: '',
    masterSecret: '',
    isDebug: false,
  },

  create_post_per_day: 100, // 每个用户一天可以发的主题数
  create_reply_per_day: 1000, // 每个用户一天可以发的评论数
  create_user_per_ip: 1000,
  visit_per_day: 1000, // 每个 ip 每天能访问的次数
};

if (process.env.NODE_ENV === 'test') {
  config.db = 'mongodb://test:test@127.0.0.1/fedte_club_test';
}

module.exports = config;
