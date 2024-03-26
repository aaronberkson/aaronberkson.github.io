
# Pac-Men: Simple Physics Animation

Pac-men illustrates simple physics animation, with animating mouths chomping and collision detection of all the walls of the viewport / iframe. 


## How to Install and Run the Project
To install and run the project you need the following files in the same directory:

    index.html

    PacMan1.png

    PacMan2.png

    PacMan3.png

    PacMan4.png

    pacmen.js

Click ADD PAC-MAN to create multiples, then click START! bounce them off the walls.

## How to Use the Project
You can adjust the keyframes by changing the images referred to into pacArray, on line 2.

You can adjust the location of where the pacmen are created by further modifying the adjustment to position.y, where it currently adjusts it to never overlap the area where the buttons are located, starting on line 32.

You can change the speed of the chomping animation by changing the range defined when the value of mouth_freq is set, on line 50.

If this is run within the CODIO grading application, the module.exports line should be uncommented on line 108, in this standalone version it is not necessary.

## Credits
This project is part of the MIT xPRO: Professional Certificate in Coding: Full Stack Development with MERN. 