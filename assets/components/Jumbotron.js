Vue.component('jumbotron', {
    props: ['title', 'url', 'meme-form', 'atas', 'bawah'],
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
            <div id="capture" style="padding: 10px; height: 400px; width:400px;
                background-repeat: no-repeat;
                background-size: 100% 100%;" v-bind:style="{ backgroundImage: 'url(' + url + ')' }">
                <h4 style="color: #fff; font-size: 50px; ">{{atas}}</h4>
                <h4 style="color: #fff; font-size: 50px; margin-top: 5em">{{bawah}}</h4>



            </div>
            
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