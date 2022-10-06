import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../asyncMock'

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()


    useEffect(() => {
        getProduct(productId).then((product) => {
            setProduct(product)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])
    
    if(loading) {
        return <h1> Loading... </h1>
    }

    return (
        <div>
            <h1> DETALLE DE PRODUCTOS </h1>
            <div>
                <h2>{ product.name }</h2>
                <h3>{ product.category }</h3>
                <p>{ product.price }</p>
                {/* <ItemCount /> */}
            </div>
        </div>
    )
}
