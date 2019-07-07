<template>
    <transition name="slide-com">
        <div class="setting-wrapper" v-show="menuVisible && settingVisible == 2">
            <div class="setting-progress">
                <div class="read-time-wrapper">
                    <span class="read-time-text">111</span>
                    <span class="icon-forward"></span>
                </div>
                <div class="progress-wrapper">
                    <div class="progress-icon-wrapper">
                        <span class="icon-back" @click="prevSection()"></span>
                    </div>
                    <input class="progress" type="range" max="100" min="0" step="1" :value="progress" :disabled="!bookAvaliable" @change="onProgressChange($event.target.value)" @input="onProgressInput($event.target.value)">
                    <div class="progress-icon-wrapper">
                        <span class="icon-forward" @click="nextvSection()"></span>
                    </div>
                    <div class="text-wrapper">
                        <span>{{bookAvaliable? progress + '%' : '加载中...'}}</span>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import ebookMixin from '../../utils/mixin'
    export default {
        mixins: [ebookMixin],
        methods: {
            onProgressChange() {

            },
            onProgressInput() {

            },
            prevSection() {

            },
            nextSection() {

            }
        }
    }
</script>

<style lang="scss">
    @import '../../assets/styles/global';
    .setting-wrapper {
        position: absolute;
        display: flex;
        flex-direction: column;
        bottom: px2rem(48);
        left: 0;
        width: 100%;
        height: px2rem(90);
        z-index: 1;
        box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
        background: white;
        .setting-progress {
            position: relative;
            width: 100%;
            height: 100%;
            .read-time-wrapper {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: px2rem(40);
                font-size: px2rem(12);
                @include center;
            }
            .progress-wrapper {
                width: 100%;
                height: 100%;
                padding: 0 px2rem(15);
                box-sizing: border-box;
                @include center;
                .progress-icon-wrapper {
                    font-size: px2rem(20);
                }
                .progress {
                    width: 100%;
                    -webkit-appearance: none;
                    height: px2rem(2);
                    background-size: 0 100%!important;
                    margin: 0 px2rem(10);
                    &:focus {
                        outline: none;
                    }
                    &::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        height: px2rem(20);
                        width: px2rem(20);
                        border-radius: 50%;
                        background: white;
                        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .15);
                        border: px2rem(1) solid #ddd;
                    }
                }
                .text-wrapper {
                    position: absolute;
                    left: 0;
                    bottom: px2rem(10);
                    width: 100%;
                    font-size: px2rem(12);
                    text-align: center;
                }
            }
        }
    }
</style>