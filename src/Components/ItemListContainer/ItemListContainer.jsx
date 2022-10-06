import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../asyncMock'
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    const { categoryId } = useParams()

    useEffect(() => {
        getProducts(categoryId).then(products => {
            setProducts(products)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if(loading) {
        return <h1> Loading... </h1>
    }

    return (
        <>
        <div>
            <h1> TODOS LOS PRODUCTOS </h1>
            <ItemList products={products}/>
        </div>
        </>
    )
}
