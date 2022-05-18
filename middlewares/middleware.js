require('dotenv').config()

exports.checkHttps = (req, res, next) => {
    if(process.env.PRODUCTION !== 'true'){
        return next()
    }
    else if(req.protocol !== 'https') {
        return res.redirect('https://' + req.headers.host + req.url)
    }
}