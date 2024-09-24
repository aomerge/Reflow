module.exports = {
    purge: {
      content: [
        './src/**/*.{js,jsx,ts,tsx}',  // Rutas donde Tailwind buscará clases usadas
        './public/index.html',          // Si usas un HTML en public
      ],
    },
    darkMode: false,
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  