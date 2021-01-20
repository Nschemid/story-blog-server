import { db } from './db'
import { getUser } from './getUser';

// Another way to take advantage of concurrency when 
// we have multiple promises which can be executed 
// simultaneously is to await a Promise.all().

// We can pass an array of promises as the argument 
// to Promise.all(), and it will return a single promise. 

export const getAllStories = async () => {
    const connection = db.getConnection();
    const stories = await connection.collection('stories').find({}).toArray();
    const storyOwner = await Promise.all(
        stories.map(
            story => getUser(story.userId)),
    );
    
    const populatedStories = stories.map(
        (story, i) => ({
            ...story,
            owner: storyOwner[i],
        }));

    return populatedStories;
}
