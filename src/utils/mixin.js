import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { themeList, addCss, removeAllCss, getReadTimeByMinute } from './book'
import { saveLocation, getBookmark } from './localStorage'

const ebookMixin = {
    computed: {
        ...mapState('book', ['currentBook','fileName','menuVisible','settingVisible','defaultFontSize','defaultFontFamily','fontFamilyVisible','defaultTheme','progress','bookAvaliable','section','cover','metadata','navigation','offsetY','isBookmark']),
        themeList() {
            return themeList(this)
        },
        getSectionName() {
            return this.section ? this.navigation[this.section].label : ''
        }
    },
    methods: {
        ...mapMutations('book', ['set_currentBook','set_fileName','set_menuVisible','set_settingVisible','set_defaultFontSize','set_defaultFontFamily','set_fontFamilyVisible','set_defaultTheme','set_progress','set_bookAvaliable','set_section','set_cover','set_metadata','set_navigation','set_offsetY','set_isBookmark']),
        ...mapActions('book',['setCurrentBook','setFileName','setMenuVisible','setSettingVisible','setDefaultFontSize','setDefaultFontFamily','setFontFamilyVisible','setDefaultTheme','setProgress','setBookAvaliable','setSection','setCover','setMetadata','setNavigation','setOffsetY','setIsBookmark']),
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
        },
        //更新进度百分比，精确缓存电子书内容的定位，判断渲染时页面是否为书签页
        refreshLocation(isSettingProgress) {
            const currentLocation = this.currentBook.rendition.currentLocation()
            if (currentLocation && currentLocation.start && currentLocation.start.cfi) {
                const startCfi = currentLocation.start.cfi
                if (!isSettingProgress) {
                    const progress = this.currentBook.locations.percentageFromCfi(startCfi)
                    this.setProgress(Math.floor(progress * 100))
                }
                this.setSection(currentLocation.start.index)
                saveLocation(this.fileName, startCfi)
                const bookmark = getBookmark(this.fileName)
                if (bookmark) {
                    if (bookmark.some(item => item.cfi === startCfi)) {
                        this.setIsBookmark(true)
                    } else {
                        this.setIsBookmark(false)
                    }
                } else {
                    this.setIsBookmark(false)
                }
            }
        },
        //实现display电子书复用(isSettingProgress判断是否为settingProgress组件传入，如果是则在refreshLocation中不会重复更新porgress)
        display(target, cb, isSettingProgress) {
            if (target) {
                this.currentBook.rendition.display(target).then(() => {
                    this.refreshLocation(isSettingProgress)
                    if (cb) cb()
                })
            } else {
                this.currentBook.rendition.display().then(() => {
                    this.refreshLocation(isSettingProgress)
                    if (cb) cb()
                })
            }
        },
        hiddenTitleAndMenu() {
            this.setMenuVisible(false)
            this.setSettingVisible(-1)
            this.setFontFamilyVisible(false)
        },
        getReadTimeText() {
            return this.$t('book.haveRead').replace('$1', getReadTimeByMinute(this.fileName))
        }
    }
}

export default ebookMixin