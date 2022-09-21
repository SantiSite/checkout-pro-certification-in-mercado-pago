import mercadopago from 'mercadopago'

export default mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_OF_MERCADO_PAGO,
    integrator_id: process.env.INTEGRATOR_ID_MERCADO_PAGO
})
