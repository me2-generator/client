Vue.component('myform', {
    props: ['memeForm'],
    data: function () {
      return {
        
      }
    },
    methods: {
      createMeme() {
        this.$emit('createMeme', this.memeForm);
        this.memeForm = {
          topText: '',
          bottomText: ''
        }
      }
    },
    template: 
    `
    <form v-on:submit.prevent="createMeme">
      <h6>Place your text below</h6>
      <div class="input-field">
          <input 
            type="text" 
            id="autocomplete-input" 
            v-model="memeForm.topText"
          >
          <label for="autocomplete-input">Top Text</label>
      </div>
      <div class="input-field">
          <input 
            type="text" 
            id="autocomplete-input"
            v-model="memeForm.bottomText"
          >
          <label for="autocomplete-input">Bottom Text</label>
      </div>

      <button class="btn waves-effect waves-light blue-grey" type="submit" name="action">Download
          <i class="material-icons right">send</i>
      </button>
      
    </form>
    `
  })