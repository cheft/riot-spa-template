C.Application = class application
    mount: (tagName) -> @[tagName] = riot.mount(tagName)[0]
