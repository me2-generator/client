Vue.component('card', {
    props: ['title', 'image'],
    data: function () {
      return {
        count: 0
      }
    },
    template: 
    `
    <div class="card">
        <div class="card-image">
          <img :src="image" style="width: 100%;">
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>{{title}}</p>
        </div>
    </div>
    `
  })