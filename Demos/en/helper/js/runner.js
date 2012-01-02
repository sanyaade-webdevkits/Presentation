(function(){

this.addEvent('domready', function(){

    var p = new Presentation('presentation', {
        onStart: function(){
        },
        onFailure: function(){
        }
    });

    p.addHelper(new Presentation.Helper.CustumController())
        .addHelper(new Presentation.Helper.ThemeSelector())
        .addHelper(new Presentation.Helper.Page());
    
    p.start();

});

}.call(this));