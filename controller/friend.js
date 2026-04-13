let FRIEND = require('../models/friend')

exports.viewData = async (req, res) => {
    try {

        const data = await FRIEND.find()

        res.status(200).json({
            status: 'Success',
            message: 'Data get Success',
            data: data
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })

    }
}

exports.createData = async (req, res) => {
    try {

        const data = req.body

        const user = await FRIEND.create(data)

        res.status(201).json({
            status: 'Success',
            message: 'Data enter success',
            data: user
        })

    } catch (error) {

        res.status(404).json({
            status: 'fail',
            message: error.message
        })

    }
}

exports.deleteData = async (req, res) => {
    try {
        const id = req.params.id
        const deleteDate = res.FRIEND.findByIdAndDelete(id)
        res.status(201).json({
            status: 'Success',
            message: 'Data enter success',
            data: deleteDate
        })

    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}
exports.editData = async (req, res) => {
    try {
        const id = req.params.id
        const editData = res.FRIEND.findByIdAndUpdate(id)
        res.status(201).json({
            status: 'Success',
            message: 'Data enter success',
            data: editData
        })

    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}