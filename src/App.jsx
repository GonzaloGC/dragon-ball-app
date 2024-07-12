import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
export const App = () => {
  const [data, setData] = useState('')
  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters?page=2&limit=10')
      .then((resp) => (resp.json()))
      .then((data) => setData(data.items))
  }, [])
  return (
    <>
      <main>
        {data &&
          data.map((fight) => (
            <div className='card' key={uuidv4()}>
              <h1>{fight.name}</h1>
              <img src={fight.image} alt="" />
            </div>
          ))}
      </main>
    </>
  )
}
