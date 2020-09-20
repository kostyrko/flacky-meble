import React, {useState, useEffect} from 'react';

const apiKey = '0fdf2fb844ae7522e3cb66f51d688f90'
const userId = '190195340@N08'
const sizeMedium = `url_m`
const apiAlbums = `https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${apiKey}&user_id=${userId}&format=json&nojsoncallback=?`
// const apiAlbumPhotos = 

const Portfolio = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    fetch(apiAlbums)
    .then(response=>{
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Błąd sieci')
      }
    })
    .then(data=> {
      // console.log('all data->', data);
      // console.log('photoset',data.photosets.photoset);
      // * GET all album IDs
      data.photosets.photoset.forEach(elem=>
        // console.log(elem.id)
        setAlbums(prev=>[...prev,elem.id])
        )
    })
    .catch(err=>{
      console.log(err);
    })
  }, []);

  console.log(albums);
  return (
    <div>
      Portfolio
    </div>
  );
}

export default Portfolio;

// get all photos with urls
// https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=0fdf2fb844ae7522e3cb66f51d688f90&user_id=190195340@N08&extras=url_m&format=json

// get info on all albums
// https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=0fdf2fb844ae7522e3cb66f51d688f90&user_id=190195340@N08&format=json


// get photos with url from a specific dataset
// https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0fdf2fb844ae7522e3cb66f51d688f90&photoset_id=72157715905192381&user_id=190195340@N08&extras=url_m&format=json