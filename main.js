//створення фільтра глобального
Vue.filter ('capatilize', function (value){
    if(!value) return ''
    value = value.toString()
    return value.replace(/\b\w/g, function(l) {return l.toUpperCase() })
})
//створення компонента глобального
Vue.component ('app-car', {
    data: function () {
        return {
            cars: [
                {model: "BMW"},
                {model: "Audi"},
                {model: "Mercedes-Benz AMG"},
                {model: "Ford"},
            ]
        }
    },
    template: '<div><div class="car" v-for="car in cars"><p>{{ car.model }}</p></div></div>'
});
new Vue({
    //елемент
    el: '#app',
    //створення компонента локального
    components: {
        'app-car': {
            data: function () {
                return {
                    cars: [
                        {model: "BMW"},
                        {model: "Audi"},
                        {model: "Mercedes-Benz AMG"},
                        {model: "Ford"},
                    ]
                }
            },
            template: '<div><div class="car" v-for="car in cars"><p>{{ car.model }}</p></div></div>'
        
        }
    },
    data: {
        title: "Hello World!",
        styleCSS: '',
        value: 1,
        show: true,
        message: 'Hello world. hello',
        cars: [
            {model: "BMW", speed: 250.8},
            {model: "Audi", speed: 240.21},
            {model: "Mercedes-Benz AMG", speed: 350.4},
            {model: "Ford", speed: 160.5},
        ]
    },
    methods: {
        changeText () {
            this.title = 'New Text'
        },
        increment(value) {
            this.value = value
            if(value == 25){
                alert(" Number 25")
            }
        }
    },
    computed: {
        doubleValue () {
            return this.value * 2
        },
        showMess () {
            return this.message.toUpperCase ();
        }
    },
    //створення фільтра локального
    filters: {
        lowercase (value) {
            return value.toLowerCase ()
        }
    }
});

new Vue({
    //елемент
    el: '#app2'
});
