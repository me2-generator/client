Vue.component('card', {
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
          <a href="#" class="brand-logo">My2 Generator</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    </div>
    `
  })