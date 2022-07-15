module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    // '@semantic-release/npm', // 不需要在 npm 发布包
    '@semantic-release/github',
  ],
}
