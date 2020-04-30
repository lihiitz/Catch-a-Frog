const Game = function () {
    let _level = 0
    let _frogs = []
    const colors = [`#8A2BE2`, `#000000`, `#DEB887`, `#7FFF00`, `#00008B`, `#DC143C`, `#FF1493`, `#FFD700`]
    const TOPOFFSET = 60
    const LEFTOFFSET = 2
    
    const randColor = function(){
        const index = Math.floor(Math.random() * colors.length)
        return colors[index]
    }

    const randTopPosition = function(frogSize){
        let bottomBorder = $(`#game`).height() - frogSize
        const topPos = Math.floor(Math.random() * (bottomBorder - TOPOFFSET)) + TOPOFFSET
        return topPos + `px`

    }
    const randLeftPosition = function(frogSize){
        let rightBorder = $(`#game`).width() - frogSize
        const leftPos = Math.floor(Math.random() * (rightBorder - LEFTOFFSET)) + LEFTOFFSET
        return leftPos + `px`
    }
    const removeFrog = function(id){
        _frogs = _frogs.filter(item => item.id !== id)
    }
    const clearFrogs = () => _frogs.length = 0
    const createFrogs = function (num) {
        for(let i = 0; i < num; i++)
        {
            const size = Math.floor(Math.random() * (100 - 30)) + 30
            _frogs.push({
                id: i,
                size: size + `px`,
                color: randColor(),
                top: randTopPosition(size),
                left: randLeftPosition(size)
            })
        }
    }
    const getFrogs = () => _frogs
    const getLevel = () => _level
    const setLevel = function(level){
        _level = level
    } 

    return{
        getFrogs,
        createFrogs,
        removeFrog,
        getLevel,
        clearFrogs,
        setLevel,
        randColor
    }
}