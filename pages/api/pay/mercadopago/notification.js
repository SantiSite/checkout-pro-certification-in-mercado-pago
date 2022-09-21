import dbConnect from '../../../../lib/dbConnect'
import mercadopagoNotification from '../../../../models/mercadopagoNotification'

export default async function MercadoPagoNotification(req, res) {
    const { method } = req
    await dbConnect()
    switch (method) {
        case 'POST':
            try {
                await mercadopagoNotification.create({
                    response: req.body
                })
            } catch (error) {
                res.status(500).json({ message: 'Error with DB', error })
            }
            break
        default:
            res.status(404).json({ message: 'Route not found' })
    }
}
