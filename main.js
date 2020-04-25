
const game = Game()
const render = Renderer()

$(`#game`).on(`click`, `.frog`, function(){
    const $frog = $(this)
    game.removeFrog($frog.data().id)
    render.renderFrogs(game.getFrogs())
    render.renderFrogsLeft(game.getFrogs().length)
})

const run = function(){
    let counter = game.getLevel()+2
    game.clearFrogs()
    game.createFrogs(game.getLevel())
    render.renderFrogs(game.getFrogs())
    render.renderLevel(game.getLevel())
    render.renderFrogsLeft(game.getFrogs().length)
    let interval = setInterval(function(){
        render.renderTimer(--counter, game.randColor())
        if (counter === 0)
        {
            clearInterval(interval)
            if (game.getFrogs().length > 0)
            {
                render.renderGameOver()
            }
            else{
                game.setLevel(game.getLevel()+1)
                run()
            }
        }
    },1000)
}

$(`#startBtn`).on(`click`, function(){
    game.setLevel(1)
    run()
})
