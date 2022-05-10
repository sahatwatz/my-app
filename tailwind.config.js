module.exports = {
  content: [
    './public/index.html',
    './src/**/*{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'orange' : '#c88a7b',
        'purple' : '#ff7417'
      },
      height: {
        '2' : '64px'
      }
    },
  },
  plugins: [],
}
