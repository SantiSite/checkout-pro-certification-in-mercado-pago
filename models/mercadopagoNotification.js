import mongoose from 'mongoose'

const MercadopagoNotificationSchema = new mongoose.Schema({
    response: {
        type: Object
    }
})

export default mongoose.models.MercadopagoNotification ||
    mongoose.model('MercadopagoNotification', MercadopagoNotificationSchema)
