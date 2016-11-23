// let obs = Rx.Observable.interval(1500)
//            .take(5)
//            .do(i => console.log(i) );

// // obs.subscribe();

// obs.subscribe(value => console.log("observer 1 received " + value));

// obs.subscribe(value => console.log("observer 2 received " + value));




// // The map operator simply takes an Observable, and adds a transforming function that processes the output of the stream
// let obs2 = Rx.Observable.interval(500).take(5)
//         .map(i => 2 * i );

// obs2.subscribe( value => console.log('obs2 ' + value));




// var obs = Rx.Observable.interval(500).take(5);

// var reduced = obs.scan((state, value) => state + value , 1000);

// reduced.subscribe(total => console.log("total =" + total));




var obs = Rx.Observable.interval(500).take(5)
            .do(i => console.log("obs value "+ i) )
            .share();

obs.subscribe(value => console.log("observer 1 received " + value));

obs.subscribe(value => console.log("observer 2 received " + value));
