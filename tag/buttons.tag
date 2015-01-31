<buttons>
    <div class="{opts.position == 'center' ? 'text-center' : 'pull-' + opts.position}">
        <button onclick="{parent.test}" each={opts.buttons} id="{operate}" class="btn btn-{style}" ><i class="{icon}"></i>{label}</button>
    </div>

    @test = (e) =>  @trigger e.target.id
</buttons>
