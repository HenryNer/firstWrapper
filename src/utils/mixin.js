import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { themeList, addCss, removeAllCss } from './book'

const ebookMixin = {
    computed: {
        ...mapState('book', ['currentBook','fileName','menuVisible','settingVisible','defaultFontSize','defaultFontFamily','fontFamilyVisible','defaultTheme','progress','bookAvaliable']),
        themeList() {
            return themeList(this)
        }
    },
    methods: {
        ...mapMutations('book', ['set_currentBook','set_fileName','set_menuVisible','set_settingVisible','set_defaultFontSize','set_defaultFontFamily','set_fontFamilyVisible','set_defaultTheme','set_progress','set_bookAvaliable']),
        ...mapActions('book',['setCurrentBook','setFileName','setMenuVisible','setSettingVisible','setDefaultFontSize','setDefaultFontFamily','setFontFamilyVisible','setDefaultTheme','setProgress','setBookAvaliable']),
        initGlobalStyle() {
            removeAllCss()
            //加载内容外的主题样式
            switch (this.defaultTheme) {
                case 'Default':
                    addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_default.css`)
                    break
                case 'Eye':
                    addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_eye.css`)
                    break
                case 'Gold':
                    addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_gold.css`)
                    break
                case 'Night':
                    addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_night.css`)
                    break
                default :
                    addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_default.css`)
            }
        }
    }
}

export default ebookMixin