jQuery(function($, undefined) {
	let altasGreeting = $("#greetings").html()
	$('#demo').terminal(function(command) {
    if (command !== '') {
        try {
            var result = window.eval(command);
            if (result !== undefined) {
                this.echo(new String(result));
            }
        } catch(e) {
            this.error(new String(e));
        }
    } else {
       this.echo('');
    }
	}, {
		  greetings: altasGreeting,
	    height: "100%",
	    prompt: 'cloud> '
	});
});