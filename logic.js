const Game = function () {
    let _level = 0
    let _frogs = []
    const colors = [`#8A2BE2`, `#000000`, `#DEB887`, `#7FFF00`, `#00008B`, `#DC143C`, `#FF1493`, `#FFD700`]
    const size = [`xs`, `sm`, `lg`, `2x`, `3x`, `5x`, `7x`, `10x`]
    
    const randColor = function(){
        const index = Math.floor(Math.random() * colors.length)
        return colors[index]
    }
    const randSize = function(){
        const index = Math.floor(Math.random() * size.length)
        return size[index]
    }
    const randPosition = function(){
        const pos = Math.floor(Math.random() * 90)
        console.log(pos)
        return pos + `%`
    }
    const removeFrog = function(id){
        _frogs = _frogs.filter(item => item.id !== id)
    }
    const clearFrogs = () => _frogs.length = 0
    const createFrogs = function (num) {
        for(let i = 0; i < num; i++)
        {
            _frogs.push({
                id: i,
                size: randSize(),
                color: randColor(),
                top: randPosition(),
                left: randPosition()
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