Vue.component('myform', {
    data: function () {
      return {
        count: 0
      }
    },
    template: 
    `
    <form>
        <div class="input-field">
            <input type="text" id="autocomplete-input" class="autocomplete">
            <label for="autocomplete-input">Top Text</label>
        </div>
        <div class="input-field">
            <input type="text" id="autocomplete-input" class="autocomplete">
            <label for="autocomplete-input">Bottom Text</label>
        </div>
    </form>
    `
  })