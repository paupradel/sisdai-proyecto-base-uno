import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hasMainNav: true,
    openMainNav: false,
    openGobNav: false,
    hasA11yMenu: true,
    openA11yMenu: false,
    vista_simplificada: false,
    enlaces_subrayados: false,
    cambiar_tipografia: false,

    nombre_eni: 'nombre_eni_var_store',

    version_proyecto: process.env.PACKAGE_VERSION,
    actualizacion_proyecto: process.env.DATE_DEPLOY,
    entorno_proyecto: process.env.ENV_DEPLOY,
  },
  getters: {
    hasMainNav(state) {
      return state.hasMainNav;
    },
    isOpenMainNav(state) {
      return state.openMainNav;
    },
    isOpenGobNav(state) {
      return state.openGobNav;
    },
    hasA11yMenu(state) {
      return state.hasA11yMenu;
    },
    isOpenA11yMenu(state) {
      return state.openA11yMenu;
    },
    tieneVistaSimplificada(state) {
      return state.vista_simplificada;
    },
    tieneEnlacesSubrayados(state) {
      return state.enlaces_subrayados;
    },
    cambiarTipografia(state) {
      return state.cambiar_tipografia;
    },

    obtenerNombreEni(state) {
      return state.nombre_eni;
    },

    versionProyecto(state) {
      return state.version_proyecto;
    },
    actualizacionProyecto(state) {
      return state.actualizacion_proyecto;
    },
    entornoProyecto(state) {
      return state.entorno_proyecto;
    },
  },
  mutations: {
    openMainNav(state) {
      state.openMainNav = true;
    },
    closeMainNav(state) {
      state.openMainNav = false;
    },
    toggleMainNav(state) {
      state.openMainNav = !state.openMainNav;
    },
    openGobNav(state) {
      state.openGobNav = true;
    },
    closeGobNav(state) {
      state.openGobNav = false;
    },
    toggleGobNav(state) {
      state.openGobNav = !state.openGobNav;
    },
    toggleA11yMenu(state) {
      state.openA11yMenu = !state.openA11yMenu;
    },
    alternarVistaSimplificada(state) {
      state.vista_simplificada = !state.vista_simplificada;
    },
    quitarVistaSimplificada(state) {
      state.vista_simplificada = false;
    },
    alternarEnlacesSubrayados(state) {
      state.enlaces_subrayados = !state.enlaces_subrayados;
    },
    quitarEnlacesSubrayados(state) {
      state.enlaces_subrayados = false;
    },
    cambiarTipografiaAtkinson(state) {
      state.cambiar_tipografia = !state.cambiar_tipografia;
    },
    quitarCambioDeTipografia(state) {
      state.cambiar_tipografia = false;
    },
  },
  actions: {
  },
  modules: {
  },
});
