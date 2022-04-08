import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';

function ProductImage(props) {
    const [Images , setImages ] = useState()
    useEffect(()=>{
       if( props.product.images && props.product.images >0 ){
           let images =[]

           props.product.images && props.product.images.map(item => {
               images.push({
                original: `https://localhost:3000/${item}`,
                thumbnail: `https://localhost:3000/${item}`
               })
           })
           setImages(images)
       }
    })
  return (
    <div>
      <ImageGallery items={Images}/>
    </div>
  )
}

export default ProductImage
