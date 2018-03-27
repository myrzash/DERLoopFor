<template>
    <div>
        <p class="headline pa-0 pt-2" v-html="items.titleDialog"></p>

        <p v-for="cycle in commands" class="headline blue--text text--darken-2 grey lighten-3 pa-2 ma-0">
            <b>for</b> (<b>var</b> count = 0; count < {{cycle.repeatCount}}; count++) {
            <template v-for="oper in operators(cycle.commands)">
                <br/><span class="ml-4">{{oper}};</span>
            </template>
            <br/>}
        </p>
    </div>
</template>

<script>
    export default {
        props: ['items', 'commands'],
        data() {
            return {
                navs: [
                    {
                        operator: 'moveDown(50)',
                        icon: 'arrow_downward'
                    }, {
                        operator: 'moveUp(50)',
                        icon: 'arrow_upward'
                    }, {
                        operator: 'moveLeft(50)',
                        icon: 'arrow_back'
                    }, {
                        operator: 'moveRight(50)',
                        icon: 'arrow_forward'
                    }
                ],
            }
        },
        methods: {
            operators(cycle) {
                return cycle.map((item) => {
                    let i = 0;
                    while (item.icon != this.navs[i].icon) {
                        i++;
                    }
                    return this.navs[i].operator;
                });
            },
        },
    }
</script>