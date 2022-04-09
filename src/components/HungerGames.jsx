import React, { useEffect, useState } from 'react'
import styles from '../style/styles.css'


const HungerGames  = () => {

    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState(10)
    
    
    

    const getDetails = async() => {
        await fetch(`http://localhost:3001/RestaurantDetails?_page=${page}&_limit=${limit}`)
        .then((d) => d.json())
        .then((res) =>{
            setList(res);
            console.log(res);
        })
    }
    const low = async () =>{
        await fetch(`http://localhost:3001/RestaurantDetails?_page=${page}&_limit=${limit}`)
        .then((d) => d.json())
        .then((res) =>{
            let result = res.sort((a,b) => {
                
                return a.cost_of_one - b.cost_of_one
            })
            setList(result);
        })
    }

    const high = async () =>{
        await fetch(`http://localhost:3001/RestaurantDetails?_page=${page}&_limit=${limit}`)
        .then((d) => d.json())
        .then((res) =>{
            let result = res.sort((a,b) => {
                
                return b.cost_of_one - a.cost_of_one
            })
            setList(result);
        })
    }

    const one = async () => {
        await fetch(`http://localhost:3001/RestaurantDetails?_page=${page}&_limit=${limit}`)
        .then((d) => d.json())
        .then((res) =>{
            let result = res.filter((item)=>{
                return item.rating >= 1
            })
            setList(result)
        })
    }

    const two = async () => {
        await fetch(`http://localhost:3001/RestaurantDetails?_page=${page}&_limit=${limit}`)
        .then((d) => d.json())
        .then((res) =>{
            let result = res.filter((item)=>{
                return item.rating >= 2
            })
            setList(result)
        })
    }

    const three = async () => {
        await fetch(`http://localhost:3001/RestaurantDetails?_page=${page}&_limit=${limit}`)
        .then((d) => d.json())
        .then((res) =>{
            let result = res.filter((item)=>{
                return item.rating >= 3
            })
            setList(result)
        })
    }

    const four = async () => {
        await fetch(`http://localhost:3001/RestaurantDetails?_page=${page}&_limit=${limit}`)
        .then((d) => d.json())
        .then((res) =>{
            let result = res.filter((item)=>{
                return item.rating >= 4
            })
            setList(result)
        })
    }

    const cash = async () => {
        await fetch(`http://localhost:3001/RestaurantDetails?_page=${page}&_limit=${limit}`)
        .then((d) => d.json())
        .then((res) =>{
            let result = res.filter((item)=>{
                return item.payment_methods.cash === true
            })
            setList(result)
        })
    }

    const card = async () => {
        await fetch(`http://localhost:3001/RestaurantDetails?_page=${page}&_limit=${limit}`)
        .then((d) => d.json())
        .then((res) =>{
            let result = res.filter((item)=>{
                return item.payment_methods.card === true
            })
            setList(result)
        })
    }

    const upi = async () => {
        await fetch(`http://localhost:3001/RestaurantDetails?_page=${page}&_limit=${limit}`)
        .then((d) => d.json())
        .then((res) =>{
            let result = res.filter((item)=>{
                return item.payment_methods.upi === true
            })
            setList(result)
        })
    }

    const all = async () => {
        await fetch(`http://localhost:3001/RestaurantDetails?_page=${page}&_limit=${limit}`)
        .then((d) => d.json())
        .then((res) =>{
            let result = res.filter((item)=>{
                return item
            })
            setList(result)
        })
    }



    useEffect(()=>{
        getDetails()
    },[page, limit]);

// json-server data.json --port 3001 --watch

    return (
        <div>
            <h3>Price</h3>
            <div>
                <button className="btn" onClick={low} >Low To High</button>
                <button className="btn" onClick={high} >High TO Low</button>
                
            </div>
            <h3>Rating</h3>
            <div>
                <button className="btn" onClick={one}>1*</button>
                <button className="btn" onClick={two}>2*</button>
                <button className="btn" onClick={three}>3*</button>
                <button className="btn" onClick={four}>4*</button>
            </div>
            <h3>Payment Mode</h3>
            <div>
                <button className="btn" onClick={cash}>Cash</button>
                <button className="btn" onClick={card}>Card</button>
                <button className="btn" onClick={upi}>UPI</button>
                <button className="btn" onClick={all}>All</button>
            </div>
            
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
                                    <div>
                                        <span> {e.payment_methods.cash===true ?"cash": ""}</span>
                                        <span> {e.payment_methods.card===true ?"card": ""}</span>
                                        <span> {e.payment_methods.upi===true ?"upi": ""}</span>
                                    </div>
                                </div>
                                <div className="card_right">
                                    <ul style={{
                                        marginBottom:"-10px",
                                        marginLeft:"50px",
                                        padding:"3px",
                                        border:"1px solid black",
                                        backgroundColor:"#689F38",
                                        color: "#fff",
                                        fontWeight:"bold",
                                        borderRadius:"3px",
                                        }}>{e.rating}*</ul>
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
                <button className="btn" onClick={()=>setPage((p)=>p-1)} disabled={loading || page === 1}>Prev</button>
                {/* <span>{page}</span> */}

                <select className="select" value={limit} onChange={(e)=>setLimit(Number(e.target.value))}>
                    <option key="id_1" value={5}>5</option>
                    <option key="id_2" value={10}>10</option>
                    <option key="id_3" value={15}>15</option>
                </select>
                <button className="btn" onClick={()=>setPage((p)=>p+1)} >Next</button>
            </div>
            
        </div>
    )
}

export default HungerGames 