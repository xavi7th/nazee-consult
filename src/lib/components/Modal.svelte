<script lang="ts">
	export let showModal: boolean;

	let dialog: HTMLDialogElement;

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialog} on:close on:click|self={() => dialog.close()}>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<!-- svelte-ignore a11y-autofocus -->
    <span class="dialog-close" autofocus on:click={() => dialog.close()}>x</span>
		<slot name="header" />
		<hr />
		<slot />
	</div>
</dialog>

<style lang="scss">
	dialog {
		max-width: 30em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
    margin: 0 auto;
    top: 150px;

    &::backdrop {
      background: rgba(0, 0, 0, 0.3);
    }

    & > div {
      padding: 1em;

      .dialog-close{
        position: absolute;
        top: 10px;
        right: 25px;
        z-index: 1;
        cursor: pointer;
      }
    }

    &[open] {
      animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

      &::backdrop {
        animation: fade 0.2s ease-out;
      }
    }
	}

	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
