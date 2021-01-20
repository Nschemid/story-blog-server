const STORY_ID_1 = '1234';
const STORY_ID_2 = '2345';
const STORY_ID_3 = '3456';

const USER_ID_1 = '1234';

module.exports.stories = [{
    id: STORY_ID_1,
    title: 'The Cool People Story',
    text: 'Sometimes the cool people turn green',
    date: Date.now,
    tag: ['234', '455'],
    userId: USER_ID_1,
}, 
{
    id: STORY_ID_2,
    title: 'Programmers Unite',
    text: 'Lets get united!!',
    date: Date.now,
    tag: ['655', '899'],
    userId: USER_ID_1,
}, {
    id: STORY_ID_3,
    title: 'Code crazies',
    text: 'Hackathon fever!!',
    date: Date.now,
    tag: ['655', '899', '788'],
    userId: USER_ID_1,
}];

module.exports.tags = [{
    id: '234',
    title: 'fun',
    
}, 
{
    id: '455',
    title: 'true story',
    
},
{
    id: '655',
    title: 'learn',
    
},
{
    id: '899',
    title: 'code',
    
},
{
    id: '788',
    title: 'hackthon',
    
},];

module.exports.users = [{
    id: USER_ID_1,
    name: 'Natascha Leal Schemid',
    
},];