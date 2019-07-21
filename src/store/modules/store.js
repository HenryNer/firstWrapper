const store = {
    name: 'store',
    namespaced: true,
    state: {
        hotSearchOffsetY: 0,
        flapCardVisible: false,
        isEditMode: false, //是否进入编辑模式
        shelfList: [], //书架图书列表
        shelfSelected: [1,2,3], //书架图书中选中的书
        shelfTitleVisible: true //书架标题显示状态
    },
    mutations: {
        set_hot_search_offsetY(state, payload) {
            state.hotSearchOffsetY = payload
        },
        set_flap_card_visible(state, payload) {
            state.flapCardVisible = payload
        },
        set_shelf_list(state, payload) {
            state.shelfList = payload
        },
        set_shelf_selected(state, payload) {
            state.shelfSelected = payload
        },
        set_shelf_title_visible(state, payload) {
            state.shelfTitleVisible = payload
        },
        set_is_edit_mode(state, payload) {
            state.isEditMode = payload
        }
    },
    actions: {
        setHotSearchOffsetY(context, payload) {
            context.commit('set_hot_search_offsetY', payload)
        },
        setFlapCardVisible(context, payload) {
            context.commit('set_flap_card_visible', payload)
        },
        setShelfList(context, payload) {
            context.commit('set_shelf_list', payload)
        },
        setShelfSelected(context, payload) {
            context.commit('set_shelf_selected', payload)
        },
        setShelfTitleVisible(context, payload) {
            context.commit('set_shelf_title_visible', payload)
        },
        setIsEditMode(context, payload) {
            context.commit('set_is_edit_mode', payload)
        }
    }
}

export default store