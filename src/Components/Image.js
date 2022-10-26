import { useState, useEffect } from "react"
import axios from 'axios'

function Image() {
    const [ images, setImages] = useState([])

useEffect(() => {
    axios.get('https://avatars.dicebear.com/api/avataaars/:seed.svg').then((res) => {
        setImages(res.data)
    })
},[])

  return (
    <div>
        {images.map(image => (
          {setImages}
        ))}
    </div>
  )
}

export default Image
