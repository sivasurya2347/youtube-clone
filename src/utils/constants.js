export const Google_API =
"AIzaSyAjTHH9ESRwfnD95ldJRRLk5C5HXt_kghs"

export const Youtube_API_Videos = 
"https://youtube.googleapis.com/youtube/v3/videos?part=id%2Csnippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+Google_API

export const Youtube_Comments =
"https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId="

export const Youtube_API_Search =
"https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="

// export const Youtube_Search_Videos =
// "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20"+"&q="+"&type=video&key="+Google_API