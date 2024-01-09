import React from 'react'

const CardCases = (props) => {
  return (
   <>
   <div className={`flex flex-row ${props.cardsBgStyle}`}>
    <div>
        <h2 className="primaryColor">{props.cardText}</h2>
    </div>
    <div className="flex justify-end">
    <div className="bg-white">
        <p className="text-gray-300">{props.smallTextValue}</p>
</div>
<div> 

</div>
    </div>
   <p className={`${props.cardDataStyle}`}>{props.globalTextDataValue}</p>
   </div>
   </>
  )
}

export default CardCases