let obj = {
    init: function() {
        document.getElementById('btn').addEventListener('click', this)
        document.getElementById('btn').addEventListener('blur', this)
        document.getElementById('btn').addEventListener('focus', this)
    },
    handleEvent: function(ev) {
        switch (ev.type) {
            case 'click':
                this.showTypeOfEvent(ev)
                break;
            case 'focus':
                this.showTypeOfEvent(ev)
                break;
            case 'blur':
                this.showTypeOfEvent(ev)
                break;

        }
    },
    showTypeOfEvent: function(ev) {
        console.log(ev.type + 'ed');
    }
}

obj.init()