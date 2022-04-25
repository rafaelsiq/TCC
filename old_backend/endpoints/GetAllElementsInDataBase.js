
module.exports = class GetAllElementsInDataBase {
    getAllElements(element,req, res, err)
    {
        element.find({}, function (err, element) {
            if (err) return res.status(500).send("There was a problem finding element.");
            res.status(200).send(element);
        });
    }
}