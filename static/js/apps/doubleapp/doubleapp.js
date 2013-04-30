window.AppConstructor = function(options) {
	_.extend(this, {
		afterInit: function() {
			this.container.append('<div style="background: ' + (this.bootstrapData.Color || '#ccc') + '; padding: 10px;">' + this.bootstrapData.Text + '</div>');
		}
	}, options);
};