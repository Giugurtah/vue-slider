const vueElement = new Vue({
    el: "body > .container",
    data: {
        images: ["./img/image1.jpg", "./img/image2.jpg", "./img/image3.jpg", "./img/image4.jpg"],
        currentIndex: 0,
    },
    methods: {
        imgActive(number) {
            if (number === this.currentIndex) {
                return ""
            } else {
                return "hidden"
            }
        },
        isActive(number) {
            if(number === this.currentIndex){
                return "active"
            } else {
                return ""
            }
        },
        increaseIndex() {
            if (this.currentIndex === this.images.length-1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
        },
        decreaseIndex() {
            if (this.currentIndex === 0) {
                this.currentIndex = this.images.length-1;
            } else {
                this.currentIndex--;
            }
        }
    }
})

