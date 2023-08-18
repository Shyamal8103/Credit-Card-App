import { useState } from "react"
import { useSelector } from "react-redux"

export default function Card(cfun){
        const data=useSelector(state=>state.CardNumber.value)
        const namedata=useSelector(state=>state.CardName.value)
        const dateData=useSelector(state=>state.CardDate.value)
        console.log(dateData)

        
        // const [data,setdata]=useState('****************')

        return <div className="d-flex justify-content-center mt-5">
        <div className="bg-primary" style={{width:"350px",height:"200px",borderRadius:'20px'}}>
        <div className="row d-flex justify-content-between" style={{flexDirection:'row'}}>
                <div className="col-lg-6 col-sm-6 mt-2" style={{left:'30px',justifyContent:'center',alignItems:'center',top:'10px'}}>
                    <img src="./chip2.jpg" width={35} height={30} />
                </div>
                <div className="col-lg-6 col-sm-6" style={{display:'flex',justifyContent:"flex-end",alignItems:'center',top:'15px',right:'20px'}}>
                    <img src="./visa1.jpg" alt="" style={{width:'100px',height:"40px"}} />
                </div>
            </div>
            <div className="row mt-5 ml-4">

                <div><h3>{data.slice(0,4)}  {data.slice(4,8)}  {data.slice(8,12)}  {data.slice(12,16)} </h3></div>
                
            </div>
            <div className="row ml-2">
                <div className="col-lg-8 col-sm-8">
                    <b>{namedata.toUpperCase()}</b>
                </div>
                <div className="col-lg-4 col-sm-4">
                    <div>
                        <b>valid Upto</b>
                    </div>
                    <div><b>{dateData[0]}/{dateData[1]}</b></div>
                </div>
            </div>

        </div>
        
    </div>
}