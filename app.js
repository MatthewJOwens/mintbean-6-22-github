// So, maybe the contribution calendar may not be part of the API after all.
// This disqualifies my project.
// Can still get something working, though.
// Maybe Brittany could use an app that gets contribution graphs from multiple people at once.
// Maybe compare users.
// Maybe have average pushes per day graphs
// Maybe show pie chart of languages

//People who get the contribution calendar (I think via site scraping):
// Embed: https://shellscape.org/2016/08/31/embedding-github-contribution-calendar
// Array of numbers: https://github.com/KaDw/github-calendar-api
// SVG screenshot (no dates): https://gist.github.com/jcouyang/6336168ecbbf4fbdc46e

// Custom calendar like Github's
// https://github.com/julienr114/vue-calendar-heatmap
// https://github.com/topics/calendar-heatmap
// https://github.com/kevinsqi/react-calendar-heatmap

// ref: https://mintbean.io/project/506f7411-bdb1-4d34-b925-260e0d90589b for "languages they code in"
// he uses React and fetch to get from /users/:username/repos then gets res.json() and if exists and > 0, new Map() and then a forEach(repo), if language, map.set(language, map.get(language)+1) else map.set(language, 1)
//He also uses setFetching(true) and (false) but I don't see a while(setFetching) anywhere, maybe this is a React thing