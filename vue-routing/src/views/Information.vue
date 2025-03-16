<script>
export default {
  name: 'Information',
  mounted() {
    const savedPosition = this.$route.meta.savedPosition

    setTimeout(() => {
      if (savedPosition) {
        window.scrollTo({
          letf: 0,
          top: savedPosition.top,
          behavior: 'smooth',
        })
      } else {
        window.scrollTo({
          left: 0,
          top: 150,
          behavior: 'smooth',
        })
      }
    }, 500)
  },

  beforeUnmount() {
    if (this.$route.meta) {
      this.$route.meta.savedPosition = {
        top: window.scrollY,
      }
    }
  },
}
</script>

<template>
  <div>
    <h4>Information</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nihil quasi, nisi atque
      architecto accusantium optio, praesentium quaerat ullam reiciendis quo ex nam impedit eaque
      eos repellat fugit minima nobis tempora quod possimus consectetur quia commodi. Magni maxime
      dolorum voluptatem doloremque ab quod vel atque iure libero reiciendis omnis facilis adipisci
      reprehenderit eos optio, quo iusto sint maiores. Ea laboriosam facilis, sapiente illo natus
      veniam animi nostrum odit quidem omnis modi quae saepe est iste nesciunt aspernatur optio eos
      perspiciatis doloremque aperiam dolores magnam consectetur! Nisi nam quis modi illo
      dignissimos quas repudiandae facilis nesciunt ipsam placeat, sit cum, iusto repellat pariatur
      itaque totam ducimus. Provident rem doloribus perferendis mollitia magnam, blanditiis
      architecto minus modi tempora ipsum unde accusantium iusto, possimus suscipit! Alias
      voluptatum deserunt officiis sequi porro iste pariatur libero, ex harum debitis dolores
      maiores. Ipsam labore fugiat facere, suscipit ex perspiciatis! Labore fugit neque alias saepe,
      consequatur maxime iusto praesentium debitis autem cum libero optio odio repudiandae sint
      laborum tenetur nisi possimus illo dolorum dolores. Accusamus optio eveniet ullam, praesentium
      impedit quas, velit ea natus, mollitia labore in repudiandae ratione doloremque! Libero
      corrupti praesentium magni recusandae similique totam consectetur earum expedita nostrum.
      Placeat repellendus id optio, consequatur nihil adipisci vel? Nobis, exercitationem adipisci
      vero obcaecati, placeat saepe voluptatibus maiores, similique natus aut numquam! Illo maiores
      excepturi sapiente magni possimus numquam tenetur repellendus ducimus quisquam natus ab
      tempore iure saepe laudantium, accusantium incidunt exercitationem obcaecati? Omnis qui eaque
      ad quae? Corrupti voluptas placeat numquam, odio eius earum rem, expedita aspernatur quas
      totam ab at deleniti deserunt laborum quisquam pariatur fugiat assumenda distinctio
      necessitatibus illo voluptate quo voluptates sint id? Dolorem consequatur fugit mollitia,
      similique asperiores, provident et vero, ipsa ullam iste maiores? Possimus aut illo molestias
      facilis fuga et, molestiae, magnam iste nobis deserunt totam assumenda facere iure earum.
      Natus eaque accusantium officiis. Rem nulla reprehenderit ipsum nam. Deserunt sunt numquam
      ipsum aliquid quidem molestiae omnis quas porro odit veniam! Nobis beatae iusto placeat
      laboriosam, illo exercitationem tenetur quaerat ut enim, vel porro sapiente? Fugit quidem
      delectus pariatur mollitia commodi expedita impedit alias eligendi ratione velit nemo soluta
      accusantium dicta nisi hic distinctio, molestiae nesciunt! Accusantium perferendis repellat,
      obcaecati odit, qui eaque quibusdam dolores veniam corporis, ex quis excepturi sapiente!
      Placeat ab aspernatur commodi modi nemo in iure aliquam, necessitatibus cupiditate tempora
      expedita sint nihil nobis recusandae debitis neque! Autem dolores, voluptatibus doloribus,
      tempore fugit totam, illo velit maiores at laboriosam ipsum rem. Vel repellendus harum
      ducimus, alias praesentium error quod eveniet accusamus at animi laudantium repellat veritatis
      laboriosam sint tempore quaerat delectus possimus provident sequi dolore magnam? Ad earum vel
      temporibus, consectetur, in error laboriosam cum magnam sunt, voluptates veniam natus.
      Doloremque blanditiis tempora debitis amet temporibus alias sint? Laborum perferendis sed
      mollitia reiciendis, earum, inventore obcaecati quae magni debitis numquam officiis. Deserunt
      tempore consequuntur exercitationem reprehenderit saepe repellendus doloremque distinctio
      corporis quaerat nihil libero nemo ducimus assumenda, dolorum, rem quidem beatae eum ab harum
      veritatis? Expedita molestias atque ea ipsa vitae perferendis exercitationem! Distinctio
      ratione maxime laboriosam.
    </p>
  </div>
</template>

<style scoped></style>
