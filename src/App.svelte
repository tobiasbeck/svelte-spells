<script>
  import Spell from './Spell.svelte';
  import { spells } from './spells.js';
</script>

<ion-content>
  {#each spells as spell}
 	  <Spell {...spell} /> 
  {/each}
</ion-content>