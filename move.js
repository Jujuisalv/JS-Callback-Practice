function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowkeys(left, bottom, gifCode) {      
        let direction = null;
        let x = 100;
        let y = 250;

        function moveCharacter() {
            if (direction === 'north') {
                y = y + 1
            } else if (direction === 'east') {
                x = x + 1
            } else if (direction === 'south') {
                y = y - 1
            } else if (direction === 'west') {
                x = x - 1
            } else {
                x = x
                y = y
            }

            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }

        setInterval(moveCharacter, 1)

        document.addEventListener('keydown', function(e) {
            if (e.repeat) return;

            if (e.key === 'ArrowUp') {
                direction = 'north'
            } else if (e.key === 'ArrowRight') {
                direction = 'east'
            } else if (e.key === 'ArrowDown') {
                direction = 'south'
            } else if (e.key === 'ArrowLeft') {
                direction = 'west'
            }
            gifCode(direction)
        })

        document.addEventListener('keyup', function(e) {
            direction = null
            gifCode(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowkeys
    }
}