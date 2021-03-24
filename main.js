const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
              { id: 2236, color: 'Tanjiro', image: './assets/images/Tanjiro.jpg' },
              { id: 2237, color: 'Nesigo', image: './assets/images/Nesigo.png' },
              { id: 2238, color: 'giu', image: './assets/images/giu.png' },
              { id: 2239, color: 'shinobu', image: './assets/images/shinobu.png' },
              { id: 2240, color: 'Obanai', image: './assets/images/Obanai.png' },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        // solution
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        },
        // solution
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})
