const respostaAPI = {
  status: 200,
  data: {
    user: {
      profile: {
        username: "alissonfa",
      },
    },
  },
};

const {
  data: {
    user: {
      profile: { username: usuarioGithub, avatarUrl = "default-avatar.png" },
    },
  },
} = respostaAPI;

console.log(usuarioGithub);
console.log(avatarUrl);
