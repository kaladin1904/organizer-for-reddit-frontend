export class SavedPost {
    name: string;
    author:string;
    ups: string;
    total_awards_received: string;
    subreddit_name_prefixed: string;
    title: string;
    thumbnail: string;
    subreddit_type: string;
    permalink: string;
    num_comments: number;

    constructor
        (
        user: string,
        author: string,
        upvotes: string,
        awards: string,
        subredditName: string,
        title: string,
        thumbnailLink: string,
        subredditType: string,
        permalink: string,
        num_comments: number){
            this.name = user;
            this.author = author;
            this.ups = upvotes;
            this.total_awards_received = awards;
            this.subreddit_name_prefixed = subredditName;
            this.title = title;
            this.thumbnail = thumbnailLink;
            this.subreddit_type = subredditType;
            this.permalink = permalink;
            this.num_comments = num_comments;

        }
}
