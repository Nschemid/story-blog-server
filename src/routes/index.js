import { helloRoute } from './helloRoute';
import {getAllStoriesRoute}  from './getAllStoriesRoute'

export {protectRoute} from './protectRoute'

export const routes = [ 
    {
        route: helloRoute,
        private: true
    },

    {
        route: getAllStoriesRoute,
        private: false
    },

];