
const experimental = function (percentage) {
    if (!s.video95) {
        s.counter += 1
        if (percentage >= 95) {
            s.counter += 1
            setMilestone("95")
        } else if (!s.video75) {
            s.counter += 1
            if (percentage >= 75) {
                s.counter += 1
                setMilestone("75")
             } else if (!s.video50) {
                s.counter += 1
                if (percentage >= 50) {
                    s.counter += 1
                    setMilestone("50")
                } else if (!s.video25) {
                    s.counter += 1
                    if (percentage >= 25) {
                        s.counter += 1
                        setMilestone("25")
                    } else {
                        console.log("❤️")
                    }
                }
            }
        }
    }
};