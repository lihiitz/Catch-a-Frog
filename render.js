const Renderer = function () {

    const gameSource = $(`#game-template`).html()
    const gameTemplate = Handlebars.compile(gameSource)

    const renderFrogs = function (frogs) {
        $(`#game`).empty()
        for (let frog of frogs) {
            let newHtml = gameTemplate(frog)
            $(`#game`).append(newHtml)
        }
    }

    const headerSource = $(`#header-template`).html()
    const headerTemplate = Handlebars.compile(headerSource)

    const renderTimer = function (time, color) {
        $(`#header`).empty()
        let newHtm = headerTemplate({ time, color })
        $(`#header`).append(newHtm)
    }

    const levelSource = $(`#level-template`).html()
    const levelTemplate = Handlebars.compile(levelSource)

    const renderLevel = function(level){
        $(`.level`).empty()
        let newHtml = levelTemplate({level})
        $(`.level`).append(newHtml)
    }

    const frogsLeftSource = $(`#frogsLeft-template`).html()
    const frogsLeftTemplate = Handlebars.compile(frogsLeftSource)

    const renderFrogsLeft = function(num){
        $(`.frogsLeft`).empty()
        let newHtml = frogsLeftTemplate({num})
        $(`.frogsLeft`).append(newHtml)
    }

    const gameOverSource = $(`#gameOver-template`).html()
    const gameOverTemplate = Handlebars.compile(gameOverSource)

    const renderGameOver = function(){
        let newHtml = gameOverTemplate({})
        $(`#game`).append(newHtml)
    }

    return {
        renderFrogs,
        renderTimer,
        renderLevel,
        renderFrogsLeft,
        renderGameOver
    }

}