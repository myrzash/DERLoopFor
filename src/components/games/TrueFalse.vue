<template>
    <div>
        <v-layout column text-xs-center>
            <v-flex xs12 md10 offset-md1 lg8 offset-lg2 xl6 offset-xl3>

                <blockquote class="pa-0 pl-2 ma-2  text-xs-left">
                    <h5 class="font500" v-html="items.task"></h5>
                </blockquote>

                <div v-if="data" class="pa-4">


                    <v-layout v-for="(item,index) in data" row wrap align-center text-xs-left class="pa-3"
                              v-if="index<=completed">
                        <v-flex xs12 md10>
                            <h5>{{item.phrase}}</h5>
                        </v-flex>
                        <v-flex xs6 md1>
                            <v-btn class="btnSymbol"
                                   primary
                                   :warning="states[index]==true"
                                   :success="isTrue(index,true)"
                                   :error="isFalse(index,true)"
                                   :disabled="checked&&states[index]==false&&item.state==false"
                                   @click.native="clickBtn(index,true)">^
                            </v-btn>
                        </v-flex>
                        <v-flex xs6 md1>
                            <v-btn class="btnSymbol"
                                   primary
                                   :warning="states[index]==false"
                                   :success="isTrue(index,false)"
                                   :error="isFalse(index,false)"
                                   :disabled="checked&&states[index]==true&&item.state==true"
                                   @click.native="clickBtn(index,false)">—
                            </v-btn>
                        </v-flex>
                    </v-layout>
                    <v-btn large primary class="font500" :disabled="!statesIsFull||checked"
                           @click.native="checked=true">
                        {{$lang.string.check}}
                    </v-btn>

                </div>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        props: ['items'],
        data() {
            return {
                data: null,
                attempt: 0,
                states: null,
                primaryStates: null,
                completed: 0,
                checked: false,
            }
        },
        created() {
            this.data = this.$parent.shuffle(this.items.data);
            this.states = new Array();
            this.primaryStates = new Array();
            for (let item of  this.data) {
                this.states.push(null);
                this.primaryStates.push(item.state);
            }
        },
        computed: {
            statesIsFull() {
                for (let item of this.states) {
                    if (item == null) return false;
                }
                return true;
            },
            victory() {
                for (let i = 0; i < this.primaryStates.length; i++)
                    if (this.states[i] != this.primaryStates[i]) return false;
                return true;
            }
        },
        methods: {
            isTrue(index, key) {
                return this.checked && this.states[index] == this.data[index].state && this.states[index] == key;
            },
            isFalse(index, key) {
                return this.checked && this.states[index] != this.data[index].state && this.states[index] == key;
            },
            clickBtn(index, key) {
                if (this.checked) this.attempt++;

                if (index >= this.completed) this.completed++;

                this.states.splice(index, 1);
                this.states.splice(index, 0, key);
                setTimeout(() => {
                    if (this.victory) {
                        this.$router.push({
                            name: 'res',
                            params: {
                                result: (1 - this.attempt / this.data.length) * 100,
                                resId: this.$route.params.gameId
                            }
                        });
                    }
                }, 1000);
            }
        }
    }
</script>

<style lang="stylus">
    .btnSymbol
        min-width: 60px;
        font-family AppFont500;
        font-size: 30px;
</style>