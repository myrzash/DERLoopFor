<template>
    <v-layout column align-center class="grey lighten-3">
        <div class="rectangle">
            <img :src="line.extra?'public/2/line.png':'public/2/line-t.png'"
                 v-for="(line,index) in commands.lines"
                 :class="[line.extra?['line2', line.vertical?'line-vertical2':'']:'line', line.vertical?'line-vertical':'']"
                 :style="{left:`${line.x}px`,top:`${line.y}px`,opacity:line.extra||completedLines.includes(line)?'1':'0.3',
                 }"/>
            <div id="hero"></div>
        </div>
        <v-btn v-if="isRan" class="ma-0" style="width:100%;" large primary dark @click.native="reset">
            <v-icon>settings_backup_restore</v-icon>
            {{items.reset}}
        </v-btn>
        <v-btn class="ma-0" style="width:100%;" large primary dark @click.native="run" v-else>
            <v-icon>play_arrow</v-icon>
            {{items.run}}
        </v-btn>
    </v-layout>
</template>

<script>
    var hero;
    export default {
        props: ['items', 'commands', 'mycommands'],
        data: () => ({
            attempt: -1,
            isRan: false,
            timeouts: [],
            completedLines: [],
            positions: [],
        }),
        methods: {
            reset() {
                this.isRan = false;

                for (let timeout of this.timeouts) {
                    clearTimeout(timeout);
                }
                this.timeouts = [];
                this.completedLines = [];
                let firstPos = this.commands.correctPositions[0];
                this.positions = [firstPos];
                if (firstPos.hero) hero.style.backgroundImage = `url('../../../public/2/${firstPos.hero}')`;
                hero.style.transform = `translate(${firstPos.x}px, ${firstPos.y}px)`;
            },
            run() {
                this.attempt++;
                this.isRan = true;
                for (let i in this.mycommands) {
                    let {x, y, hero} = this.mycommands[i].route;
                    x = x + this.positions[i].x;
                    y = y + this.positions[i].y;
                    this.positions.push({x: x, y: y, hero: hero});
                }
                this.completedLines = [];
                let posits = this.positions;
                for (let i = 1; i < posits.length; i++) {
                    this.timeouts.push(setTimeout(() => {
                        if (posits[i].hero) hero.style.backgroundImage = `url('../../../public/2/${posits[i].hero}')`;
                        hero.style.transform = `translate(${posits[i].x}px, ${posits[i].y}px)`;
                        if (posits[i].x == this.commands.correctPositions[i].x && posits[i].y == this.commands.correctPositions[i].y) {
                            this.completedLines.push(this.primaryLines[i - 1]);
                        }
                        if (i == posits.length - 1 && posits[0].hero) setTimeout(() => {
                            hero.style.backgroundImage = `url('../../../public/2/${posits[0].hero}')`;
                        }, 500);
                        if (this.completedLines.length == this.primaryLines.length && posits.length == this.commands.correctPositions.length) setTimeout(() => {
                            this.$parent.next(this.attempt);

                            setTimeout(() => {
                                this.reset();
                            }, 300);
                        }, 1000);

                    }, (i - 1) * 500));
                }
            }
        },
        computed: {
            primaryLines() {
                return this.commands.lines.filter((item) => {
                    if (!item.extra) return item;
                });
            }
        },
        mounted() {
            hero = document.getElementById('hero');
            this.reset();
        },
    }
</script>

<style lang="stylus">
    .rectangle
        width: 540px;
        height: 420px;
        overflow: hidden !important;
        position: relative;

    #hero
        width: 60px;
        height: 60px;
        margin-left: -30px;
        margin-top: -50px;
        position: absolute;
        left: 0;
        top: 0;
        transition: all 0.3s ease;

    .line
        position absolute;
        left: 0;
        top: 0;
        width: 68px;
        height: 8px;
        margin-left: -4px;
        margin-top: -4px;
        transition: opacity 0.3s linear;

    .line-vertical
        transform: rotate(90deg);
        margin-left: -34px;
        margin-top: 26px;

    .line2
        position absolute;
        left: 0;
        top: 0;
        width: 60px;
        height: 4px;

    .line-vertical2
        transform: rotate(90deg);
        margin-left: -30px;
        margin-top: 30px;
</style>