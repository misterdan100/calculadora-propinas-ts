import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])

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

    console.log(order)
    
    return {
        addItem,
        order
    }
}