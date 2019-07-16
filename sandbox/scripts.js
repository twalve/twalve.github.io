s = {
    counter: 0,
    condition: 0,
    video25: false,
    video50: false,
    video75: false,
    video95: false
};

const e = {
    counter: 0,
    video25: false,
    video50: false,
    video75: false,
    video95: false
};

const v = {
    counter: 0,
    video25: false,
    video50: false,
    video75: false,
    video95: false
};

const trackEventAdobe = function (milestone, source) {
    console.log("milestone: " + milestone + ", from " + source);
}

const setMilestone = function (milestone) {
    asset = "experimental";
    video = "videoMilestone" + milestone;
    key = "video" + milestone;
    trackEventAdobe(video, asset)
    s[key] = true

    console.log("percentage -> " + milestone)
    return s[key]
};

const conditionals = {
    videoMilestone25: function (percentage) {
        if (percentage >= 25 && !s.video25 && percentage < 50 ) {
            s.counter += 3
            if (!(s.video50 || s.video75 || s.video95)) {
                s.counter += 3
                return setMilestone("25")
            }
        } else {
            return false 
        }
    },
    videoMilestone50: function (percentage) {
        if (percentage >= 50 && !s.video50 && percentage < 75) {
            s.counter += 3
            if (!(s.video75 || s.video95)) {
                s.counter += 2
                return setMilestone("50")
            }
        } else {
            return false 
        }
    },    
    videoMilestone75: function (percentage) {
        if (percentage >= 75 && !s.video75 && percentage < 95) {
            s.counter += 3
            if (!s.video95) {
                s.counter += 1
                return setMilestone("75")
            }
        } else {
            return false 
        }
    },    
    videoMilestone95: function (percentage) {
        if (percentage >= 95 && !s.video95) {
            s.counter += 2
            return setMilestone("95")
        } else {
            return false 
        } 
    },    
    videoMilestone100: function (percentage) {
        if (percentage >= 100) {
            console.log("percentage -> " + percentage)
            console.log("Stream has ended")
        } 
    }
}

const milestones = [
    "videoMilestone25",
    "videoMilestone50",
    "videoMilestone75",
    "videoMilestone95",
    "videoMilestone100"
];

conditional = conditionals[milestones[s.condition]];

const experimental = function (percentage) {
    if (conditional(percentage)) {
        s.condition += 1
        if (s.condition < milestones.length) {
            conditional = conditionals[milestones[s.condition]];
        }
    }
};

const evolution = function (percentage) {
    var asset = "evolution";

    if (!e.video25 && percentage >= 25 && percentage < 50 ) {
        e.counter += 3
        if (!(e.video50 || e.video75 || e.video95)) {
            e.counter += 3
            trackEventAdobe("videoMilestone25", asset)
            e.video25 = true
        }
    } else if (!e.video50 && percentage >= 50 && percentage < 75) {
        e.counter += 4
        if (!(e.video50 || e.video75 || e.video95)) {
            e.counter += 3
            trackEventAdobe("videoMilestone50", asset)
            e.video50 = true
        }
    } else if (!e.video75 && percentage >= 75 && percentage < 95) {
        e.counter += 5
        if (!(e.video75 || e.video95)) {
            e.counter += 2
            trackEventAdobe("videoMilestone75", asset)
            e.video75 = true
        }
    } else if (!e.video95 && percentage >= 95) {
        e.counter += 5
        if (!e.video95) {
            e.counter += 1
            trackEventAdobe("videoMilestone95", asset)
            e.video95 = true
        }
    } 
};

const production = function (percentage) {
    var asset = "production";

    if (percentage >= 25 && percentage < 50 ) {
        v.counter += 2
        if (!(v.video25 || v.video50 || v.video75 || v.video95)) {
            v.counter += 4
            trackEventAdobe("videoMilestone25", asset)
            v.video25 = true
        }
    } else if (percentage >= 50 && percentage < 75 && !v.video50) {
        v.counter += 5
        if (!(v.video50 || v.video75 || v.video95)) {
            v.counter += 3
            trackEventAdobe("videoMilestone50", asset)
            v.video50 = true
        }
    } else if (percentage >= 75 && percentage < 95 && !v.video75) {
        v.counter += 8
        if (!(v.video75 || v.video95)) {
            v.counter += 2
            trackEventAdobe("videoMilestone75", asset)
            v.video75 = true
        }
    } else if (percentage >= 95 && !v.video95) {
        v.counter += 10
        if (!v.video95) {
            v.counter += 1
            trackEventAdobe("videoMilestone95", asset)
            v.video95 = true
        }
    } 
};
