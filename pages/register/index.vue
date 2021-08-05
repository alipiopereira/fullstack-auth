<template>
  <div class="center">
    <vs-row justify="center" align="center">
      <vs-col justify="flex-start" align="flex-start" w="6" sm="10">
        <vs-row>
          <vs-col w="8">
            <h1 class="font-size-45 pm-0">Welcome to</h1>
            <h1 class="font-size-45 pm-0">Learn</h1>
          </vs-col>

          <vs-col w="4" justify="center" align="center" class="mt-5 mt-sm-none">
            <vs-row justify="flex-end">
              <vs-button flat to="/login">
                <i class="bx bx-left-arrow-alt"></i
              ></vs-button>
              <vs-button class="px-5">Register</vs-button>
            </vs-row>
          </vs-col>
        </vs-row>

        <vs-row justify="center" align="center" class="mt-5">
          <vs-col w="4" xs="6" sm="4" md="6" align="center" class="pa-1">
            <vs-card type="4" class="card">
              <template #title>
                <h6>Username</h6>
              </template>

              <template #img>
                <img
                  src="/images/register-username.png"
                  alt="Login with Username"
                />
              </template>

              <template #text style="width: 100% !important">
                <p class="font-size-6">Comece a inserir seus dados...</p>
              </template>
            </vs-card>
          </vs-col>

          <vs-col
            w="6"
            xs="12"
            sm="8"
            md="6"
            justify="center"
            align="center"
            class="pa-1"
          >
            <vs-input
              type="text"
              name="username"
              placeholder="Username"
              v-model="state.username"
              v-validate="'required|min:3|max:20'"
              @click-icon=""
            >
              <template #icon>
                <i class="bx bx-user"></i>
              </template>
            </vs-input>

            <vs-input
              type="email"
              name="email"
              placeholder="Email"
              v-model="state.email"
              v-validate="'required|email'"
              @click-icon=""
              class="mt-1"
            >
              <template #icon>
                <i class="bx bx-mail-send"></i>
              </template>
            </vs-input>

            <vs-input
              type="password"
              name="password"
              placeholder="Password"
              v-model="state.password"
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

            <vs-input
              type="password"
              name="password_confirmation"
              placeholder="Confirm your password"
              v-model="state.confirmation"
              v-validate="`${'required|is:' + state.password}`"
              :visiblePassword="state.hasVisiblePassword"
              @click-icon="state.hasVisiblePassword = !state.hasVisiblePassword"
              class="mt-1"
            >
              <template #icon>
                <i v-if="state.hasVisiblePassword" class="bx bx-show-alt"></i>
                <i v-else class="bx bx-hide"></i>
              </template>
            </vs-input>

            <vs-button block class="pm-0" @click="onSubmit">Register</vs-button>
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

import NotificationErrorRegister from '../../components/NotificationErrorRegister.vue'

export default defineComponent({
  setup() {
    const state = reactive({
      username: "",
      email: "",
      password: "",
      confirmation: "",
      hasVisiblePassword: false,
      countError: 0
    });

    const router = useRouter();

    useMeta({ title: "Register" });

    return { state, router };
  },
  head: {},
  methods: {
    async onSubmit() {
      let validate = await this.$validator.validateAll();
      let countError = this.state.countError

      if (validate) {
        //console.log("Usuário registrado com sucesso");
        let router = this.router;
        router.push(`${"/" + this.state.username}`);
      } else if (countError >= 3) {
        console.log(this.$validator.errors)
        this.$vs.notification({
          color: "danger",
          duration: "none",
          content: NotificationErrorRegister
        });
      }
      else {
        console.log(this.$validator.errors)
        this.$vs.notification({
          color: "danger",
          title: "😕 Opa!",
          text: `Verifique seus dados e tente novamente.`,
        });
        this.state.countError++
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
  width: 195px;
}

.vs-card__text {
  width: 100%;
}

@media (max-width: 550px) {
  .vs-card {
  width: 145px;
}
}
</style>