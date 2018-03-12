module.exports = {
  presets: [
    [ '@babel/env', { targets: { node: 8 } } ]
  ],
  plugins: [
    [ '@babel/proposal-class-properties' ],
    [ '@babel/proposal-object-rest-spread', { useBuiltIns: true } ],
    [ 'module-resolver', { root: [ './' ] } ]
  ],
  comments: false
}
