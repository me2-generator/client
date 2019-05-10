Vue.component('jumbotron', {
    props: ['title', 'url', 'meme-form'],
    data: function () {
      return {
      }
    },
    template: 
    `
    <div class="jumbotron">
      <div class="row">
        <div class="col s7">
          <h5 class="title">
            {{title}}
          </h5>
          <div class="download-content">
            <slot name="canvas"></slot>
            <img :src="url">
          </div>
        </div>
        <div class="col s5">
          <slot
          :memeForm="memeForm"
          name="form"></slot>
        </div>
      </div>
    </div>
    `
  })