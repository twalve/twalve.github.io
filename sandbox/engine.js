(function(){
    const NGN = {
        time: {
            beat: 1000,
            beating: null,
            duration: 3600,
            elapsed: 0,
            compare: function() {
                console.log("Stream ended after " + (NGN.time.duration/60).toFixed(0) + " minutes");
                console.log("Experimental received " + s.counter + " counts");
                console.log("Evolution received " + e.counter + " counts");
                console.log("Production received " + v.counter + " counts");
            },
            percentage: function (duration, elapsed) {
                const percentage = elapsed / duration * 100;
        
                return percentage.toFixed(0);
            }
        },
        announce: function () {
            console.log("Heartbeat started");
            console.log("Stream duration is: " + NGN.time.duration)
        },
        elapsed: function (elapsed) {
            NGN.time.elapsed = parseInt(elapsed, 10);
            const percentage = NGN.time.percentage(NGN.time.duration, NGN.time.elapsed);
            const range = Math.floor(percentage / 100);

            s.condition = range;
            conditional = conditionals[milestones[range]];

            console.log("elapsed=" + elapsed);
        },
        heartbeat: function () {
            if (NGN.time.beating) { clearTimeout(NGN.time.beating); }
        
            NGN.time.elapsed += 1;
            percentage = NGN.time.percentage(NGN.time.duration, NGN.time.elapsed);

            production(percentage);
            evolution(percentage);
            experimental(percentage);
        
            console.log("HEARTBEAT called");
        
            if (percentage < 100) {
                NGN.time.beating = setTimeout(NGN.heartbeat, NGN.time.beat);
            } else {
                NGN.time.compare();
            }
        },
        start: function() {
            NGN.announce();
            NGN.heartbeat();
        },
        listen: function () {
            document.querySelector("button").addEventListener("click", NGN.start, false);
        },
        query: function () {
            const query = document.location.search.substring(1);
            const timing = ["beat", "duration"];

            if (query) {
                const parameters = query.replace(/&amp;/gi, "&").split("&");
                parameters.forEach(pair => {
                    let keyValue = pair.split("=");
                    const key = keyValue[0];
                    const value = keyValue[1];

                    if (NGN[key]) {
                        NGN[key](value);
                    } else {
                        timing.forSome(name => {
                            if (key.toLowerCase() === name) {
                                NGN.time[key] = parseInt(value, 10);
                                console.log(pair);
                            }
                        });
                    }
                });
            }
        },
        setup: function() {
            // this.announce();
        },
        init: function () {
            this.query();
            this.listen();
            this.setup();
        }
    }

    window.NGN = NGN;
    NGN.init();
}());
