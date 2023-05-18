<template>
  <div>
    <div class="cover">
      <div class="cover-gradient">
        <h1 class="cover-title">Título de portada</h1>
        <h2 class="cover-subtitle">
          Un capítulo del Ecosistema Nacional Informático de PRONACE
        </h2>
      </div>
    </div>

    <div class="container text m-y-3">
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>

      <hr>

      <p>
        <b>Texto base</b>
        Lorem ipsum dolor <a href="#ejeles">link</a> sit amet consectetur adipisicing elit.
        Iusto nulla beatae totam error assumenda voluptate sed dolorem voluptatibus et incidunt odio
        quos <i>delectus qui pariatur</i>, architecto reiciendis voluptatem officiis natus!
        Iusto nulla beatae totam error assumenda voluptate sed dolorem voluptatibus et incidunt odio
        quos delectus qui pariatur, architecto reiciendis voluptatem officiis natus!
        Iusto nulla beatae totam error assumenda voluptate sed dolorem voluptatibus et incidunt odio
        quos delectus qui pariatur, <button class="link">boton clase .link</button> reiciendis.
        Iusto nulla beatae totam error assumenda voluptate sed dolorem voluptatibus et incidunt odio
        quos delectus qui pariatur, architecto reiciendis voluptatem officiis natus!
        Iusto nulla totam sed dolorem voluptatibus et incidunt
        quos delectus qui pariatur, architecto reiciendis voluptatem officiis natus!
        Iusto nulla beatae totam error assumenda voluptate sed dolorem voluptatibus et incidunt odio
        quos delectus qui pariatur, architecto reiciendis voluptatem officiis natus!
      </p>

      <hr>

      <button type="button">boton</button>
      <a href="#ejeles" class="btn">link class .btn</a>

      <hr>

      <details>
        <summary>details summary</summary>
        <p>
          Details. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Et debitis necessitatibus quia eaque maxime magnam sint unde repellendus,
          odit dolor repellat recusandae dolores, odio quod iusto doloribus ducimus omnis animi.
        </p>
      </details>

      <hr>

      <ul>
        <li>lista desordenada</li>
        <li>lista desordenada texto para que se vea el interlineado.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </li>
        <li>lista desordenada
          <ul>
            <li>lista desordenada segundo nivel</li>
            <li>lista desordenada segundo nivel</li>
          </ul>
          <ol>
            <li>lista ordenada segundo nivel</li>
            <li>lista ordenada segundo nivel</li>
          </ol>
        </li>
      </ul>

      <hr>

      <ol>
        <li>lista ordenada</li>
        <li>lista ordenada</li>
        <li>lista ordenada
          <ul>
            <li>lista desordenada segundo nivel</li>
            <li>lista desordenada segundo nivel</li>
          </ul>
          <ol>
            <li>lista ordenada segundo nivel</li>
            <li>lista ordenada segundo nivel</li>
          </ol>
        </li>
        <li>lista ordenada</li>
        <li>lista ordenada</li>
      </ol>

      <hr>

      <dl>
        <dt>Lista de detalle</dt>
        <dd>Descipción</dd>
        <dt>Título</dt>
        <dd>Descripción</dd>
      </dl>

      <hr>

      <table>
        <caption>Titulo de la tabla</caption>
        <thead>
          <tr>
            <th>Título</th>
            <th>Título</th>
            <th>Título</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Contenido fila uno.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis est provident velit eaque in placeat harum unde,
              delectus ipsa eius labore magnam iusto!
              Voluptatem saepe beatae id pariatur itaque tempora?
            </td>
            <td>Contenito fila uno.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis est provident velit eaque in placeat harum unde,
              delectus ipsa eius labore magnam iusto!
              Voluptatem saepe beatae id pariatur itaque tempora?
            </td>
            <td>Contenito fila uno.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis est provident velit eaque in placeat harum unde,
              delectus ipsa eius labore magnam iusto!
              Voluptatem saepe beatae id pariatur itaque tempora?
            </td>
          </tr>
          <tr>
            <td>Contenido fila dos</td>
            <td>Contenito fila dos</td>
            <td>Contenito fila dos</td>
          </tr>
          <tr>
            <td>Contenido fila tres</td>
            <td>Contenito fila tres</td>
            <td>Contenito fila tres</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Foot</td>
            <td>Foot</td>
            <td>Foot</td>
          </tr>
        </tfoot>
      </table>
      <table>
        <caption>Titulo de la tabla</caption>
        <thead>
          <tr>
            <td></td>
            <th scope="col">Título</th>
            <th scope="col">Título</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Títuo</th>
            <td>Contenito fila uno</td>
            <td>Contenito fila uno</td>
          </tr>
          <tr>
            <th scope="row">Títuo</th>
            <td>Contenito fila dos</td>
            <td>Contenito fila dos</td>
          </tr>
          <tr>
            <th scope="row">Título</th>
            <td>Contenito fila tres</td>
            <td>Contenito fila tres</td>
          </tr>
        </tbody>
      </table>

      <hr>

      <fieldset>
        <legend>fielset legend</legend>
        <label for="">label</label><br>
        <select name="" id="">
          <option value="">option</option>
          <option value="">option</option>
        </select>
        <br>
        <label for="">label</label><br>
        <input type="text">
        <br>
        <label for="">label</label><br>
        <input type="text">
        <br>
        <label for="">label</label><br>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </fieldset>

      <hr>

      <h2 class="titular-alto">
        .titular alto Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
      <h2 class="titular-bajo">
        .titular bajo Labore possimus laudantium similique. Enim, maxime. Dolores, fugit.
      </h2>

      <h2 class="titulo">.titulo</h2>
      <h2 class="subtitulo">.subtitulo</h2>

      <p class="texto-alto">
        .texto-alto
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Modi fugit eos nobis provident quas illo deleniti perspiciatis praesentium,
        ea sapiente odio, iusto repudiandae cupiditate natus animi voluptas
        harum placeat dolorum?
      </p>
      <p class="texto-primario">
        .texto-primario
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Modi fugit eos nobis provident quas illo deleniti perspiciatis praesentium,
        ea sapiente odio, iusto repudiandae cupiditate natus animi voluptas
        harum placeat dolorum?
      </p>
      <p class="texto-secundario">
        .texto-secundario
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Modi fugit eos nobis provident quas illo deleniti perspiciatis praesentium,
        ea sapiente odio, iusto repudiandae cupiditate natus animi voluptas
        harum placeat dolorum?
      </p>
      <p class="texto-notas">
        .texto-notas
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Modi fugit eos nobis provident quas illo deleniti perspiciatis praesentium,
        ea sapiente odio, iusto repudiandae cupiditate natus animi voluptas
        harum placeat dolorum?
      </p>
      <p>
        <button type="button" class="btn-lg">.btn-lg</button>
        <button type="button" class="btn-md">.btn-md</button>
        <button type="button" class="btn">.btn</button>
        <button type="button" class="btn-sm">.btn-sm</button>
      </p>
      <p>
        <button type="button" class="btn-bold">.btn-bold</button>
      </p>
      <p>
        <button type="button" class="btn-block">.btn-block</button>
      </p>

      <hr>

      <h2>GridLinkCoverImg</h2>
      <GridLinkCoverImg>
        <LinkCoverImg
          cover_escritorio="https://picsum.photos/1200/800"
          cover_movil="https://picsum.photos/1200/800"
          url="http://google.com"
          target="_blank"
          title="LinkCoverImg size full. cover_escritorio + cover_movil"
          size="full"
        />
        <LinkCoverImg
          cover="https://picsum.photos/1200/800"
          url="http://google.com"
          target="_blank"
          title="size half. cover"
          size="half"
        />
        <LinkCoverImg
          cover="https://picsum.photos/1200/800"
          url="#"
          title="titulo oculto"
          size="size half"
          :degradado_activo="false"
        />
        <LinkCoverImg
          cover="https://picsum.photos/1200/800"
          url="#"
          title="size half-desk. cover"
          size="half-desk"
        />
        <LinkCoverImg
          cover="https://picsum.photos/1200/800"
          url="#"
          title="half-desk sin degradado"
          size="half-desk"
          :degradado_activo="false"
        />
      </GridLinkCoverImg>

      <hr>

      <h2>Pruebas tipografica iconos</h2>
      <button class="btn-icono icono-acercar"></button>
      <button class="btn-icono icono-alejar"></button>
      <button class="btn-icono icono-centrar"></button>
      <button class="btn-icono icono-cerrar"></button>
      <button class="btn-icono icono-seleccion"></button>
      <span class="icono-sm icono-check"></span>
      <span class="icono-sm icono-descargar"></span>
      <span class="icono-sm icono-atras"></span>

      <hr>
      <h2>Modales</h2>
      <button type="button" class="btn-bold" @click="$refs.nombre_modal_1.abrirModal()">
        Ejemplo 1
      </button>
      <button type="button" class="btn-bold" @click="$refs.nombre_modal_2.abrirModal()">
        Ejemplo 2
      </button>
      <button type="button" class="btn-bold" @click="$refs.nombre_modal_3.abrirModal()">
        Ejemplo 3
      </button>
      <modal ref="nombre_modal_1" :posicion_boton="'arriba'">
        <template v-slot:cuerpo>
          <Carousel
            :id='"carrusel_1"'
            :lista='[["https://picsum.photos/300/300","pie de foto 1"],
              ["https://picsum.photos/300/301","pie de foto 2"],
              ["https://picsum.photos/300/302","pie de foto 3"],
              ["https://picsum.photos/300/303","pie de foto 4"],]'
          />
        </template>
        <template v-slot:pie>
          <div>
          </div>
        </template>
      </modal>
      <modal ref="nombre_modal_2" :posicion_boton="'arriba'">
        <template v-slot:encabezado>
          <p class="texto-alto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit,
            integer habitasse taciti facilisi per rhoncus, aliquet
            dis fringilla faucibus parturient elementum.
          </p>
        </template>
        <template v-slot:cuerpo>
          <LinkCoverImgButton
            cover="https://picsum.photos/1200/800"
            url="http://google.com"
            target="_blank"
            title="Lorem"
            size="full"
          />
        </template>
        <template v-slot:pie>
          <div>
          </div>
        </template>
      </modal>

      <modal ref="nombre_modal_3" :posicion_boton="'abajo'">
        <template v-slot:encabezado>
          <div>
            <p class="texto-alto">
              Lorem ipsum dolor sit amet consectetur adipiscing elit,
              integer habitasse taciti facilisi per rhoncus, aliquet
              dis fringilla faucibus parturient elementum.
            </p>
          </div>
        </template>
        <template v-slot:cuerpo>
          <LinkCoverImgButton
            cover="https://picsum.photos/1200/800"
            url="http://google.com"
            target="_blank"
            title="Lorem"
            size="full"
          />
        </template>
        <template v-slot:pie>
          <a href="#">Leer documentos fundamentales</a>
        </template>
      </modal>

      <hr>
      <h2>Tarjetas</h2>
      <div>
        <TarjetaLista
          titulo="Presentaciones"
          portada="https://picsum.photos/800/800"
          :elementos=presentaciones
        />
        <TarjetaLista
          titulo="Minutas"
          :elementos=minutas
        />
      </div>
      <hr>
      <h2>Pie de componentes</h2>
      <div>

        <div class="contenedor-grafica">
            <div class="caja-prueba">
            </div>
        </div>
        <PieComponenteLibreria :afuera="true" />

        <div class="contenedor-grafica m-y-1">
          <div class="caja-prueba">
          </div>
          <PieComponenteLibreria/>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import GridLinkCoverImg from '@/components/base/GridLinkCoverImg.vue';
