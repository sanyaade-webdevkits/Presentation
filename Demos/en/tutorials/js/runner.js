(function(yournamespace){

this.addEvent('domready', function(){

	var p = new Presentation('presentation');

    p.addFilter(yournamespace.KeywordFilter);

    p.addHelper(new yournamespace.Controller());

	p.displayFullScreen()
		.start();

});

}.call(this, yournamespace));