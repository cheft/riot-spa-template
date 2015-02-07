<app>
    <div class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          <a href="/" class="navbar-brand">Riot Demos</a>
        </div>
        <div class="collapse navbar-collapse navbar-responsive-collapse" id="menu">
          <ul class="nav navbar-nav">
            <li each={opts.data}>
                <a href="#{href}">{title}</a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="http://github.com/cheft" target="_blank">Author: Cheft</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div id="container" class="container"></div>

    start = (op) =>
        @container.innerHTML = ''
        riot.mountTo @container, op

    riot.route.exec (op) => start(op)
    riot.route (op) => start(op)
    riot.route('form-demo') unless location.hash
</app>
