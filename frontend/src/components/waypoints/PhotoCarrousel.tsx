import React, { FC, useEffect, useRef, useState } from 'react'

type CarrouselProps = {
  photos: Array<string>
}

const PhotoCarrousel: FC<CarrouselProps> = ({ photos }) => {
  const [idx, setIdx] = useState(0)
  const intervalRef = useRef<any>(null)
  const clearRef = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }
  useEffect(() => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setIdx((idx + 1) % photos.length)
      }, 2000)
    }
    return clearRef
  }, [idx, setIdx, photos.length])

  return (
    <div className="h5 w-100">
      <img
        className="h-100 w-auto center db"
        src={`https://res.cloudinary.com/marcelotokarnia/image/fetch/w_400,h_210,c_fill,f_auto/${photos[idx]}`}
      />
    </div>
  )
}

export default PhotoCarrousel
