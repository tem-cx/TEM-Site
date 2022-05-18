exports.checkHttps = (req, res, next) => {
    if(req.protocol !== 'https') {
        return res.redirect('https://' + req.headers.host + req.url)
    }
}