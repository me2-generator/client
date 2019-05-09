Vue.component('jumbotron', {
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
          <div class="title">
            Title
          </div>
          <div class="image">
            <img src="https://altaonline.com/wp-content/uploads/2018/11/ATA010819jobs_img01.jpg" alt="Meme Img">
          </div>
        </div>
        <div class="col s5">
          <slot></slot>
        </div>
      </div>
    </div>
    `
  })