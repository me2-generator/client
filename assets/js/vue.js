const MY_PATH = `http://localhost:3000`

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      favorites: [],
      meme: {
        title: '',
        url: ''
      },
      memes: [],
      memeForm: {
        topText: '',
        bottomText: ''
      }
    },
    created:function() {
      this.fetchImages()
    },
    methods: {
        fetchImages: function() {
          axios
          .get(`${MY_PATH}`)
          .then( ({data}) => {
            this.memes=data
          })
          .catch(err => {
              console.log(err);
          })
        },
        downloadCanvas: function() {
          // var canvas = document.getElementById("mycanvas");
          // var img    = canvas.toDataURL("image/png");
          // document.write('<img src="'+img+'"/>');
        },
        createMeme: function() {
          axios
          .post(`${MY_PATH}`, {
            topText: this.memeForm.topText,
            bottomText: this.memeForm.bottomText
          })
          .then(meme => {
            console.log(meme);
            // res.status(201).json(meme)
          })
          .catch(err => {
            console.log(err);
          })
        },
        generateCanvas: function(data) {
          this.meme.title = data.title
          this.meme.url = data.url
        }
    }
  })