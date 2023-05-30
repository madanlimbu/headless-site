module.exports = {
  // menus: {
  //   config: {
  //     maxDepth: 3,
  //   },
  // },
  navigation: {
    enabled: true,
    gql: {
      navigationItemRelated: ["Post"],
    },
  },
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: false,
      defaultLimit: 10,
      maxLimit: 20,
      apolloServer: {
        tracing: true,
      },
    },
  },
};
