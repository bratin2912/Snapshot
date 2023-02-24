import React from 'react'
import Search from './Search';
import { useGlobalContext } from '../Context/Context';

const Beaches = () => {
  const { data, isLoading } = useGlobalContext();
  if (isLoading) {
    <>
      <Search />
      <h1>Loading...</h1>
    </>
  }

  return (
    <>
      <Search />
      <div className='img-container'>
        {data?.data?.photos?.photo.map((ele) => {
          return (
            <img key={ele.id} src={`https://live.staticflickr.com/${ele.server}/${ele.id}_${ele.secret}.jpg`} alt="food" />
          )
        })}
      </div>
    </>
  )
}

export default Beaches