import React from 'react';
import { useState, useEffect} from 'react';
// import { api_name_covid } from '../Common/constants';
import { getCovidData } from '../Common/Services';

const CoronaReport = () => {
    const [data, setData] = useState([]);

    // const getCovidData = async() => {
    //     try{
    //         const result  = await fetch(api_name_covid);
    //         const actualData = await result.json();
    //         console.log(actualData.statewise[0]);
    //         setData(actualData.statewise[0]);
    //     } catch(err){
    //         console.log(err);
    //     }
    // }    
    // useEffect(() =>{
    //     getCovidData();
    // }, []);


const getCovidDataFromServer=async()=>{
    try {
        let res=await getCovidData();
        // console.log(res.statewise[0])
        setData(res.statewise[0]);
        
    } catch (error) {
        console.log(error);       
    }
}

    useEffect(()=>{
    getCovidDataFromServer()
    },[])
    return (
        <>
            <div className='corona-section pt-100'>
                <div className='container'>
                    <ul>
                        <li>
                            <div className='corona-card'>
                                <h4 className='corona-text'><span> Our </span> Country</h4>
                                <h1 className='corona-number'>India</h1>
                            </div> 
                        </li>
                        <li>
                            <div className='corona-card'>
                                <h4 className='corona-text'><span> Total </span> Recovered</h4>
                                <h1 className='corona-number'>{data.recovered}</h1>
                            </div> 
                        </li>
                        <li>
                            <div className='corona-card'>
                                <h4 className='corona-text'><span> Total </span> Confirmed</h4>
                                <h1 className='corona-number'>{data.confirmed}</h1>
                            </div> 
                        </li>
                        <li>
                            <div className='corona-card'>
                                <h4 className='corona-text'><span> Total </span> Death</h4>
                                <h1 className='corona-number'>{data.deaths}</h1>
                            </div> 
                        </li>
                        <li>
                            <div className='corona-card'>
                                <h4 className='corona-text'><span> Total </span> Active</h4>
                                <h1 className='corona-number'>{data.active}</h1>
                            </div> 
                        </li>
                        <li>
                            <div className='corona-card'> 
                                <h4 className='corona-text'><span> Last </span> Updated</h4>
                                <h1 className='corona-number'>{data.lastupdatedtime}</h1>
                            </div> 
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CoronaReport;
