Page({
    data() {
        return {
            isCard: false
        };
    },
    methods: {
        IsCard(e) {
            this.isCard = e.detail.value
        },
    }
})