import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem):void  => {
        const itemExist = order.findIndex(orderItem => item.id === orderItem.id)

        if(itemExist >= 0) {
            const newOrder: OrderItem[] = [...order]
            newOrder[itemExist].quantity++
            setOrder(newOrder)
        } else {
            const newItem: OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
        
    }

    const removeItem = (id: MenuItem['id']): void => {
        setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }
    
    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}