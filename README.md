nTurtle
-------

nTurtle is a turtle graphics library, i.e a tool that supports vector graphics programming using a relative cursor.

In plainer English, you use this library to draw stuff using a location and an orientation.

To understand what turtle graphics are, see [Turtle graphics (Wikipedia)](https://en.wikipedia.org/wiki/Turtle_graphics).

This implementation offers just the basic primitives; the turtle can go forward, turn right or left. More primitives may be added later.

You create a turtle by writing:

`
var turtle = new nTurtle('canvas-container', 1000, 1000);
`

'canvas-container' is the id of the div element into which you'd like your canvas element drawn. The following two numbers represent the height and width of the canvas.