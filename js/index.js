$(function () {
    $(document).on('keyup', function (event) {
        Array.from($("li")).forEach(i => {
            if (i.textContent === event.key) {
                i.style.backgroundColor = "red"
                setTimeout(() => {
                    i.style.backgroundColor = "#e8ecef"
                }, 1000)
            }
        })

    });
});

