import { useRef } from "react";
import Card from "./Card";
import { useState } from "react";
import Store from "./Store";
import { useDispatch, useSelector } from "react-redux";
import { cardNumberChange } from "./Cardslice";
import {changecardname} from "./CardNameslice"
import {changeCardDate} from "./CardDateslice"


export default function App(){
     const dispatch=useDispatch()   
    const a = useSelector(state=>state.CardNumber.value)
    
    // console.log(a)
    let cardNumberbox=useRef()
    let cardNamebox = useRef()
    let cardDatebox=useRef()
    const [cardNumber,setcardNumber]=useState([])

    const userCardValue=()=>{
        dispatch(cardNumberChange(cardNumberbox.current.value))
    }

    const usercardName=()=>{
        dispatch(changecardname(cardNamebox.current.value))
    }

    const changeDate=()=>{
        dispatch(changeCardDate(cardDatebox.current.value))
    }
    

    return <div>
        <div className="container">
        <h1 className="alert-primary text-center">Credit card app</h1>
        <Card/>
        <div className="d-flex justify-content-center mt-4">
            <div>
                <input type="number" placeholder="Card Number" ref={cardNumberbox} className="form-control" onChange={userCardValue} style={{width:'350px'}} />
            </div>
            {/* {console.log(cardNumber)} */}
        </div>

        <div className="d-flex justify-content-center mt-4">
            <div>
                <input type="text" placeholder="Your Name" className="form-control" ref={cardNamebox} onChange={usercardName} style={{width:'350px'}} />
            </div>
        </div>
        
        <div className="d-flex justify-content-center mt-4">
            <div>
                <input type="month" className="form-control" style={{width:'350px'}} ref={cardDatebox} onChange={changeDate} />
            </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
            <div>
                <input type="number" placeholder="CVV" className="form-control" style={{width:'350px'}} />
            </div>

        </div>
        </div>
    </div>
}



