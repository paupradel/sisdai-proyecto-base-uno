<template>
  <div id="app" :class="appClass">
    <A11yMenu />
    <MainHeader class="header" />
    <MainNav class="navigation" :class="{'show':showNav}" />
    <router-view />
    <MainInfo />
    <ConacytFooter />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from '@/components/base/MainHeader.vue';
import MainNav from '@/components/base/MainNav.vue';
import A11yMenu from '@/components/base/A11yMenu.vue';
import MainInfo from '@/components/base/MainInfo.vue';
import ConacytFooter from '@/components/base/ConacytFooter.vue';
import MainFooter from '@/components/base/MainFooter.vue';

export default {
  name: 'App',
  components: {
    MainHeader,
    MainNav,
    A11yMenu,
    MainInfo,
    ConacytFooter,
    MainFooter,
  },
  data() {
    return {
      showNav: false,
      // scrollingNav: true,
    };
  },
  computed: {
    appClass() {
      return {
        // 'scrolling-nav': this.scrollingNav,
        // 'normal-nav': !this.scrollingNav,
        'a11y-contraste': this.$store.getters.tieneAltoContraste,
        'a11y-simplificada': this.$store.getters.tieneVistaSimplificada,
        'a11y-enlace': this.$store.getters.tieneEnlacesSubrayados,
        'a11y-tipografia': this.$store.getters.cambiarTipografia,
      };
    },
  },
  methods: {
    onScroll() {
      if (this.$store.getters.isOpenGobNav) {
        this.$store.commit('closeGobNav');
      }
      if (this.$store.getters.isOpenMainNav) {
        this.$store.commit('closeMainNav');
      }
      // if (window.pageYOffset < (window.innerHeight - 150)) {
      //   this.showNav = false;
      //   if (this.$store.getters.isOpenGobNav) {
      //     this.$store.commit('closeGobNav');
      //   }
      //   if (this.$store.getters.isOpenMainNav) {
      //     this.$store.commit('closeMainNav');
      //   }
      // } else {
      //   this.showNav = true;
      // }
    },
    calHeight() {
      const innerheight = window.innerHeight / 100;
      document.querySelector(':root').style.setProperty('--vh', `${innerheight.toString()}px`);
    },
  },
  created() {
    this.calHeight();
  },
  // updated() {
  //   if (this.$route.name === 'Inicio') {
  //     this.scrollingNav = true;
  //   } else {
  //     this.scrollingNav = false;
  //   }
  // },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
    window.addEventListener('resize', this.calHeight);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.calHeight);
  },
};
</script>

<style lang="scss">
@import '@/scss/app.scss';
.navigation {
  position: sticky;
  top: 0;
  z-index: 9998;
}
// .scrolling-nav {
//   .header {
//     position: fixed;
//     left: 0;
//     right: 0;
//     top: -50px;
//     z-index: 9999;
//     transition: top .2s ease-in-out;
//     &.show {
//       top: 0;
//     }
//   }
//   .navigation {
//     position: fixed;
//     left: 0;
//     right: 0;
//     top: -50px;
//     z-index: 9998;
//     transition: top .2s ease-in-out;
//     &.show {
//       top: 50px;
//     }
//   }
// }
// .normal-nav {
//   .header {
//     top: 0;
//     z-index: 9999;
//     transition: top .2s ease-in-out;
//     &.show {
//       top: 0;
//     }
//   }
//   .navigation {
//     position: sticky;
//     top: 0;
//     z-index: 9998;
//     transition: top .2s ease-in-out;
//     &.show {
//       top: 0;
//     }
//   }
// }

.overflow-hidden {
  overflow: hidden;
}
</style>
