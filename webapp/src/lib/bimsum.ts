import {data} from './bimsum.json'
type bimtype = 'word' | 'sentence' | 'paragraph' | 'story';

function getSentence() { 
    return data[Math.floor(Math.random() * data.length)];
}

function getParagraph() {
    let result = [];
    const length = Math.floor(Math.random()*3+4);
    for (let i = 0; i< length; i++) {
        result.push(getSentence());
    }
    return result;
}
function getStory() {
    let result = [];
    const length = Math.floor(Math.random()*3+4);
    for (let i = 0; i< length; i++) {
        result.push(getParagraph());
        result.push('\n\n');
    }
    return result;
}

export function bimsum(type:bimtype) {
    
    const randomWordList = getSentence().split(' ');

    return {
        ['word']: randomWordList[Math.floor(Math.random() * randomWordList.length)],
        ['sentence']: getSentence(),
        ['paragraph']: getParagraph(),
        ['story']: getStory()
    }[type];
}