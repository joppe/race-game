- Game
    - Score \<div\>
    - Track \<canvas\>
    - GhostTrack \<canvas\>
        - friction
        - sections
    - Cars  \<canvas\>


- Player
    - Controls
    - Car
        - speed/direction/position/acceleration
        - setAccelerate
        - setBreak
        - draw/tick/update


A CanvasView and CanvasDrawable

The Game class will redraw all canvases with request animation frame.
Each CanvasView knows all CanvasDrawables it needs to draw. A CanvasDrawable has a draw method that takes as argument the context of
the canvas.

There are multiple players, each player has it's own car. There is for each client one player that can control his own
car.

How to test the acceleration?
- Create a loop -> with request animation frame