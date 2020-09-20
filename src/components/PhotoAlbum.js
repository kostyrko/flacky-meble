import React, {useEffect, useState} from 'react';
import {getAlbumPhotos} from './api'


const PhotoAlbum = ({albumId}) => {
  const [photsUrls, setPhotosUrls] = useState([])
  const {id, title} = albumId

  useEffect(() => {
    getAlbumPhotos(id)
    .then(data=> { 
      const urlsTemp = [];
      data.photoset.photo.forEach(elem=>
        { 
          urlsTemp.push(
            elem.url_m
          )            
        }
      );
      setPhotosUrls(urlsTemp);
    })
    .catch(err=>{
      console.log(err);
    })
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      {/* <p>{photsUrls}</p> */}
      <ul>
        {photsUrls.map((elem,i)=>
          <li key={i}>
            <img src={elem} alt=""/>
          </li>
        )}
      </ul>
    </div>
  );
}

export default PhotoAlbum;

// TODO: url of a Small img -> _m.jpg
// https://live.staticflickr.com/65535/50323994487_2fe51a825d_m.jpg
// TODO: ulr of Medium img
// https://live.staticflickr.com/65535/50323994487_2fe51a825d.jpg
