<template>
  <div class="center">
    <vs-row justify="center" align="center">
      <vs-col justify="flex-start" align="flex-start" w="6" sm="10">
        <vs-row>
          <vs-col w="9">
            <h1 class="font-size-45 pm-0">Welcome to</h1>
            <h1 class="font-size-45 pm-0">Learn</h1>
          </vs-col>

          <vs-col
            w="3"
            justify="center"
            align="center"
            class="mt-5 mt-sm-none"
          >
            <vs-row justify="flex-end">
              <vs-button flat to="/login">
                <i class="bx bx-left-arrow-alt"></i
              ></vs-button>
              <vs-button class="px-5">Login</vs-button>
            </vs-row>
          </vs-col>
        </vs-row>

        <vs-row justify="center" align="center" class="mt-5">
          <vs-col w="6" sm="12" justify="center" align="center" class="pa-1">
            <vs-card type="4" class="card">
              <template #title>
                <h6>Google</h6>
              </template>

              <template #img>
                <img
                  src="/images/login-google.png"
                  alt="Login with Google"
                />
              </template>

              <template #text style="width: 100% !important">
                <p class="font-size-9">Loading...</p>
              </template>

              <template #interactions>
                <vs-button icon loading></vs-button>
              </template>
            </vs-card>

            <p class="font-size-9 mt-5">Não tem uma conta? <a href="/register">Criar Conta</a></p>
          </vs-col>
        </vs-row>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import { defineComponent, useRouter, useMeta,  onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const router = useRouter()

    useMeta({ title: "Login with Google" })

    onMounted(() => {
      //simulando um time para o login usando Facebbok
      setTimeout(() => {
        router.push("/allipiopereira")
      }, 2000)
    })
  },
  head: {}
})
</script>