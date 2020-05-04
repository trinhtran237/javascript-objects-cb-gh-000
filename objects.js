var playlist = {
  nameArtist: 'sdfjsh'
}
function updatePlaylist(playlist, artistName, songTittle){
  return Object.assign(playlist, {[artistName]: songTittle});
}
