<template>
    <div class="ebook-reader">
        <div id="read"></div>
    </div>
</template>

<script>
import Epub from 'epubjs'
import ebookMixin from '../../utils/mixin'
import { getFontFamily, saveFontFamily, getFontSize, saveFontSize, getTheme, saveTheme } from '../../utils/localStorage'

export default {
    mixins: [ebookMixin],
    methods: {
        prevPage() {
            if (this.rendition) {
                this.rendition.prev()
                this.hiddenTitleAndMenu()
            }
        },
        nextPage() {
            if (this.rendition) {
                this.rendition.next()
                this.hiddenTitleAndMenu()
            }
        },
        toggleTitleAndMenu() {
            // if (this.menuVisible) {
                this.setSettingVisible(-1)
            // }
            this.setFontFamilyVisible(false)
            this.setMenuVisible(!this.menuVisible)
        },
        hiddenTitleAndMenu() {
            this.setMenuVisible(false)
            this.setSettingVisible(-1)
            this.setFontFamilyVisible(false)
        },
        initTheme() {
            //缓存内容主题
            let defaultTheme = getTheme(this.fileName)
            if (!defaultTheme) {
                defaultTheme = this.themeList[0].name
                saveTheme(this.fileName, defaultTheme)
            }
                this.setDefaultTheme(defaultTheme)
            //加载内容主题
            this.themeList.forEach(theme => {
                this.rendition.themes.register(theme.name, theme.style)
            })
            this.rendition.themes.select(defaultTheme)
        },
        initFontSize() {
            //缓存字号
            let size = getFontSize(this.fileName)
            //第一次打开缓存默认字号
            if (!size) {
                saveFontSize(this.fileName, this.defaultFontSize)
            } else {
                this.rendition.themes.fontSize(size)
                this.setDefaultFontSize(size)
            }    
        },
        initFontFamily() {
            //缓存字体
            let font = getFontFamily(this.fileName)
            //第一次打开缓存默认字体
            if (!font) {
                saveFontFamily(this.fileName, this.defaultFontFamily)
            } else {
                this.rendition.themes.font(font)
                this.setDefaultFontFamily(font)
            }
        },
        initRendition() {
            this.rendition = this.book.renderTo('read',{
                width: innerWidth,
                height: innerHeight,
                //兼容在微信上正常使用
                method: 'default'
            })
            this.rendition.display().then(() => {
                this.initTheme()
                this.initFontFamily()
                this.initFontSize()
                // this.initGlobalStyle()
            })
            /**
             * (加载字体资源)rendition钩子函数hooks下content表示阅读器渲染完后可以获取到资源文件后调用这个方法，contents对象用来管理资源，addStylesheet表示可以手动添加样式文件
             */
            this.rendition.hooks.content.register(contents => {
                Promise.all([
                    contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/cabin.css`),
                    contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/daysOne.css`),
                    contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/montserrat.css`),
                    contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/tangerine.css`)
                ]).then(() => {
                            
                    })
                })
        },
        initGesture() {
            this.rendition.on('touchstart', event => {
                this.touchStartX = event.changedTouches[0].clientX
                this.touchStartTime = event.timeStamp
            })
            this.rendition.on('touchend', event => {
                const offsetX = event.changedTouches[0].clientX - this.touchStartX
                const time = event.timeStamp - this.touchStartTime
                if (offsetX > 40 && time < 500) {
                    this.prevPage()
                } else if (offsetX < -40 && time < 500) {
                    this.nextPage()
                } else {
                    this.toggleTitleAndMenu()
                }
                event.preventDefault()
                event.stopPropagation()
            })
        },
        initEpub() {
            const url = `${process.env.VUE_APP_RES_URL}/epub/` + this.fileName + '.epub'
            this.book = new Epub(url)
            this.setCurrentBook(this.book)
            this.initRendition()
            this.initGesture()
            //分页计算消耗性能，所以在book解析完后再调用钩子函数来进行分页
            this.book.ready.then(() => {
                //传入的是每页显示的字数来进行分页计算
                return this.book.locations.generate(750 * (window.innerWidth / 375) * (getFontSize(this.fileName) / 16))
            }).then(locations => {
                this.setBookAvaliable(true)
            })
        }
    },
    mounted() {
        const fileName = this.$route.params.fileName.split('|').join('/')
        this.setFileName(fileName).then(() => this.initEpub())
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/global';
</style>
