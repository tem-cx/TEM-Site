exports.getItems = async (req, res) => {
    const params = req.params

    if (params[0].length != 36) {
        const { search } = req.body
        return res.status(200).redirect(`/`)
    }
    
    res.status(200).render('items/item',{
        search: params[0]
    
    })
}

exports.postItems = async (req, res) => {

}
