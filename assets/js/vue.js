var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      favorites: [],
      meme: {
        title: 'Title going here',
        image: 'https://altaonline.com/wp-content/uploads/2018/11/ATA010819jobs_img01.jpg'
      },
      memes: [
        {
          title: 'Sillicon Valley Wannabe',
          image: 'https://altaonline.com/wp-content/uploads/2018/11/ATA010819jobs_img01.jpg'
        },
        {
          title: 'Tom Scream',
          image: 'https://i.imgur.com/HQKKXxe.jpg'
        },
        {
          title: 'Thanos',
          image: 'https://stayhipp.com/wp-content/uploads/2018/12/Thanos-.jpg'
        }
      ],
      memeForm: {
        topText: 'text',
        bottomText: 'bottm'
      }
    },
    methods: {
        
    }
  })