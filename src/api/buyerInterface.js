import instance from './axios'
//get all product v1
export const listProduct = async () => instance.get('/v1/getAllProduct')
//get all product v1
export const listProductv2 = async () => instance.get('/v2/getAllProduct')
//get product detail v1
export const productDetail = async (argument) => instance.post('/v1/getDetailProduct', argument)
//get review
export const getReview = async (argument) => instance.post('/v1/getReviewProduct',argument)
//payment
export const payment = async (argument) => instance.post('/v2/order',argument)
