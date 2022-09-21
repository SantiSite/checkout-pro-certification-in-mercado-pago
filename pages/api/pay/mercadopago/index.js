import '../../../../utils/mercadoPago'
import mercadopago from 'mercadopago'

export default function PayWithMercadoPago(req, res) {
    const { body, method } = req
    const { title, unit_price, quantity, picture_url } = body

    switch (method) {
        case 'POST':
            let preference = {
                items: [
                    {
                        id: 1234,
                        title,
                        description: 'Dispositivo móvil de Tienda e-commerce',
                        picture_url,
                        unit_price: parseInt(String('10000')),
                        quantity: parseInt(String(quantity))
                    }
                ],
                payer: {
                    name: 'Lalo',
                    surname: 'Landa',
                    email: process.env.USER_EMAIL,
                    phone: {
                        area_code: '11',
                        number: 3233866281
                    },
                    address: {
                        street_name: 'Falsa',
                        street_number: 123,
                        zip_code: '170004'
                    }
                },
                external_reference: 'santiagorv246@gmail.com',
                back_urls: {
                    success:
                        'https://checkout-pro-certification-in-mercado-pago-7l0dkvdrc-santisite.vercel.app/payment/success',
                    pending:
                        'https://checkout-pro-certification-in-mercado-pago-7l0dkvdrc-santisite.vercel.app/payment/pending',
                    failure:
                        'https://checkout-pro-certification-in-mercado-pago-7l0dkvdrc-santisite.vercel.app/payment/failure'
                },
                auto_return: 'approved',
                payment_methods: {
                    excluded_payment_methods: [{ id: 'visa' }],
                    installments: 6
                },
                notification_url:
                    'https://checkout-pro-certification-in-mercado-pago-7l0dkvdrc-santisite.vercel.app/api/pay/mercadopago/notification'
            }
            mercadopago.preferences
                .create(preference)
                .then(response => {
                    global.id = response.body.id
                    return res.status(201).json({
                        id: response.body.id,
                        message: 'preference created'
                    })
                })
                .catch(error => {
                    return res.status(500).json({
                        message: 'internal server error'
                    })
                })
            break
        default:
            res.status(404).json({ message: 'route not found' })
    }
}
