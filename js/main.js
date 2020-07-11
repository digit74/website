createnotify('<i class="fas fa-exclamation-triangle"></i> Downloading files is disabled indefinitely')

function createnotify (meta, type) {
    var notifyes = document.getElementById('notifyes')
    var div = document.createElement('div')
    var notify = notifyes.appendChild(div)
    if (type == "success") {notify.setAttribute('id', 'successNotification')}
    else if (type == "error") {notify.setAttribute('id', 'errorNotification')}
    else {notify.setAttribute('id', 'defaultNotification')}
    var div2 = document.createElement('div')
    var content = notify.appendChild(div2)
    content.setAttribute('id', 'notify_content')
    var div3 = document.createElement('div')
    var metad = content.appendChild(div3)
    metad.setAttribute('id', 'notify_meta')

    metad.innerHTML = meta
    
    setTimeout(function () {
        notify.style.transition = "0.3s"
        notify.style.transform = "translateY(-100%)"
        setTimeout(function () {
            notify.remove()
        }, 290)
    }, 5000)
    
    return "Successfully created notification with name '" + meta + "' !"
}