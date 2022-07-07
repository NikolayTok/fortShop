import { useEffect, useState } from "react"
import { API_KEY, API_URL } from "../config"
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList'
import { Cart } from "./Cart";


function Shop() {

    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY
            },
        })
            .then(res => res.json())
            .then((data) => {
                data.shop && setGoods(data.shop)
                setLoading(false)
            })

    }, [])

    const addToBasket = (item) => {
        const orderIndex = order.findIndex(itemIndex => item.mainId === itemIndex.mainId)
        if (orderIndex < 0) {
            const newItem = {
                ...item,
                count: 1
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === orderIndex) {
                    return {
                        ...orderItem,
                        count: orderItem.count + 1
                    }
                } else {
                    return orderItem
                }
            })
            setOrder(newOrder)
        }
    }


    return <>
        <main className="container content">
            <Cart count={order.length} />
            {
                loading ? <Preloader /> : <GoodsList addToBasket={addToBasket} goods={goods} />
            }
        </main>
    </>
}

export { Shop }