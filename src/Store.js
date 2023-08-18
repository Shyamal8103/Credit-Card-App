import { configureStore } from "@reduxjs/toolkit"; 
import Cardslice from "./Cardslice";
import CardNameslice from "./CardNameslice";
import CardDateslice from "./CardDateslice";
const Store = configureStore({
    reducer : {
        CardNumber : Cardslice,
        CardName : CardNameslice,
        CardDate : CardDateslice

    }
})

export default Store