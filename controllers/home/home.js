exports.getHome = (req, res) => {
    res.status(200).render('home')
}

exports.postHome = async (req, res) => {

    const { search } = req.body
    res.status(200).redirect(`/items/${search}`)

    


}
