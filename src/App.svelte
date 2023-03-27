<script>
  import logo from './assets/svelte.png'
  import './lib/TailwindCSS.svelte'
  import ExampleComponent from './ExampleComponent.svelte'

  /**
   * Component name property
   * @type string
   * */
  let name

  /** @type {import('$lib/types').Action} */
  let action;

  const fn = function () {
    name = action.label
  }

</script>

<main>
  <img class="mx-auto" src={logo} alt="Svelte Logo" />

  <ExampleComponent data={{a: 1, b: 1, operation: 'sum'}} />

  <div>{name}</div>

  <div>{action.link}</div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
  img {
    height: 16rem;
    width: 16rem;
  }
</style>
