Vue.component('mynav', {
    data: function () {
      return {
        count: 0
      }
    },
    template: 
    `
    <div>
      <nav class="header">
        <div class="nav-wrapper">
          <img class="header__icon" src="./public/img/header.png">
          <a href="#" class="brand-logo">My2 Generator</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Login</a></li>
          </ul>
        </div>
      </nav>
    </div>
    `
  })