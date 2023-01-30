const { Room } = require("../models/rooms.model")

exports.getRooms = async (req, res) => {
     try{
        let query =  Room.find()

        //FILTERING
        if(req.query){
            const queriesToOmit = ['page', 'page_size', 'total', 'sort', 'order_by']
            const queryObj = {...req.query}
            queriesToOmit.forEach(q => {if(queryObj.hasOwnProperty(q)) delete queryObj[q]})
            query = query.find(queryObj)
        }

        //SELECT PROPERTIES TO OMIT FROM RESPONSE
        // const queriesToOmit = ['__v', 'page_size', 'total', 'sort', 'order_by']
        query = query.select('-__v')

        //PAGINATION
        const page = req.query.page || 1
        const skip = page ?  (page - 1) * 15 : 0;
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
                    page: page,
                    page_size: pageSize,
                    total: rooms.length
                }
            },
            data: rooms
        })

     } catch(err) {
        res.status(400).json({
            error: err
        })
     }
}

exports.createRoom = async (req, res) => {
    try{
        let query = Room.create(req.body)

        const newRoom = await query

        const roomReponse = {...newRoom}
        delete roomReponse['__v']

        res.status(200).json({
            data: roomReponse
        })

    } catch(err){
        res.status(400).json({
            error: err
        })
    }
}

exports.updateRoom = async (req, res) => {
    try{
        let query = Room.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        
        const updatedRoom = await query

        const roomReponse = {...updatedRoom}
        delete roomReponse['__v']

        res.status(200).json({
            data: roomReponse
        })

    } catch(err){
        res.status(400).json({
            error: err
        })
    }
}