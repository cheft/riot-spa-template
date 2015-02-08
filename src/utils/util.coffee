window.util =

    is: (v, type) -> toString.apply(v) is "[object #{type}]"
