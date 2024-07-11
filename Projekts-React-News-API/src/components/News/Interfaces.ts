export interface INews {
    status:       string;
    totalResults: number;
    articles:     IArticle[];
}

export interface IArticle {
    source:      ISource;
    author:      null | string;
    title:       string;
    description: null | string;
    url:         string;
    urlToImage:  null | string;
    publishedAt: Date;
    content:     string;
}

export interface ISource {
    id:   ID | null;
    name: string;
}

export enum ID {
    BusinessInsider = "business-insider",
    Time = "time",
    Wired = "wired",
}
