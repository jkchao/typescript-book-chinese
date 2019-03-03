const types = ['build', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'chore'];

module.exports = {
  // https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-angular/README.md
  extends: ['@commitlint/config-angular'],

  rules: {
    'type-enum': [2, 'always', types]
  }
};
