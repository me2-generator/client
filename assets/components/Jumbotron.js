Vue.component('jumbotron', {
    props: ['title', 'image'],
    data: function () {
      return {
        count: 0
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
          <div class="image">
            <img :src="image" alt="Meme Img">
          </div>
        </div>
        <div class="col s5">
          <slot></slot>
        </div>
      </div>
    </div>
    `
  })