import LinkCoverImg from '@/components/base/LinkCoverImg.vue';
import Modal from '@/components/base/Modal.vue';
import LinkCoverImgButton from '@/components/base/LinkCoverImgButton.vue';
import Carousel from '@/components/base/Carousel.vue';
import TarjetaLista from '@/components/base/TarjetaLista.vue';
import PieComponenteLibreria from '@/components/base/PieComponenteLibreria.vue';

export default {
  name: 'GuiaEstilos',
  components: {
    GridLinkCoverImg,
    LinkCoverImg,
    Modal,
    LinkCoverImgButton,
    Carousel,
    TarjetaLista,
    PieComponenteLibreria
  },
  data() {
    return {
      presentaciones: [
        {
          id: 1,
          nombre: 'Nombre presentación 1',
          url: 'https://picsum.photos/800/800'
        },
        {
          id: 2,
          nombre: 'Nombre presentación 2',
          url: 'https://picsum.photos/800/800'
        },
      ],
      minutas: [
        {
          id: 1,
          nombre: 'Minuta 1',
          url: 'https://picsum.photos/800/800'
        },
        {
          id: 2,
          nombre: 'Minuta 2',
          url: 'https://picsum.photos/800/800'
        },
        {
          id: 3,
          nombre: 'Minuta 3',
          url: 'https://picsum.photos/800/800'
        },
        {
          id: 4,
          nombre: 'Minuta 4',
          url: 'https://picsum.photos/800/800'
        },
        {
          id: 5,
          nombre: 'Minuta 5',
          url: 'https://picsum.photos/800/800'
        },
        {
          id: 6,
          nombre: 'Minuta 6',
          url: 'https://picsum.photos/800/800'
        },
        {
          id: 7,
          nombre: 'Minuta 7',
          url: 'https://picsum.photos/800/800'
        },
      ],
    };
  }
};
</script>

<style lang="scss">
.cover {
  background-image: url(https://picsum.photos/800/800);
  @media (min-width: map-get($media-queries-limit, "mobile")) {
    background-image: url(https://picsum.photos/1600/1000);
  }
}
.contenedor-grafica{
    background: #fff;
	  width: 100%;
    border: solid black 1px;
    border-radius: 10px;
    position: relative;
    .caja-prueba{
      height: 400px;
      width: 100%;
    }
}
</style>
