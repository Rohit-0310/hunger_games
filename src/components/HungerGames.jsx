import React, { useEffect, useState } from 'react'



const HungerGames  = () => {

    let [list, setList] = useState([]);

    // let [page, setPage] = useState(1);
    
    useEffect(()=>{
        getDetails()
    },[]);

    const getDetails = () => {
        fetch(`http://localhost:3001/RestaurantDetails`)
        .then((d) => d.json())
        .then((res) =>{
            setList(res);
            console.log(res);
        })
    }


// json-server data.json --port 3001 --watch

  return (
      <div>
          <div>HungerGames </div>
          {list.map((e) => (
              <div className="card">
                  <p>{e.name}</p>
                  <p>{e.total_votes}</p>
                  <p>reviews {e.reviews}</p>
                  <p>rating{e.rating}</p>
                  <p>{e.cost_of_one}</p>
                  <p>{e.del_time}</p>
                  <p>{e.min_amount}</p>
                  <p>{e.cash_back}</p>
                  <img width="90px" src={e.image} alt={e.name}/>
                  <div>{e.categories.map((c) => (
                      <div>
                          <p>{c}</p>
                      </div>
                  ))}</div>
              </div>
          ))}
      </div>
  )
}

export default HungerGames 