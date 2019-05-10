Vue.component('myform', {
    props: ['memeForm'],
    data: function () {
      return {
        form: {...this.memeForm}
      }
    },
    // watch: {
    //   form: {
    //     deep: true,
    //     handler(value) {
    //       this.$emit('input', value);
    //     }
    //   }
    // },
    template: 
    `
    <form>
        <h6>Place your text below</h6>
        <div class="input-field">
            <input 
              type="text" 
              id="autocomplete-input" 
              v-model="form.topText"
            >
            <label for="autocomplete-input">Top Text</label>
        </div>
        <div class="input-field">
            <input 
              type="text" 
              id="autocomplete-input"
              v-model="form.bottomText"
            >
            <label for="autocomplete-input">Bottom Text</label>
        </div>

        <button class="btn waves-effect waves-light blue-grey" type="submit" name="action">Download
            <i class="material-icons right">send</i>
        </button>
      
    </form>
    `
  })