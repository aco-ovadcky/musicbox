import { writable } from 'svelte/store';
import config from '../assets/boards.json'

export type SoundBoard = {
    title: string,
    audio: HTMLAudioElement,
    borderColor: string,
    backgroundColor: string,
}

export const boards = writable([] as SoundBoard[]);
let loaded = false;

export const fetchBoards = async () => {
    if (loaded) return;
    const results = config.map(element => {
        const url = `/audio/${element.name}.mp3`;
        const audio = new Audio(url);
        audio.loop = true;
        return {
            title: element.name,
            audio: audio,
            borderColor: element.borderColor,
            backgroundColor: element.backgroundColor,
        }
    })
    boards.set(results);
    loaded = true;
}




