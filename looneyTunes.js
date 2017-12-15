"use strict";
var looneyTunes = new Object({
	canvas: false,
	context: false,
	number: 0,
	centerRadius: 0,
	init: function(idCanvas, number, centerRadius) {
		this.canvas = document.getElementById(idCanvas);
		this.context = this.canvas.getContext('2d');
		this.number = number || 3;
		this.centerRadius = centerRadius || Math.min(this.canvas.width,this.canvas.height) / 10;
		looneyTunes.draw();
	},
	draw: function() {
		var midx = this.canvas.width / 2,
			midy = this.canvas.height / 2,
			r = Math.min(this.canvas.width,this.canvas.height - 2) / 2,
			d = Math.pow((this.centerRadius/r), (1/this.number));

		var gradient = this.context.createRadialGradient(
			midx, midy, r * d * d , midx, midy, r * (1 + d)
		);
		gradient.addColorStop(0, 'rgba(255, 255, 0, 1)');
		gradient.addColorStop(1, 'rgba(0, 100, 0, 1)');
		this.context.fillStyle = gradient;
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

		for (var i = 0; i < this.number; i++) {
			this.context.beginPath();
			this.context.arc(midx, midy, r, 0, 2*Math.PI)
			var gradient = this.context.createRadialGradient(
				midx, midy, r * d, midx, midy, r
			);
			gradient.addColorStop(0, 'rgba(255, 165, 0, 1)');
			gradient.addColorStop(1, 'rgba(255, 0, 0, 1)');
			this.context.fillStyle = gradient;
			this.context.fill();
			if (i == 0) {
				this.context.strokeStyle = 'rgba(0, 0, 0, 1)';
				this.context.lineWidth = 2;
				this.context.stroke();
			}
			this.context.closePath();
			r *= d;
		}

		this.context.beginPath();
		this.context.arc(midx, midy, r, 0, 2*Math.PI)
		this.context.fillStyle = 'rgba(0, 0, 0, 1)';
		this.context.fill();
		this.context.stroke();
		this.context.closePath();
	}
});