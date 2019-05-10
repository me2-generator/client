Vue.component('jumbotron', {
    props: ['title', 'image', 'memeForm'],
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
            <div></div>
            <slot name="canvas"></slot>
            <div></div>
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