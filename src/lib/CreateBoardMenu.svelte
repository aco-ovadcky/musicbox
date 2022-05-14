<script lang="ts">
import { getContext } from 'svelte';

    import { sineIn } from 'svelte/easing';
    import type { Writable } from 'svelte/store';
    import { fade } from 'svelte/transition';
    import type { SoundBoard } from './SoundBoards';
    export let active: boolean;

    let file: HTMLInputElement;
    let borderColor: HTMLInputElement;
    let backgroundColor: HTMLInputElement;

    let upload = (_: any) => {
        if (file.files.length == 1) {
            const url = URL.createObjectURL(document.getElementsByTagName('input')[0].files[0]);
            const audio = new Audio(url);
            audio.loop = true;
            const newBoard =  {
                title: 'some value',
                audio: audio,
                borderColor: borderColor.value,
                backgroundColor: backgroundColor.value,
            }

            let boards: Writable<SoundBoard[]> = getContext('boards');
            boards.update((b) => [...b, newBoard])
        }
    };
</script>
<div class="absolute w-full h-full bg-black bg-opacity-70"
     transition:fade="{{ duration: 200, easing: sineIn }}"
     on:click|stopPropagation={ (_) => { active = false } }>
    <div class="mx-48 my-24 bg-zinc-50" on:click|stopPropagation>
        <h2 class="py-8 text-3xl text-center">
            New Sound Board
        </h2>
        <form class="px-12 pb-9">
            <input bind:this={file} type="file" accept=".mp3">
            <div>
                <input id="borderColor" bind:this={borderColor} value="#000000" type="color">
                <label for="borderColor">Border color</label>
            </div>
            <div>
                <input id="backgroundColor" bind:this={backgroundColor} value="#000000" type="color">
                <label for="backgroundColor">Background color</label>

            </div>
            <button class="text-md border-2 border-zinc-300 rounded-md"
                    on:click|preventDefault={upload}>
                Create
            </button>
        </form>
    </div>
</div>