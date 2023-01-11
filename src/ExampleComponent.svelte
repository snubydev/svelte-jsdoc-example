<script>

  /** @typedef {Object} Options
   * @property {number} a - first operand
   * @property {number} b - second operand
   * @property {string} operation - type of operation: sum, div, mul
   */

  /** @type {Options}*/
  export let data = {a: 0, b: 0, operation: ''}

  /** @type {number} */
  let result = data.a

  /**
   * Calculate function
   * @param {Options} opt
   * @returns {number}
   */
  function calculate (opt) {
    if (opt.operation === 'sum') return opt.a + opt.b
    return 0
  }

  function onClick () {
    result = calculate({a: result, b: data.b, operation: data.operation})
  }

</script>


<div on:click={onClick} class="p-5 border border-blue-500 select-none cursor-pointer text-5xl" on:keydown={onClick}>
  Click me:
  {result}
</div>