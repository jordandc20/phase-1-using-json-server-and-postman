fetch('http://api.open-notify.org/astros.json')
    .then(function (resp) {
        console.log(resp)
        return resp.json()
    })
    .then(function (data) {
        console.log(data)
    })