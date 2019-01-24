fetch("https://spyproxy.bangazon.com/student/commit/https://api.github.com/users/FARRELLKAT/events")
.then(event => event.json())
.then(parsedEvents => {
    console.log(parsedEvents[0].payload.commits[0].message)
    let latestmessage = parsedEvents[0].payload.commits[0].message
    document.getElementById("output").innerHTML = latestmessage
})
