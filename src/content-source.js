export const CONTENT_SOURCES = {
    reddit: {
        url: 'https://www.reddit.com/r/{subreddit}/hot.json?limit=25',
        subreddits: ['politics', 'science', 'news', 'changemyview', 'unpopularopinion'],
        rateLimit: 60, // requests per minute
        fallback: true
    },
    
    hackernews: {
        url: 'https://hacker-news.firebaseio.com/v0/topstories.json',
        itemUrl: 'https://hacker-news.firebaseio.com/v0/item/{id}.json',
        rateLimit: 100,
        fallback: true
    },
    
    rss: {
        feeds: [
            'https://feeds.bbci.co.uk/news/rss.xml',
            'https://rss.cnn.com/rss/edition.rss',
            'https://feeds.reuters.com/reuters/topNews'
        ],
        parser: 'rss-parser',
        fallback: true
    },
    
    youtube: {
        // Using YouTube's oEmbed API for comment access
        url: 'https://www.youtube.com/oembed?url=',
        rateLimit: 50,
        fallback: false // Comments require special handling
    }
};
