/*
https://stackoverflow.com/questions/69260715/skipping-larger-chunks-while-running-npm-run-build
https://rollupjs.org/guide/en/#outputmanualchunks
*/

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },
  },
});
