<template>
    <div>
        <v-layout column align-center justify-center>
            <blockquote class="pa-0 pl-2 ma-2">
                <h5 class="font500" v-html="items.task"></h5>
            </blockquote>
        </v-layout>

        <v-layout row wrap>
            <v-flex xs12 md6 lg4 offset-lg2 xl3 offset-xl3>
                <h4 class="font700 mt-3">
                    {{items.runner}}
                </h4>

                <mframe :items="items" :commands="commands[numberGame]"
                        :mycommands="commandsWithCount"></mframe>
                <v-stepper :value="numberGame+1" class="elevation-0">
                    <v-stepper-header>
                        <template v-for="(item,index) in commands">
                            <v-stepper-step :step="index+1">
                            </v-stepper-step>
                            <v-divider v-if="index!=commands.length-1"></v-divider>
                        </template>
                    </v-stepper-header>
                </v-stepper>
                <h4 class="font700 ma-0 mt-4">
                    {{items.codeJS}}
                </h4>
                <dialog-code class="mb-4" :items="items" :commands="mycommands"></dialog-code>
            </v-flex>
            <v-flex xs12 md6 lg4 xl3>
                <!--WORKSPACE START-->
                <!--<v-layout row justify-end class="mb-2 mr-3">-->
                <!--<v-btn primary flat large @click.native="restore">-->
                <!--<v-icon primary>settings_backup_restore-->
                <!--</v-icon>-->
                <!--restore-->
                <!--</v-btn>-->
                <!--</v-layout>-->
                <v-layout column align-center>
                    <h4 class="font700 mt-3">
                        {{items.blocks}}
                    </h4>
                    <div class="text-xs-center">
                        <!--WHEN RUN-->
                        <v-btn style="width:320px; pointer-events: none;" class="ma-0 mb-1 elevation-0"
                               large
                        >
                            {{items.whenRun}}
                            <v-icon>play_arrow</v-icon>
                        </v-btn>

                        <!--BLOCK CYCLE-->
                        <v-card v-for="(cycle, indexCycle) in mycommands"
                                class="ma-0 mb-1 pink lighten-2 text-xs-right "
                                style="width:320px;">
                            <v-layout row align-center justify-center>
                                <v-spacer></v-spacer>
                                <v-btn class="ma-0 mt-1" large dark flat style="pointer-events: none;">
                                    {{items.cycle}}
                                    <v-icon>cached</v-icon>
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn icon dark class="ma-0 mr-1" v-tooltip:right="{ html: $lang.string.remove}"
                                       @click.native="mycommands.splice(indexCycle,1)">
                                    <v-icon>close</v-icon>
                                </v-btn>
                            </v-layout>

                            <v-divider class="mt-1 mb-1" dark></v-divider>

                            <div class="primary mb-1 ml-3 mr-3" v-for="(command,index) in cycle.commands">
                                <v-layout row align-center justify-center>
                                    <v-spacer></v-spacer>
                                    <v-btn flat dark style="pointer-events: none;">
                                        {{command.title}}
                                        <v-icon dark>{{command.icon}}</v-icon>
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn large icon dark class="ma-0 mr-1"
                                           v-tooltip:right="{ html: $lang.string.remove}"
                                           @click.native="cycle.commands.splice(index,1)">
                                        <v-icon>close</v-icon>
                                    </v-btn>
                                </v-layout>
                            </div>

                            <div class="fabs mb-1 mr-1">
                                <v-speed-dial
                                        v-model="fabs[indexCycle]"
                                        right
                                        direction="left"
                                        hover
                                        transition="scale-transition"
                                >
                                    <v-btn
                                            slot="activator"
                                            primary
                                            dark
                                            fab
                                            hover
                                            v-model="fabs[indexCycle]"
                                    >
                                        <v-icon>add</v-icon>
                                        <v-icon>close</v-icon>
                                    </v-btn>

                                    <v-btn v-for="nav in navs"
                                           fab
                                           dark
                                           small
                                           primary
                                           @click.native="cycle.commands.push(nav)"
                                           v-tooltip:bottom="{html:nav.title}"
                                    >
                                        <v-icon>{{nav.icon}}</v-icon>
                                    </v-btn>
                                </v-speed-dial>
                            </div>
                            <v-divider class="mt-2" dark></v-divider>
                            <v-layout row align-center justify-center>
                                <v-spacer></v-spacer>
                                <p class="white--text font700 ma-0">
                                    {{items.columnRepeats.toUpperCase()}}
                                </p>
                                <v-menu offset-y class="ma-0">
                                    <v-btn
                                            large dark
                                            flat small slot="activator">
                                        <span class="font700">{{cycle.repeatCount}}</span>
                                        <v-icon>arrow_drop_down</v-icon>
                                    </v-btn>
                                    <v-list>
                                        <v-list-tile v-for="item in 8" @click.native="cycle.repeatCount = item">
                                            <v-list-tile-title>{{ item }}</v-list-tile-title>
                                        </v-list-tile>
                                    </v-list>
                                </v-menu>
                            </v-layout>
                        </v-card>
                        <v-btn fab large dark class="pink lighten-2"
                               @click.native="mycommands.push({repeatCount:1,commands:[]})">
                            <v-icon>add</v-icon>
                        </v-btn>
                    </div>

                </v-layout>
                <!--WORKSPACE END-->
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import DialogCode from './DialogCode.vue'
    import Mframe from './FrameRunCode.vue'

    export default {
        props: ['items'],
        components: {
            DialogCode,
            Mframe,
        },
        data() {
            return {
                numberGame: 0,
                fabs: [false],
                attempt: 0,
                navs: [
                    {
                        title: this.items.goDown,
                        icon: 'arrow_downward',
                        route: {x: 0, y: 60, hero: 'hero1.png'}
                    }, {
                        title: this.items.goUp,
                        icon: 'arrow_upward',
                        route: {x: 0, y: -60, hero: 'hero2.png'}
                    }, {
                        title: this.items.goBack,
                        icon: 'arrow_back',
                        route: {x: -60, y: 0, hero: 'hero3.png'}
                    }, {
                        title: this.items.goForward,
                        icon: 'arrow_forward',
                        route: {x: 60, y: 0, hero: 'hero4.png'}
                    }
                ],
                mycommands: [{
                    repeatCount: 1,
                    commands: []
                }],
                commands: [
                    {
                        lines: [
                            {x: 120, y: 180},
                            {x: 180, y: 180},
                            {x: 240, y: 180},
                            {x: 300, y: 180},
                            {x: 360, y: 180}
                        ],
                        correctPositions: [
                            {x: 120, y: 180, hero: 'hero4.png'},
                            {x: 180, y: 180},
                            {x: 240, y: 180},
                            {x: 300, y: 180},
                            {x: 360, y: 180},
                            {x: 420, y: 180}
                        ]
                    }, {
                        lines: [
                            {x: 120, y: 300, vertical: true},
                            {x: 120, y: 300},
                            {x: 180, y: 300},
                            {x: 240, y: 240, vertical: true},
                            {x: 240, y: 240},
                            {x: 300, y: 240},
                            {x: 360, y: 180, vertical: true},
                            {x: 360, y: 180},
                            {x: 420, y: 180},
                        ],
                        correctPositions: [
                            {x: 120, y: 360, hero: 'hero4.png'},
                            {x: 120, y: 300},
                            {x: 180, y: 300},
                            {x: 240, y: 300},
                            {x: 240, y: 240},
                            {x: 300, y: 240},
                            {x: 360, y: 240},
                            {x: 360, y: 180},
                            {x: 420, y: 180},
                            {x: 480, y: 180},
                        ]
                    }, {
                        lines: [
//                            {x: 420, y: 58, extra: true},
//                            {x: 420, y: 360, extra: true},
//                            {x: 120, y: 360, extra: true},
//                            {x: 180, y: 360, extra: true},
//                            {x: 240, y: 360, extra: true},
//                            {x: 300, y: 360, extra: true},
//                            {x: 360, y: 360, extra: true},
//                            {x: 480, y: 60, extra: true, vertical: true},
//                            {x: 480, y: 120, extra: true, vertical: true},
//                            {x: 480, y: 180, extra: true, vertical: true},
//                            {x: 480, y: 240, extra: true, vertical: true},
//                            {x: 480, y: 300, extra: true, vertical: true},
                            {x: 360, y: 60},
                            {x: 360, y: 60, vertical: true},
                            {x: 300, y: 120},
                            {x: 300, y: 120, vertical: true},
                            {x: 240, y: 180},
                            {x: 240, y: 180, vertical: true},
                            {x: 180, y: 240},
                            {x: 180, y: 240, vertical: true},
                            {x: 120, y: 300},
                            {x: 120, y: 300, vertical: true}
                        ],
                        correctPositions: [
                            {x: 420, y: 60, hero: 'hero3.png'},
                            {x: 360, y: 60},
                            {x: 360, y: 120},
                            {x: 300, y: 120},
                            {x: 300, y: 180},
                            {x: 240, y: 180},
                            {x: 240, y: 240},
                            {x: 180, y: 240},
                            {x: 180, y: 300},
                            {x: 120, y: 300},
                            {x: 120, y: 360}]
                    }, {
                        lines: [
                            {x: 60, y: 180, vertical: true, extra: true},
                            {x: 60, y: 240, vertical: true, extra: true},
                            {x: 60, y: 300, vertical: true, extra: true},
                            {x: 480, y: 240, vertical: true, extra: true},
                            {x: 480, y: 300, vertical: true, extra: true},
                            {x: 60, y: 180, extra: true},
                            {x: 60, y: 360, extra: true},
                            {x: 120, y: 360, extra: true},
                            {x: 180, y: 360, extra: true},
                            {x: 240, y: 360, extra: true},
                            {x: 300, y: 360, extra: true},
                            {x: 360, y: 360, extra: true},
                            {x: 420, y: 360, extra: true},
                            {x: 120, y: 180, vertical: true, extra: true},
                            {x: 120, y: 240},
                            {x: 180, y: 180, vertical: true},
                            {x: 180, y: 180},
                            {x: 240, y: 180, vertical: true},
                            {x: 240, y: 240},
                            {x: 300, y: 180, vertical: true},
                            {x: 300, y: 180},
                            {x: 360, y: 180, vertical: true},
                            {x: 360, y: 240},
                            {x: 420, y: 180, vertical: true},
                            {x: 420, y: 180},
                            {x: 480, y: 180, vertical: true}
                        ],
                        correctPositions: [
                            {x: 120, y: 240, hero: 'hero4.png'},
                            {x: 180, y: 240},
                            {x: 180, y: 180},
                            {x: 240, y: 180},
                            {x: 240, y: 240},
                            {x: 300, y: 240},
                            {x: 300, y: 180},
                            {x: 360, y: 180},
                            {x: 360, y: 240},
                            {x: 420, y: 240},
                            {x: 420, y: 180},
                            {x: 480, y: 180},
                            {x: 480, y: 240},
                        ]
                    }, {
                        lines: [
//                            {x: 60, y: 360, extra: true},
//                            {x: 120, y: 360, extra: true},
//                            {x: 180, y: 360, extra: true},
//                            {x: 240, y: 360, extra: true},
//                            {x: 300, y: 360, extra: true},
//                            {x: 360, y: 360, extra: true},
//                            {x: 420, y: 360, extra: true},
//                            {x: 60, y: 300, vertical: true, extra: true},
//                            {x: 480, y: 300, vertical: true, extra: true},
//                            {x: 60, y: 300, extra: true},
                            {x: 120, y: 240, vertical: true},
                            {x: 120, y: 240},
                            {x: 180, y: 180, vertical: true},
                            {x: 180, y: 180},
                            {x: 240, y: 120, vertical: true},
                            {x: 240, y: 120},
                            {x: 300, y: 120},
                            {x: 360, y: 120, vertical: true},
                            {x: 360, y: 180},
                            {x: 420, y: 180, vertical: true},
                            {x: 420, y: 240},
                            {x: 480, y: 240, vertical: true}
                        ],
                        correctPositions: [
                            {x: 120, y: 300, hero: 'hero4.png'},
                            {x: 120, y: 240},
                            {x: 180, y: 240},
                            {x: 180, y: 180},
                            {x: 240, y: 180},
                            {x: 240, y: 120},
                            {x: 300, y: 120},
                            {x: 360, y: 120},
                            {x: 360, y: 180},
                            {x: 420, y: 180},
                            {x: 420, y: 240},
                            {x: 480, y: 240},
                            {x: 480, y: 300}
                        ]
                    }, {
                        lines: [
                            {x: 360, y: 360},
                            {x: 300, y: 360},
                            {x: 240, y: 360},
                            {x: 180, y: 360},
                            {x: 120, y: 360},
                            {x: 120, y: 300, vertical: true},
                            {x: 120, y: 240, vertical: true},
                            {x: 120, y: 180, vertical: true},
                            {x: 120, y: 120, vertical: true},
                            {x: 120, y: 120},
                            {x: 180, y: 120},
                            {x: 240, y: 120},
                            {x: 300, y: 120},
                            {x: 360, y: 120},
                            {x: 420, y: 120, vertical: true},
                            {x: 420, y: 180, vertical: true},
                            {x: 420, y: 240, vertical: true},
                            {x: 420, y: 300, vertical: true}
                        ],
                        correctPositions: [
                            {x: 420, y: 360, hero: 'hero3.png'},
                            {x: 360, y: 360},
                            {x: 300, y: 360},
                            {x: 240, y: 360},
                            {x: 180, y: 360},
                            {x: 120, y: 360},
                            {x: 120, y: 300},
                            {x: 120, y: 240},
                            {x: 120, y: 180},
                            {x: 120, y: 120},
                            {x: 180, y: 120},
                            {x: 240, y: 120},
                            {x: 300, y: 120},
                            {x: 360, y: 120},
                            {x: 420, y: 120},
                            {x: 420, y: 180},
                            {x: 420, y: 240},
                            {x: 420, y: 300},
                            {x: 420, y: 360}
                        ]
                    }]
            }
        },
        methods: {
            restore() {
                this.mycommands = [{repeatCount: 1, commands: []}];
            },
            next(attempt) {
                this.attempt = attempt;
                this.$parent.$emit('game', true);
                if (this.numberGame >= this.commands.length - 1) {

                    this.$router.push({
                        name: 'res',
                        params: {
                            result: (1 - this.attempt / this.commands.length) * 100,
                            resId: this.$route.params.gameId
                        }
                    });
                }
                this.numberGame++;
                this.restore();
            }
        },
        computed: {
            commandsWithCount() {
                let array = new Array();
                for (let cycle of this.mycommands) {
                    for (let i = 0; i < cycle.repeatCount; i++) {
                        array = array.concat(cycle.commands);
                    }
                }
                return array;
            }
        }
    }
</script>

<style>
    .mblock {
        pointer-events: none;
    }

    .navs {
        width: 160px;
    }

    .fabs {
        position: relative;
        height: 60px;
    }

    .fabs .speed-dial {
        position: absolute;
    }
</style>
