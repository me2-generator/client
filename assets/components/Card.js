Vue.component('card', {
    props: ['title', 'url'],
    data: function () {
      return {
        meme : {
          title: '',
          url: ''
        }
      }
    },
    methods: {
      toCanvas() {
        this.meme.title = this.title
        this.meme.url = this.url
        
        this.$emit('generate-canvas', this.meme);
      }
    },
    template: 
    `
    <div 
      class="card"
      @click="toCanvas"
    >
        <div class="card-image">
          <img :src="url" style="width: 100%;">
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>{{title}}</p>
        </div>
    </div>
    `
  })