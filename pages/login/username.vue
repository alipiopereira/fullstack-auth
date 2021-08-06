<template>
  <div class="center">
    <vs-row justify="center" align="center">
      <vs-col justify="flex-start" align="flex-start" w="6" sm="10">
        <vs-row>
          <vs-col w="9">
            <h1 class="font-size-45 pm-0">Welcome to</h1>
            <h1 class="font-size-45 pm-0">Learn</h1>
          </vs-col>

          <vs-col w="3" justify="center" align="center" class="mt-5 mt-sm-none">
            <vs-row justify="flex-end">
              <vs-button flat to="/login">
                <i class="bx bx-left-arrow-alt"></i
              ></vs-button>
              <vs-button class="px-5">Login</vs-button>
            </vs-row>
          </vs-col>
        </vs-row>

        <vs-row justify="center" align="center" class="mt-5">
          <vs-col w="3" xs="12" sm="4" align="center" class="pa-1">
            <vs-card type="4" class="card">
              <template #title>
                <h6>Username</h6>
              </template>

              <template #img>
                <img
                  src="/images/login-username.png"
                  alt="Login with Username"
                />
              </template>

              <template #text style="width: 100% !important">
                <p class="font-size-6">Comece a informar seus dados...</p>
              </template>
            </vs-card>
          </vs-col>

          <vs-col
            w="6"
            xs="12"
            sm="8"
            justify="center"
            align="center"
            class="pa-1"
          >
            <vs-input
              type="text"
              name="username"
              placeholder="Username"
              v-model="state.login.username"
              v-validate="'required|min:3|max:20'"
              @click-icon=""
            >
              <template #icon>
                <i class="bx bx-user"></i>
              </template>
            </vs-input>

            <vs-input
              type="password"
              name="password"
              placeholder="Password"
              v-model="state.login.password"
              v-validate="'required|min:6|max:10'"
              :visiblePassword="state.hasVisiblePassword"
              @click-icon="state.hasVisiblePassword = !state.hasVisiblePassword"
              class="mt-1"
            >
              <template #icon>
                <i v-if="state.hasVisiblePassword" class="bx bx-show-alt"></i>
                <i v-else class="bx bx-hide"></i>
              </template>
            </vs-input>

            <vs-button block class="pm-0" @click="onSubmit(state.login)"
              >Fazer login</vs-button
            >
            <p class="font-size-9 mt-5">
              Não tem uma conta? <a href="/register">Criar Conta</a>
            </p>
          </vs-col>
        </vs-row>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import {
  defineComponent,
  useRouter,
  useMeta,
  reactive,
} from "@nuxtjs/composition-api";

import NotificationErrorLogin from "../../components/NotificationErrorLogin.vue";

export default defineComponent({
  setup() {
    const state = reactive({
      login: {
        username: "",
        password: "",
      },
      hasVisiblePassword: false,
      countError: 0,
    });

    const router = useRouter();

    useMeta({ title: "Login with Username" });

    return { state, router };
  },
  head: {},
  methods: {
    async onSubmit(data) {
      console.log(data)
      let validate = await this.$validator.validateAll();
      let countError = this.state.countError;

      if (validate) {
        //console.log("login realizado com sucesso");
        let router = this.router;
        router.push(`${"/" + this.state.login.username}`);
      } else if (countError >= 3) {
        this.$vs.notification({
          color: "danger",
          duration: "none",
          content: NotificationErrorLogin,
        });
      } else {
        this.$vs.notification({
          color: "danger",
          title: "😕 Opa!",
          text: `Verifique seus dados e tente novamente.`,
        });
        this.state.countError++;
      }
    },
  },
});
</script>

<style>
.vs-input {
  width: 100%;
  height: 40px;
}

.vs-card {
  width: 155px;
}

.vs-card__text {
  width: 100%;
}
</style>