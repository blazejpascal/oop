function StopWatch() {

    let startTime, endTime, running, duration = 0

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration
        },
        set: function (v) {
             duration = v

        }
    })

    Object.defineProperty(this, 'startTime', {
        get: function () {
            return startTime
        }
    })

    Object.defineProperty(this, 'endTime', {
        get: function () {
            return endTime
        }
    })

    Object.defineProperty(this, 'running', {
        get: function () {
            return running
        }
    })



}

StopWatch.prototype.start = () => {
    if(this.running)
        throw new Error("is already started")
    else  {
        this.running= !this.running
        this.startTime = new Date()
    }
}

StopWatch.prototype.stop = () => {
    if(!this.running)
        throw new Error("is already stopped")
    else {
        this.running= !this.running
        this.endTime = new Date()
        const time = (endTime - startTime) / 1000
        console.log(time)
        console.log(this.duration)
        this.duration = time

    }
}

StopWatch.prototype.reset = () => {
    if(this.running) {
        throw new Error('Have to stop firts')
    }
    else {
        this.duration = 0;
    }
}

const sw = new StopWatch()




// function StopWatch() {
//
//     let startTime, endTime, running, duration = 0
//
//     StopWatch.prototype.start = () => {
//         if(running)
//             throw new Error("is already started")
//         else  {
//             running= !running
//             startTime = new Date()
//         }
//     }
//
//     StopWatch.prototype.stop = () => {
//         if(!running)
//             new Error("is already stopped")
//         else {
//             running= !running
//             endTime = new Date()
//             duration += (endTime - startTime) / 1000
//         }
//     }
//
//     StopWatch.prototype.reset = () => {
//         if(running) {
//             new Error('Have to stop firts')
//         }
//         else {
//             duration = 0;
//         }
//     }
//
//     Object.defineProperty(this, 'duration', {
//         get: function () {
//             return duration
//         }
//     })
// }
//
// const sw = new StopWatch()