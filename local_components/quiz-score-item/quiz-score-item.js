Polymer({
    newScore: false,
    ready: function() {
        console.log('debug newScore = ', this.newScore);
        if (this.newScore) {
            this.$.info.style.display = 'none';
        } else {
            this.$.newContainer.style.display = 'none';
        }
    },
    showInfo: function() {
        console.log('debug showInfo called');
        this.$.newContainer.style.display = 'none';
        this.$.info.style.display = 'block';
    },
});
