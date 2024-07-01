import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

const OrderTotals = ({order, tip, placeOrder}: OrderTotalsProps) => {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])

    const tipAmount = useMemo(() => subtotalAmount * tip, [order, tip])

    const totalAmount = useMemo(() => tipAmount + subtotalAmount, [order, tip])

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totals and Tips:</h2>
            <p>Subtotal to Pay:
                <span className="font-bold"> {formatCurrency(subtotalAmount)}</span>
            </p>
            <p>Tip:
                <span className="font-bold"> {formatCurrency(tipAmount)}</span>
            </p>
            <p>Total to Pay:
                <span className="font-bold"> {formatCurrency(totalAmount)}</span>
            </p>
        </div>

        <button
            className={`w-full bg-black p-3 uppercase text-white font-bold mt-10 rounded-lg hover:bg-gray-900 transition-all disabled:opacity-10`}
            disabled={totalAmount === 0}
            onClick={placeOrder}
        >
            Guardar Orden
        </button>
    </>
  )
}

export default OrderTotals