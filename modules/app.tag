<app>
    <div class="navbar" id="top" style="background: #e6e6e6;">
      <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar" style="background: #337ab7;"></span>
              <span class="icon-bar" style="background: #337ab7;"></span>
              <span class="icon-bar" style="background: #337ab7;"></span>
            </button>
          <a href="/" class="navbar-brand">Riot Demos</a>
        </div>
        <div class="collapse navbar-collapse navbar-responsive-collapse" id="menu">
          <ul class="nav navbar-nav">
            <li>
                <a href="javascript: void 0" onclick={start} id="user-add">Form</a>
            </li>
            <li>
                <a href="javascript: void 0" onclick={start} id="user-list">Table</a>
            </li>
            <li>
                <a href="javascript: void 0" onclick={start} id="todo">Custom</a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="http://github.com/cheft" target="_blank">Author: Cheft</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div id="container" class="container"></div>

    route = (op) =>
        @container.innerHTML = ''
        riot.mountTo @container, op

    riot.route (op) -> route(op)
    riot.route.exec (op) -> route(op)

    riot.route('user-add') unless location.hash
    @start = (e) -> riot.route e.target.id

</app>
