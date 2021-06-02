import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect } from "react";
import {fetchRate} from "../redux/actions";

const ExchangeRate = () => {
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(fetchRate('20210602'))
    },[dispatch])
    const rate = useSelector(state => state.myReducer.rate );
    console.log(rate)
    return (
        <div className='er-container'>
            <div className="digits">
                 UAH exchange rate -
            </div>
        </div>
    );
};

export default ExchangeRate;