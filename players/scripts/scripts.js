(function () {
    "use strict";

    const PERF = {
        COUNT: 0,
        LOADED: 0,
        SOURCES: [
            "http://html5demos.com/assets/dizzy.webm",
            "http://dl1.webmfiles.org/big-buck-bunny_trailer.webm",
            "https://c-a3c498473835a2f1f8798b315a0c39cb.http.atlas.cdn.yimg.com/gemini/pr/video_SwCD27gjBcCnyMRmZp8bSctFPfLVEu2_GCvtarQ45goog6aLpl1WSkPJZtk73BjKIbzpfiV1MHY-_1.mp4?a=gemini&mr=0&s=0ae08dc7c5c0aba85a8c6563755b977d",
            "https://www.html5rocks.com/en/tutorials/video/basics/devstories.webm",
            "http://techslides.com/demos/sample-videos/small.webm",
            "http://clips.vorwaerts-gmbh.de/VfE.webm",


        ],
        TIME: null,
        construct: function () {
            const main = document.querySelector('main')
            const iframe = document.createElement('iframe');
            const source = PERF.SOURCES[PERF.COUNT];

            iframe.id = ++PERF.COUNT;
            iframe.style.display = 'none';
            document.body.appendChild(iframe);

            // Wait for the iframe to be ready:
            iframe.onload = () => {
                iframe.onload = null;
                iframe.contentDocument.write('<streaming-element id="se-' + iframe.id + '">');

                const streamingElement = iframe.contentDocument.querySelector('streaming-element');

                main.appendChild(streamingElement);

                // iframe.contentDocument.write('<video id="vjs_video_3_html5_api" class="vjs-tech" controls="" src="blob:https://7live.com.au/fe96e70d-07c2-4978-a4b8-5a866469546e"></video>');
                iframe.contentDocument.write('<video id="v-' + iframe.id + '" class="vjs-tech" autoplay=true loop=true controls="" width="512" src="' + source + '"></video>');
                iframe.contentDocument.write('</streaming-element>');
                iframe.contentDocument.close();

                PERF.LOADED += 1;

            };

            iframe.src = 'javascript:void(0)';
            PERF.loaded()
        },
        constructAll: function () {
            for (const source in PERF.SOURCES) {
                this.construct();
            }
        },
        loaded: function () {
            if (PERF.LOADED === PERF.SOURCES.length) {
                PERF.timer();
            }
        },
        timer: function () {
            let elapsed = null;
            const time = () => {
                return new Date().getTime();
            }

                        console.log(PERF.TIME);
            if (!PERF.TIME) {
                PERF.TIME = time()
            } else {
                const complete =  time();
                elapsed = complete - PERF.TIME;
            }

            console.log(PERF.TIME);
        },
        init: function () {
            // this.construct();
            this.timer();
            this.constructAll();
        }
    };

    window.PERF = PERF;
}());
