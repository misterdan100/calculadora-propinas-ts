type TipPercentageFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>
}

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

const TipPercentageForm = ({setTip}: TipPercentageFormProps) => {


  return (
    <div>
        <h3 className="font-black text-2xl">Tips:</h3>

        <form 
        >
            {tipOptions.map(tip => (
                <div 
                className="flex gap-2"
                key={tip.id}
                >
                <label htmlFor={tip.id}>{tip.label}</label>
                <input 
                    type="radio" 
                    id={tip.id}
                    name="tip"
                    value={tip.value}
                    onChange={e => setTip(+e.target.value)}
                />
            </div>

            ))}

        </form>
    </div>
  )
}

export default TipPercentageForm