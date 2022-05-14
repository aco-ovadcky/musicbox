<script lang="ts">
  import { setContext } from 'svelte';
  import { boards, fetchBoards } from './lib/SoundBoards'
  import SoundBoard from './lib/SoundBoard.svelte'
  import CreateBoardMenu from './lib/CreateBoardMenu.svelte'
  
  let showMenu: boolean;
  setContext('boards', boards)
  fetchBoards()
</script>

<main>
  {#if showMenu}
    <CreateBoardMenu bind:active={showMenu}/>
  {/if}
  <div class="h-2"></div> <!-- spacer --> 
  <div class="h-7 mx-[5%] border-b-2">
    <button class="float-right font-bold active:font-semibold"
            on:click={ () => { showMenu = true } }
            >Add board</button>
  </div>
  <div class="mx-[15%]">
    <h1 class="text-center my-2 text-4xl uppercase clear-both">Musicbox</h1>
    {#each $boards as board}
    <SoundBoard board={board}/>
    {/each}
  </div>
  
</main>
