<template>
    <div class="store-shelf">
        <shelf-title></shelf-title>
        <scroll class="store-shelf-scroll-wrapper" :top="0">
            <shelf-search></shelf-search>
        </scroll>
    </div>
</template>

<script>
    import ShelfTitle from '../../components/shelf/ShelfTitle.vue'
    import ShelfSearch from '../../components/shelf/ShelfSearch.vue'
    import Scroll from '../../components/common/Scroll.vue'
    import { storeHomeMixin } from '../../utils/mixin'

    export default {
        mixins: [storeHomeMixin],
        components: {
            ShelfTitle,
            Scroll,
            ShelfSearch
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/global';
    .store-shelf {
        position: relative;
        width: 100%;
        height: 100%;
        background: white;
        .store-shelf-scroll-wrapper {
            position: absolute;
            top: 0;
            left: 0;
        }
    }
</style>
