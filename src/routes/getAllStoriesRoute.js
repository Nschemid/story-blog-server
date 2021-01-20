import {getAllStories} from '../db'

export const getAllStoriesRoute =  {
    method: 'get',
    path: '/stories',
    handler: async (req, res) => {
        const stories = await getAllStories();
        res.status(200).json(stories);
    },
};
