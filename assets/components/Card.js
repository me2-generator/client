Vue.component('card', {
    props: ['title', 'url'],
    data: function () {
      return {
        meme : {
          title: '',
          url: ''
        },
        fbSharelink: `https://www.facebook.com/sharer/sharer.php?u=`,
        fblast: `&amp;src=sdkpreparse%2F&amp;src=sdkpreparse`,
        twitterSharelink: `https://twitter.com/intent/tweet?text=baru%20aja%20upload%20memed&url=`,
        twitterlast: '&hashtags=uploadmeme,hacktiv8&via=uploadmeme',
        waSharelink: `https://web.whatsapp.com/send?text==baru%20aja%20upload%20meme`
      }
    },
    methods: {
      toCanvas() {
        this.meme.title = this.title
        this.meme.url = this.url
        
        this.$emit('generate-canvas', this.meme);
      },
      getlink() {
        // console.log(this.fbSharelink + this.video.link + this.last)
        return this.fbSharelink + this.url + this.fblast
      },
      getTwitter() {
          return this.twitterSharelink + this.url + this.twitterlast
      },
      getWhatsapp() {
          return this.waSharelink + this.url
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
        <div>
        <a class="resp-sharing-button__link" target="_blank" :href="getlink()" rel="noopener" aria-label="Share on Facebook">
        <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
            </div>Share on Facebook</div>
        </a>
        <a class="resp-sharing-button__link" target="_blank" :href="getTwitter()" rel="noopener" aria-label="Share on Twitter">
        <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
            </div>Share on Twitter</div>
        </a>
        <a class="resp-sharing-button__link" target="_blank" :href="getWhatsapp()" rel="noopener" aria-label="Share on Whatsapp">
        <div class="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
            </div>Share on whatsapp</div>
        </a>
        </div>
    </div>
    `
  })