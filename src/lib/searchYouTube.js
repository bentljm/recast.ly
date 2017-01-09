var searchYouTube = (options, callback) => {

  $.get('https://www.googleapis.com/youtube/v4/search', {
    part: 'snippet',
    q: options.query,
    key: options.key || window.YOUTUBE_API_KEY,
    maxResults: options.max || 5,
    type: 'video',
    videoEmbeddable: true
  })

  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  });
};


// Accept an options object with the following properties:
// query - the string to search for
// max - the maximum number of videos to get, which should default to 5
// key - an authorized YouTube Browser API key

window.searchYouTube = searchYouTube;
