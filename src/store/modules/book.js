const book = {
  name: 'book',
  namespaced: true,
  state: {
    currentBook: null,
    fileName: '',
    menuVisible: false,
    settingVisible: -1, // -1：不显示，0：字号，1：主题，2：进度，3：目录
    defaultFontSize: 16,
    defaultFontFamily: 'Default',
    fontFamilyVisible: false,
    defaultTheme: null,
    progress: 0,
    bookAvaliable: false
  },
  mutations: {
    set_currentBook(state, payload) {
      state.currentBook = payload
  },
    set_fileName(state, payload) {
        state.fileName = payload
    },
    set_menuVisible(state, payload) {
        state.menuVisible = payload
    },
    set_settingVisible(state, payload) {
        state.settingVisible = payload
    },
    set_defaultFontSize(state, payload) {
      state.defaultFontSize = payload
  },
    set_defaultFontFamily(state, payload) {
      state.defaultFontFamily = payload
  },
    set_fontFamilyVisible(state, payload) {
      state.fontFamilyVisible = payload
  },
    set_defaultTheme(state, payload) {
      state.defaultTheme = payload
  },
    set_progress(state, payload) {
      state.progress = payload
  },
    set_bookAvaliable(state, payload) {
      state.bookAvaliable = payload
  }
  },
  actions: {
    setCurrentBook(context, payload) {
      return context.commit('set_currentBook', payload)
    },
    setFileName(context, payload) {
        return context.commit('set_fileName', payload)
    },
    setMenuVisible(context, payload) {
      return context.commit('set_menuVisible', payload)
    },
    setSettingVisible(context, payload) {
      return context.commit('set_settingVisible', payload)
    },
    setDefaultFontSize(context, payload) {
      return context.commit('set_defaultFontSize', payload)
    },
    setDefaultFontFamily(context, payload) {
      return context.commit('set_defaultFontFamily', payload)
    },
    setFontFamilyVisible(context, payload) {
      return context.commit('set_fontFamilyVisible', payload)
    },
    setDefaultTheme(context, payload) {
      return context.commit('set_defaultTheme', payload)
    },
    setProgress(context, payload) {
      return context.commit('set_progress', payload)
    },
    setBookAvaliable(context, payload) {
      return context.commit('set_bookAvaliable', payload)
    }
  }
}

export default book