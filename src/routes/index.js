import { helloRoute } from './helloRoute';
import {getAllStoriesRoute}  from './getAllStoriesRoute'

export {protectRoute} from './protectRoute'

export const routes = [ 
    helloRoute,
    getAllStoriesRoute
];