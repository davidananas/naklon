input.onGesture(Gesture.TiltRight, function () {
    vitvor()
    while (input.isGesture(Gesture.TiltRight)) {
        tečka.move(1)
        basic.pause(100)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    vitvor()
    tečka.turn(Direction.Left, 90)
    while (input.isGesture(Gesture.LogoDown)) {
        tečka.move(1)
        basic.pause(100)
    }
})
function vitvor () {
    tečka.delete()
    tečka = game.createSprite(2, 2)
}
input.onGesture(Gesture.TiltLeft, function () {
    vitvor()
    while (input.isGesture(Gesture.TiltLeft)) {
        tečka.move(-1)
        basic.pause(100)
    }
})
input.onGesture(Gesture.ScreenUp, function () {
    vitvor()
})
input.onGesture(Gesture.LogoUp, function () {
    vitvor()
    tečka.turn(Direction.Right, 90)
    while (input.isGesture(Gesture.LogoUp)) {
        tečka.move(1)
        basic.pause(100)
    }
})
let tečka: game.LedSprite = null
tečka = game.createSprite(2, 2)
basic.forever(function () {
	
})
