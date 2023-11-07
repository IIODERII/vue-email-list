const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: [],
      baseAPI: "https://flynn.boolean.careers/exercises/api",
      finalAPI: "/random/mail",
    };
  },
  methods: {},
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios.get(`${this.baseAPI}${this.finalAPI}`).then((response) => {
        this.emails.push(response.data.response);
      });
    }
  },
}).mount("#app");
