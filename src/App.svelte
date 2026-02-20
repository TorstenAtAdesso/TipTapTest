<script>
  import { onDestroy, onMount } from 'svelte'
  import { Editor } from '@tiptap/core'
  import StarterKit from '@tiptap/starter-kit'
  import BubbleMenu from '@tiptap/extension-bubble-menu'

  let editorElement
  let bubbleMenuElement
  let editor

  onMount(() => {
    editor = new Editor({
      element: editorElement,
      extensions: [
        StarterKit,
        BubbleMenu.configure({
          element: bubbleMenuElement,
        }),
      ],
      content: `
        <p>
          Select some text to reveal the bubble menu.
        </p>
      `,
    })
  })

  function toggleBold() {
    editor.chain().focus().toggleBold().run()
  }

  function toggleItalic() {
    editor.chain().focus().toggleItalic().run()
  }

  onDestroy(() => {
    if (editor) {
      editor.destroy()
    }
  })
</script>

<main>
  <h1>TipTap Bubble Menu in Svelte</h1>

  <div class="menu" bind:this={bubbleMenuElement}>
    <button
      class:active={editor?.isActive('bold')}
      on:click={toggleBold}
      type="button"
    >
      Bold
    </button>
    <button
      class:active={editor?.isActive('italic')}
      on:click={toggleItalic}
      type="button"
    >
      Italic
    </button>
  </div>

  <div class="editor" bind:this={editorElement}></div>
</main>

<style>
  :global(body) {
    margin: 0;
    font-family: Inter, system-ui, sans-serif;
    background-color: #f7f7f8;
    color: #1f2328;
  }

  main {
    max-width: 720px;
    margin: 3rem auto;
    padding: 0 1rem;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .editor {
    background: white;
    border: 1px solid #d0d7de;
    border-radius: 8px;
    min-height: 220px;
    padding: 1rem;
  }

  :global(.ProseMirror) {
    outline: none;
  }

  .menu {
    display: inline-flex;
    gap: 0.5rem;
    background: #24292f;
    color: white;
    border-radius: 6px;
    padding: 0.4rem;
  }

  button {
    border: none;
    border-radius: 4px;
    background: transparent;
    color: inherit;
    padding: 0.35rem 0.6rem;
    cursor: pointer;
  }

  button.active,
  button:hover {
    background: #57606a;
  }
</style>
