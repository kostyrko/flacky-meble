import React, { useState, useEffect } from "react";
import PhotoAlbum from "./PhotoAlbum.js";
import { getAlbums } from '../api';

const PortfolioPage = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums()
      .then((data) => {
        // * GET all album IDs
        const albumsTemp = [];
        data.photosets.photoset.forEach((elem) => {
          albumsTemp.push({
            id: elem.id,
            title: elem.title._content,
          });
        });
        setAlbums(albumsTemp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="portfolio">
      <div className="portfolio-container">
        <div className="albums-container">
          {albums.length > 0
            ? albums.map((elem) => {
                return <PhotoAlbum key={elem.id} albumId={elem} />;
              })
            : null}
        </div>
      </div>
    </main>
  );
};

export default PortfolioPage;

// get all photos with urls
// https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=0fdf2fb844ae7522e3cb66f51d688f90&user_id=190195340@N08&extras=url_m&format=json

// get info on all albums
// https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=0fdf2fb844ae7522e3cb66f51d688f90&user_id=190195340@N08&format=json

// get photos with url from a specific dataset
// https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0fdf2fb844ae7522e3cb66f51d688f90&photoset_id=72157715905192381&user_id=190195340@N08&extras=url_m&format=json&nojsoncallback=?
