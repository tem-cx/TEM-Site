const axios = require('axios').default;

exports.getItems = async (req, res) => {
    const params = req.params





    if (params[0].length != 36) {
        const { search } = req.body
        return res.status(200).redirect(`/`)
    }
    


    var itemOptions = {
        method: 'GET',
        url: 'https://api.tem.cx/items/' + params[0],
        headers: {'Content-Type': 'application/json'}
    };
    
    async function getItem() {
        let item = ''
            await axios.request(itemOptions).then(function (response) {
                item = response.data
            })
        return item
    }

    const item = await getItem()

    ownerList = []
    previousOwners = item.item.previousOwners

    for(i in previousOwners){
        var obj = {}
        var startDateConvert = new Date(previousOwners[i].start)
        var endDateConvert = new Date(previousOwners[i].end)
        obj.startDate = startDateConvert.getDate() + '/' + (startDateConvert.getMonth() + 1) + '/' + (startDateConvert.getFullYear())
        obj.endDate = endDateConvert.getDate() + '/' + (endDateConvert.getMonth() + 1) + '/' + (endDateConvert.getFullYear())
        obj.playerUuid = previousOwners[i].owner.playerUuid
        ownerList.push(obj)
    }
    var obj = {}

    obj.startDate = startDateConvert.getDate() + '/' + (startDateConvert.getMonth() + 1) + '/' + (startDateConvert.getFullYear())
    obj.endDate = 'Present'
    obj.playerUuid = item.item.currentOwner.playerUuid
    ownerList.push(obj)

    ownerList.reverse()

    console.log(ownerList)
    res.status(200).render('items/item',{
        search: params[0]
    
    })
}

exports.postItems = async (req, res) => {

}
