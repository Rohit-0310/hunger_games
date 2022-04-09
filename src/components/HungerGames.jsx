import React, { useEffect, useState } from 'react'
import styles from '../style/styles.css'


const HungerGames  = () => {

    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState(5)
    
    useEffect(()=>{
        getDetails(page, limit)
    },[page, limit]);

    const getDetails = (page, limit) => {
        fetch(`http://localhost:3001/RestaurantDetails?_page=${page}&_limit=${limit}`)
        .then((d) => d.json())
        .then((res) =>{
            setList(res);
            console.log(res);
        })
    }


// json-server data.json --port 3001 --watch

    return (
        <div>
            
            <div className="main">
                
                {list.map((e) => (
                    <div className="card">
                        <div className="card_1">
                            <div className="card_img">
                                <img width="170px" height="120px" src={e.image} alt={e.name}/>
                            </div>
        
                            <div className="card_1_1">
                                <div className="card_left">
                                    <p className="card_name" style={{marginBottom:"-10px"}}>{e.name}</p>
                                    <span  className="categories">{e.categories.map((c) => (
                                        <span>
                                            <p style={{marginBottom:"-10px"}}>{c}</p>
                                        </span>
                                    ))}
                                    </span>
                                    <p style={{marginBottom:"-10px"}}>Cost ₹{e.cost_of_one} for one</p>
                                    <div style={{display: 'flex'}}>
                                        <p>Min ₹{e.min_amount} .</p>
                                        <p>Up to{e.del_time} min</p>
                                    </div>
                                </div>
                                <div className="card_right">
                                    <p style={{marginBottom:"-10px"}}>{e.rating}</p>
                                    <p style={{marginBottom:"-10px"}}>{e.total_votes} votes</p>
                                    <p style={{marginBottom:"-10px"}}>{e.reviews} reviews</p>
                                </div>
                                {/* <p>Cash Back ₹{e.cash_back}</p> */}
         
                            </div>
                        </div>
                        <div className="card_2">
                            <span className="card_2_1">
                                Order Online ► 
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <select value={limit} onChange={(e)=>setLimit(Number(e.target.value))}>
                    <option key="id_1" value={5}>5</option>
                    <option key="id_2" value={10}>10</option>
                    <option key="id_3" value={15}>15</option>
                </select>
                <button onClick={()=>setPage((p)=>p-1)} disabled={loading || page === 1}>Prev</button>
                <span>{page}</span>
                <button onClick={()=>setPage((p)=>p+1)} >Next</button>
            </div>
            
        </div>
    )
}

export default HungerGames 