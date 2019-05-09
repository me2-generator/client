Vue.component('myform', {
    data: function () {
      return {
        count: 0
      }
    },
    template: 
    `
    <form>
        <h6>Place your text below</h6>
        <div class="input-field">
            <input type="text" id="autocomplete-input" class="autocomplete">
            <label for="autocomplete-input">Top Text</label>
        </div>
        <div class="input-field">
            <input type="text" id="autocomplete-input" class="autocomplete">
            <label for="autocomplete-input">Bottom Text</label>
        </div>

        <button class="btn waves-effect waves-light blue-grey" type="submit" name="action">Download
            <i class="material-icons right">send</i>
        </button>
      
    </form>
    `
  })