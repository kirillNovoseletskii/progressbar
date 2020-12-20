<template>
    <div class="main__progressbar" ref="progress">
        <div class="main__progressbar-titles">
            <span v-for="i in data.badges" :key="i.color">
                <svg style="margin-left:-5px;margin-right:8px;" width="8" height="8" fill="none"><circle cx="50%" cy="50%" r="3.5"  :fill="i.color" /></svg> {{i.title}}
            </span>
        </div>
        <svg width="613" height="50" viewBox="0 0 613 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="main__progressbar-df"  stroke="#E8E6EC" stroke-width="2"/>	
            <path class="main__progressbar-line" :stroke="lineColor" stroke-width="2" :d="lineWigth()"/>
            
            <circle cx="9" cy="8" r="7" fill="white" :stroke="circleColor[0]" stroke-width="2"/>
            <g>
                <circle cx="151" cy="8" r="7" fill="white" :stroke="circleColor[1]" stroke-width="2"/>
                <text x="145" y="46" class="main__progressbar-txt" fill="black">{{data.currentValue}}/5</text>
            </g>
            
            <g>
                <circle cx="342" cy="8" r="7" fill="white" :stroke="circleColor[2]" stroke-width="2"/>
                <text x="322" y="46" class="main__progressbar-txt" fill="black">{{data.currentValue}}/10</text>
            </g>
            <g>
                <circle cx="585" cy="8" r="7" fill="white" :stroke="circleColor[3]" stroke-width="2"/>
                <text x="565" y="46" class="main__progressbar-txt" fill="black">{{data.currentValue}}/20</text>
            </g>
        </svg>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    methods: {
        lineWigth(){
            switch (this.data.currentValue){    
                case 5:
                    return `M6,8 L150,8`
                case 10:
                    return `M6,8 L340,8`
                case 20:
                    return `M6,8 600,8`
            }
            return `M6,8 L${this.data.currentValue*30},8`
        }
    },
    computed: {
        ...mapGetters(["data"]),
        lineColor(){
            return this.data.badges.map(i => {
                if (this.data.currentValue < 5){
                    return "#146EFF"
                } else if (this.data.currentValue >= i.value){
                    return i.color
                }
            }).filter(i => i != null).slice(-1)[0]
        },
        circleColor(){
                if (this.data.currentValue<=0) {
                    return ["#E8E6EC", "#E8E6EC", "#E8E6EC", "#E8E6EC"]
                } else if (this.data.currentValue<5){
                    return [this.lineColor, "#E8E6EC", "#E8E6EC", "#E8E6EC"]
                } else if (this.data.currentValue<10 && this.data.currentValue>=5) {
                    return [this.lineColor, this.lineColor, "#E8E6EC", "#E8E6EC"]
                } else if (this.data.currentValue>=10 && this.data.currentValue<20) {
                    return [this.lineColor, this.lineColor, this.lineColor, "#E8E6EC"]
                } else {
                    return [this.lineColor, this.lineColor, this.lineColor, this.lineColor]
                }
        }
    }
}
</script>

<style lang="scss" scoped>
    .main__progressbar{
        display: flex;
        flex-direction: column;
        &-df{
            d: path("M0.5 8H583.5");
        }
        &-titles{
           display: flex;
           padding-left: 90px; 
           display: flex;
           justify-content: center;
           span{
               display: flex; 
               justify-content: center;
               align-items: center;
               width: 94px;
               height: 28px;
               background: #303336;
               color: #fff;
               font-family: 'Montserrat', sans-serif;
               border-radius: 3px;
               font-weight: 500;
               font-size: 13px;
               margin-bottom: 20px;
               &:nth-child(2){
                   margin: 0 103px;
               }
           }
        }
        &-line, circle{
            transition: .4s;
        }
        &-txt{
            font-family: 'Montserrat', sans-serif;
            font-size: 15px;
        }
    }
    @media only screen and (max-width: 768px){
        .main__progressbar{
            display: none;
        }
    }
</style>
