const MY_PATH = `http://localhost:3000`

var app = new Vue({
  el: '#app',
  data: {
    file: '',
    titleUpload: 'title',
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
    },
    imgResult: ''
  },
  created: function () {
    this.fetchImages()
  },
  methods: {
    fetchImages: function () {
      axios
        .get(`${MY_PATH}`)
        .then(({ data }) => {
          this.memes = data
        })
        .catch(err => {
          console.log(err);
        })
    },
    downloadCanvas: function () {
      // var canvas = document.getElementById("mycanvas");
      // var img    = canvas.toDataURL("image/png");
      // document.write('<img src="'+img+'"/>');
    },
    createMeme: function () {
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
    generateCanvas: function (data) {
      this.meme.title = data.title
      this.meme.url = data.url
    },
    handleFileUpload(event) {
      // console.log('masuk file upload', this.$refs.file.files[0])
      this.file = this.$refs.file.files[0]
      this.titleUpload = this.$refs.file.files[0].name


    },
    upload() {
      let formData = new FormData()
      formData.append('picture', this.file)
      formData.append('title', this.titleUpload)
      axios
        .post('http://127.0.0.1:3000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(({ data }) => {
          console.log(data)
          this.memeForm.topText = ""
          this.memeForm.bottomText = ""
          this.memes.push(data)
          this.url = data.url
          console.log(this.bgimage)
        })
        .catch((err) => {
          console.log(err)
        })

    },
    screenshot() {
      html2canvas(document.getElementById('capture'), { useCORS: true }).then((canvas) => {
        var base64URL = canvas.toDataURL('image/png')
        this.imgResult=base64URL
        console.log(this.imgResult);
        
        axios
          .post('http://localhost:3000/uploadmeme', {
            data: { image: base64URL }
          })
          .then(data => {
            console.log(data.data)
            this.memes.push(data)
          })
          .catch(err => {
            console.log(err)
          })
      });
    }
  }
})