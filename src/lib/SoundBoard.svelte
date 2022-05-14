<script lang="ts">
    import type { SoundBoard } from './SoundBoards';
    export let board: SoundBoard;
    let borderColor = board.borderColor;
    let bgColor = board.backgroundColor;
    const name = board.title;
    let audio = board.audio;

    let range: HTMLInputElement;

    export let active = false;

    function toggle() {
        if (range.matches(':hover')) {
            // TODO make easy-in?
            audio.volume = +range.value / 100;
        } else {
            active = !active;
            if (active) {
                audio.play();
            } else {
                audio.pause();
            }
        }
    }
</script>
<div
    class="md:max-w-[20%] min-h-[10rem] rounded-xl border-4 place-content-center p-4"
    style="border-color: {borderColor}; background-color: {bgColor}"
    on:click={toggle}
>
    <div class="text-center">{active}</div>
    <input bind:this="{range}" type="range" min="0" max="100" value="40" class="range" />
    <div class="text-center">{name}</div>
</div>
