<buttons>
    <style type="text/css">
        .mg-left {
            margin-right: 15px;
        }

        .mg-right {
            margin-left: 15px;
        }
    </style>

    <div class="{opts.position == 'center' ? 'text-center' : 'pull-' + opts.position}">
        <button each={opts.buttons} class="btn btn-{style} {parent.opts.position == 'right' ? 'mg-right' : 'mg-left'}"
            type="button" id="{operate}" onclick="{parent.test}"><i class="{icon}"></i> {label}
        </button>
    </div>

    @test = (e) =>  @trigger e.target.id
</buttons>
