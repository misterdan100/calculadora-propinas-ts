import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[]
}

const OrderTotals = ({order}: OrderTotalsProps) => {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totals and Tips:</h2>
            <p>Subtotal to Pay:
                <span className="font-bold"> {formatCurrency(subtotalAmount)}</span>
            </p>
            <p>Tip:
                <span className="font-bold"> $0.00</span>
            </p>
            <p>Total to Pay:
                <span className="font-bold"> $0.00</span>
            </p>
        </div>

        <button>

        </button>
    </>
  )
}

export default OrderTotals