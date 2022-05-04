<script lang="ts">
  // import logo from './assets/svelte.png'
  import { boards, fetchBoards } from './lib/SoundBoards'
  import SoundBoard from './lib/SoundBoard.svelte'
  fetchBoards()
</script>

<main class="p-2">
  <h1 class="text-center my-2 text-4xl uppercase">Musicbox</h1>
  {#each $boards as board}
  <SoundBoard board={board}/>
  {/each}
</main>
