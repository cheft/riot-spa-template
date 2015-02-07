<ButtonTag>
    <div class="{opts.position == 'center' ? 'text-center' : 'pull-' + opts.position}">
        <button each={opts.buttons} class="btn {style} {parent.opts.position == 'right' ? 'mg-right' : 'mg-left'}"
            type="button" id="{name}" onclick="{parent.test}"><i class="{icon}"></i>&nbsp;&nbsp;&nbsp;{label}
        </button>
    </div>

    @test = (e) =>  @trigger e.target.id
</ButtonTag>
