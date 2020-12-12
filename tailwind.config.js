module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      backgroundImage:theme=>({
        'footer-bg':"url('../images/footer.png')"

      }),
      width: {
        'topNav':'94.66%'
      },
      height: {
        'max-97':'97.66%'
      },
      colors: {
        mainGreen:'#03CE75'
      },
      
    },
    fontFamily: {
      'Sansation': ['Sansation'],
    },
    ariants: {
      extend: {},
    },
    plugins: [],
  }
}
