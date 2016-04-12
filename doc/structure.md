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


There is a canvas where a ViewOnCanvas can render itself on.
The Game class will redraw all canvases with request animation frame.
Each canvas knows all views it needs to draw. A ViewOnCanvas has a render method that takes as argument the context of
the canvas.

There are multiple players, each player has an own car. There is for each client one player that can control his own
car.

How to test the acceleration?
- Create a loop -> with request animation frame