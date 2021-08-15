const TweetCounts = require('./tweetCounts')

test('test case 1', () => {
    const tweetCounts = new TweetCounts()
    tweetCounts.recordTweet('tweet3', 0)
    tweetCounts.recordTweet('tweet3', 60)
    tweetCounts.recordTweet('tweet3', 10)
    const res1 = tweetCounts.getTweetCountsPerFrequency(
        'minute',
        'tweet3',
        0,
        59
    )

    const res2 = tweetCounts.getTweetCountsPerFrequency(
        'minute',
        'tweet3',
        0,
        60
    )
    tweetCounts.recordTweet('tweet3', 120)
    const res3 = tweetCounts.getTweetCountsPerFrequency(
        'hour',
        'tweet3',
        0,
        210
    )
    expect(res1).toEqual([2])
    expect(res2).toEqual([2, 1])
    expect(res3).toEqual([4])
})
