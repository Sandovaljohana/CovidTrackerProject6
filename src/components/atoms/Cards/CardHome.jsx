import React from "react";
import './cardHome.css';

const CardHome = (props) => {

    return (

        <>

            <div className="cardContainer">
                <div className='bg-white rounded-lg mt-8 md: h-28 w-96 flex flex-row'>

                    <div className='w-36 min-h-16 mt-5 ml-4 mr-2 '>
                        <img className='md:max-w-40 max-h-16 border-slate-800 border' src={props.imgFlagsValue} alt="" />
                    </div>

                    <div className='max-w-fit h-3/4 pl-auto my-3 flex flex-col'>

                        <div className='text-rose-700 w-auto h-8 mx-2 my-2 flex flex-col md:max-w-fit text-3xl text-end'>
                            <h2>{props.textCardCasesValue}</h2>
                        </div>

                        <div className='w-auto h-8 mx-2 my-2 flex flex-row'>

                            <div className='text-black'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                            </svg>
                            </div>


                            <div className='rounded bg-amber-500 text-white w-auto mx-2 p-2 text-center'>{props.textCardDeathsValue}</div>

                            <div className='rounded bg-green-400  text-white w-auto mx-2 p-2'>{props.textCardRecoveredValue}</div>

                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default CardHome
