<template>
  <footer class="footer-conahcyt">
    <MainContainer class="footer-flex">
      <div class="flex">
        <img
          src="@/assets/img/base/conahcyt-blanco.svg"
          alt="Gobierno de México"
          width="200px"
          height="60px">

        <p>
          Av. Insurgentes Sur 1582, Col. Crédito Constructor,<br>
          Alcaldía Benito Juárez, C.P. 03940, Ciudad de México<br>
          Tel: (55) 5322-7700
        </p>

        <p>©2023 Conahcyt Derechos Reservados en trámite</p>
      </div>
      <nav class="flex">
        <p class="footer-titulo">
          Enlaces<span class="a11y-solo-lectura">.</span>
        </p>
        <link-externo url="https://conahcyt.mx/directorio/" class="link-conahcyt">
          Directorio
        </link-externo>
        <link-externo url="https://conahcyt.mx/centro-de-contacto-de-atencion/" class="link-conahcyt">
          Centro de Contacto
        </link-externo>
        <link-externo url="https://conahcyt.mx/aviso-de-privacidad/" class="link-conahcyt">
          Política de Privacidad
        </link-externo>
        <link-externo url="http://comunidad.conahcyt.mx/index.php" class="link-conahcyt">
          Intranet Conahcyt
        </link-externo>
      </nav>
      <nav class="flex">
        <p class="footer-titulo">
          Síguenos en <span class="a11y-solo-lectura">nuestras redes sociales:</span>
        </p>
        <p>
          <link-social url="https://www.facebook.com/ConahcytMX" hover="conahcyt" icono="social-facebook" spanglish="feisbuk, " />
          <link-social url="https://twitter.com/Conahcyt_Mex" hover="conahcyt" icono="social-twitter" spanglish="tuiter, " />
          <link-social url="https://www.instagram.com/conahcyt_mex/" hover="conahcyt" icono="social-instagram" spanglish="instagram " />
          <link-social url="https://www.youtube.com/@Conahcytmx" hover="conahcyt" icono="social-youtube" spanglish=" y youtube." />
        </p>
      </nav>
    </MainContainer>
  </footer>
</template>

<script>
import MainContainer from '@/components/base/MainContainer.vue';
import LinkExterno from '@/components/base/LinkExterno.vue';
import LinkSocial from '@/components/base/LinkSocial.vue';

export default {
  name: 'MainFooter',
  components: {
    MainContainer,
    LinkExterno,
    LinkSocial,
  },
};
</script>

<style scoped lang="scss">
.footer-conahcyt {
  background: map-get($color-conahcyt, "fondo");
  box-sizing: border-box;
  overflow: hidden;
  padding-top: $gap;
  padding-bottom: $gap * .5;
  color: map-get($color-conahcyt, "texto");
  font-size: 14px;
  .footer-titulo {
    margin-top: $gap;
    font-weight: 600;
  }
  .footer-link-margen {
    margin-top: $gap;
    margin-bottom: $gap * .5;
  }
  .footer-descripcion {
    margin-bottom: $gap * .5;
  }
  .link-conahcyt {
    background: transparent;
    font-size: map-get($fuente, "size-notas");
    color: map-get($color-conahcyt, "link");
    display: block;
    &:hover,
    &:focus {
      background: transparent;
      color: map-get($color-conahcyt, "link-hover");
    }
  }
  @media (min-width: map-get($media-queries-limit, "mobile")) {
    padding-top: $gap * .25;
    padding-bottom: $gap;
    .footer-flex {
      display: flex;
      gap: $gap;
      .flex {
        flex: 1;
        &:first-child {
          flex: 2;
          padding-top: $gap*.8;
          margin-right: $gap;
        }
      }
    }
  }
}
</style>
