const apiKey = '0fdf2fb844ae7522e3cb66f51d688f90'
const userId = '190195340@N08'
const sizeMedium = `url_m`
const apiAlbums = `https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${apiKey}&user_id=${userId}&format=json&nojsoncallback=?`

export const getAlbums= () => {
  return fetch(apiAlbums)
    .then(response=>{
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Błąd sieci')
      }
    })
}



export const getAlbumPhotos = photoset => {
  const albumPhotos = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&photoset_id=${photoset}&user_id=${userId}&extras=${sizeMedium}&format=json&nojsoncallback=?`
  return fetch(albumPhotos)
    .then(response=>{
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Błąd sieci')
      }
    })

}





// https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0fdf2fb844ae7522e3cb66f51d688f90&photoset_id=72157715905192381&user_id=190195340@N08&extras=url_m&format=json&nojsoncallback=?