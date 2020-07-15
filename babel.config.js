module.exports = function(api) {
  api.cache.using(() => process.env.NODE_ENV);

  return { 
    presets: [
      "@babel/preset-env","@babel/preset-typescript","@babel/preset-react"
    ],
    plugins: [
      !api.env('production') && 'react-refresh/babel',
    ].filter(Boolean), 
  };
};  
