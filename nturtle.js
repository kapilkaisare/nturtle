var nTurtle = function (containerId, x, y) {

	var container = document.getElementById(containerId);

	this._screen = document.createElement('canvas');
	this._screen.setAttribute('width', x);
	this._screen.setAttribute('height', y);
	this._ctx = this._screen.getContext('2d');

	// Defaults
	this._x = 0;
	this._y = 0;
	this._heading = 0;
	this._ctx.lineWidth = 1;
	this._ctx.strokeStyle = '#000000';
	this._ctx.fillStyle = '#000000';
	this._isDown = true;
	this._isVisible = true;
	this._font = 'bold 15px Helvetica'

	this.id = containerId + '-nTurtleCanvas';
	this._screen.id = this.id;
	container.appendChild(this._screen);
	return this;
};

nTurtle.prototype.pos = function () {
	return { x: this._x, y: this._y };
};

nTurtle.prototype.setH = function (value) {
	this._heading = value;
	return this;
};

nTurtle.prototype.rt = function (value) {
	this._heading = (this._heading + value) % 360;
	return this;
};

nTurtle.prototype.lt = function (value) {
	this._heading = (this._heading - value) % 360;
	return this;
};

nTurtle.prototype.fd = function (steps) {
	var
		headingInRadians = (this._heading * Math.PI) / 180,
		newX = this._x + (steps * Math.cos(headingInRadians)),
		newY = this._y + (steps * Math.sin(headingInRadians));

	if (this.isDown()) {
		this._ctx.lineTo(newX, newY);
		this._ctx.stroke();
	} else {
		this._ctx.moveTo(newX, newY);
	}
	this._x = newX;
	this._y = newY;

	return this;
};

nTurtle.prototype.goto = function (x, y) {

	if (this.isDown()) {
		this._ctx.lineTo(x, y);
		this._ctx.stroke();
	} else {
		this._ctx.moveTo(x, y);
	}
	this._x = x;
	this._y = y;

	return this;
};

nTurtle.prototype.width = function (value) {
	if (value)
		this._width = value;
	return this._width;
};

nTurtle.prototype.color = function (value) {
	if (value) {
		this._ctx.strokeStyle = value;
	}
	return this._ctx.strokeStyle;
};

nTurtle.prototype.isDown = function () {
	return this._isDown;
};

nTurtle.prototype.pu = function () {
	this._isDown = false;
	return this;
};

nTurtle.prototype.pd = function () {
	this._isDown = true;
	return this;
};

nTurtle.prototype.isVisible = function () {
	return this._isVisible;
};

nTurtle.prototype.show = function () {
	this._isVisible = true;
};

nTurtle.prototype.hide = function () {
	this._isVisible = false;
};

nTurtle.prototype.font = function (value) {
	if (value)
		this._font = value;

	return this._font;
};

nTurtle.prototype.text = function (value) {
	this._ctx.fillText(value, this._x, this._y);
	return this;
};