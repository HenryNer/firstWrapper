<template>
    <div>
        <transition name="slide-up">
            <div class="menu-wrapper" :class="{'hidden-box-shadow': !menuVisible || settingVisible >= 0}" v-show="menuVisible">
                <div class="icon-wrapper">
                    <span class="icon-menu" @click="showSetting(3)"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon-progress" @click="showSetting(2)"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon-bright" @click="showSetting(1)"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon-A" @click="showSetting(0)"></span>
                </div>
            </div>
        </transition>
        <ebook-setting-font></ebook-setting-font>
        <ebook-setting-font-popup></ebook-setting-font-popup>
        <ebook-setting-theme></ebook-setting-theme>
        <ebook-setting-progress></ebook-setting-progress>
        <ebook-slide></ebook-slide>
    </div>
</template>

<script>
    import { ebookMixin } from '../../utils/mixin'
    import EbookSettingFont from './EbookSettingFont.vue'
    import EbookSettingFontPopup from './EbookSettingFontPopup.vue'
    import EbookSettingTheme from './EbookSettingTheme.vue'
    import EbookSettingProgress from './EbookSettingProgress.vue'
    import EbookSlide from './EbookSlide.vue'

    export default {
        mixins: [ebookMixin],
        components: {
            EbookSettingFont,
            EbookSettingFontPopup,
            EbookSettingTheme,
            EbookSettingProgress,
            EbookSlide
        },
        methods: {
            showSetting(para) {
                this.setSettingVisible(para)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/global';
    .menu-wrapper {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 2;
        display: flex;
        width: 100%;
        height: px2rem(48);
        // background: white;
        box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
        font-size: px2rem(20);
        &.hidden-box-shadow {
        box-shadow: none;
        }
        .icon-wrapper {
            flex: 1;
            @include center;
        }
    }
</style>
