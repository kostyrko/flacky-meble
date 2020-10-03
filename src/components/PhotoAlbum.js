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
    <div className="photo-album">
      <h2>{title}</h2>
      <ul className="photo-list">
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


// TODO wprowadzic zdjęcia o małej rozdzielczości, a następnie powiększanie do medium po kliknięciu
// * url of a Small img -> _m.jpg
// https://live.staticflickr.com/65535/50323994487_2fe51a825d_m.jpg
// * ulr of Medium img
// https://live.staticflickr.com/65535/50323994487_2fe51a825d.jpg
