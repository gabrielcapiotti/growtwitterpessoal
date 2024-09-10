import { useEffect, useState } from "react";
import Avatar from "../Modal/Avatar";
import { TweetEstilo } from "./TweetEstilo";
import { TweetCardEstilo } from "./CardTweetEstilo";
import { CoracaoTweet } from "./CoracaoTweet";
import { doDel, doGet, doPost } from "../../services/api";

interface TweetsProps {
    user: boolean;
}

interface Tweet {
    id: string;
    content: string;
    user: {
        id: string;
        name: string;
        username: string;
    };
    likes: { id: string; userId: string }[];
}

function Tweets({ user }: TweetsProps) {
    const [tweets, setTweets] = useState<Tweet[]>([]);

    const userLogged = JSON.parse(localStorage.getItem('usuário logado!') || '{}');

    async function like(tweet: Tweet) {
        const userLike = tweet.likes.find(like => like.userId === userLogged.id);

        if (userLike) {
            await doDel(`/like/${userLike.id}`, userLogged.token);
        } else {
            await doPost(`/like`, { tweetId: tweet.id, userId: userLogged.id }, userLogged.token);
        }
        getTweets();
    }

    async function getTweets() {
        console.log('Iniciando o get');
        const response = await doGet(`/tweet/${user ? userLogged.id : ''}`, userLogged.token);
        console.log('Depois do Get');
        console.log(response);
        if (response.success) {
            setTweets(response.data);
        }
    }

    useEffect(() => {
        if (userLogged.token) {
            getTweets();
        }
    }, []);

    return (
        <>
            <TweetEstilo>
                {tweets.map(item => (
                    <TweetCardEstilo key={item.id}>
                        <Avatar border={true} width={true} src={item.user.id} />
                        <div>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <b>{item.user.name}</b>
                                <p>@{item.user.username} • 3h</p>
                            </div>
                            <p>{item.content}</p>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a>
                                    <img src={commentTweet} alt="comment-tweet" />
                                    <p>0</p>
                                </a>
                                <a onClick={() => like(item)}>
                                    <CoracaoTweet enable={item.likes.some(like => like.userId === userLogged.id)} />
                                    <p>{item.likes.length}</p>
                                </a>
                            </div>
                        </div>
                    </TweetCardEstilo>
                ))}
            </TweetEstilo>
        </>
    );
}

export default Tweets;
