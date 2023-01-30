const { Room } = require("../models/rooms.model")

exports.getRooms = async (req, res) => {
     try{
        let query =  Room.find({})

        //FILTERING
        if(req.query){
            const queriesToOmit = ['page', 'page_size', 'total', 'sort', 'order_by']
            const queryObj = {...req.query}
            queriesToOmit.forEach(q => {if(queryObj.hasOwnProperty(q)) delete queryObj[q]})
            query = query.find(queryObj)
        }

        //SELECT PROPERTIES TO OMIT FROM  RESPONSE
        query = query.select('-__v')

        //PAGINATION
        const skip = req.query.page ?  (req.query.page - 1) * 15 : 0;
        const pageSize = req.query.page_size || 15

        if(req.query.page){
            const total = query.countDocuments()

            if(skip >= total) throw new Error('Page not found')
        }

        query = query.skip(skip).limit(pageSize)

        const rooms = await query

        res.status(200).json({
            meta: {
                paging: {
                    page: req.query.page || 1,
                    page_size: pageSize,
                    total: rooms.length
                }
            },
            data: rooms
        })

     } catch(e) {
        res.status(400).json({
            status: "failed",
            error: err
        })
     }
}

exports.createRoom = (req, res) => {
    Room.create(req.body)
    .then(doc => {
        res.status(200).json({
            status: "success",
            data: {
                room: doc
            }
        })
    })
    .catch(err => {
        res.status(400).json({
            status: "failed",
            error: err
        })
    })
}