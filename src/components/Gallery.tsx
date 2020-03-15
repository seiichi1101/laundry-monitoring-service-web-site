import React from 'react';
import { useSelector } from 'react-redux';
import ImageGallery from 'react-image-gallery';

export function MyGallery() {
  const images = useSelector((state: any) => state.Reducer.images);

  let showImgList: any[] = []
  images.forEach((element: String) => {
    showImgList.push(
      {
        original: element,
        thumbnail: element,
        description: element
      }
    )
  });

  return (
    <ImageGallery
      items={showImgList}
      slideInterval={5}
    />
  )
}
