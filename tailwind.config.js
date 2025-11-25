 tailwind.config = {
    theme: {
      extend: {},
    },
    plugins: [
      function({ addUtilities }) {
        addUtilities({
          '.bg-radial': {
            'background-image': 'radial-gradient(var(--tw-gradient-stops))',
          },
        })
      }
    ]
  }