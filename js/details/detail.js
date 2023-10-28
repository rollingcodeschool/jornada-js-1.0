import { getTalksLS } from "../chatLS"

const createTalkDescription = () => {
    const mainContainer = document.getElementById('main-content');
    const titleTalk = document.getElementById('title-talk');
    const imgTalk = document.getElementById('img-talk');
    const speaker = document.getElementById('talk-speaker');
    const description = document.getElementById('talk-description');

    titleTalk.innerText = talk.title;
    imgTalk.src = talk.image;
    imgTalk.classList.add('img-detail');
    speakerTalk.innerText = talk.speaker;
    description.innerText = talk.description;

}

document.addEventListene("DOMContentLoaded",()=>{
    const talk = sessionStorage.getItem('charlaselec');

    if(talk){
        const talks = JSON.parse(talk)
        createTalkDescription(talks);
    }
})



