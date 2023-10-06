import svgLoader from 'vite-svg-loader';
const isDev = process.env.NODE_ENV === 'development';
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: '',
      baseUrl: '',
    },
  },
  css: ['~/assets/styles/style.css'],
  modules: ['@pinia/nuxt'],
  vite: {
    plugins: [
      svgLoader({
        svgo: false,
      }),
    ],
    css: {
      modules: {
        generateScopedName: isDev
          ? (name, filename) => {
              const componentName = filename.split('/').pop()?.split('.')[0];
              return `${componentName}_${name}`;
            }
          : '[hash:base64:4]',
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
