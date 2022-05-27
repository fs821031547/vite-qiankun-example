const microApps = [
  {
    name: 'myMicroAppName',
    entry: '//localhost:3001',
    activeRule: '/vue3Vite',
  },
    {
    name: 'myMicroAppName1',
    entry: '//localhost:3002',
    activeRule: '/vue2',
  },
];

const apps = microApps.map((item) => {
  return {
    ...item,
    container: "#micro-app", // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
    },
  };
});

export default apps;