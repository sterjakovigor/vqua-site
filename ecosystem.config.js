module.exports = {
  apps : [
    {
      name      : 'vqua-site',
      script    : 'server/index.js'
    }
  ],
  deploy : {
    production : {
      user : 'sterjakov',
      host : '194.67.194.137',
      ref  : 'origin/master',
      repo : 'https://github.com/sterjakovigor/vqua-site',
      path : '/home/sterjakov/vqua-site',
      'post-deploy' : [
        'npm install',
        'webpack --env.production',
        'pm2 reload ecosystem.config.js --env production',
      ].join(' && ')
    },
  }
}
