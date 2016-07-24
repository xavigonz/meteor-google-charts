Package.describe({
  name: 'rafaelhdr:google-charts',
  summary: 'Easy Google Charts for Meteor',
  version: '0.0.3',
  git: 'https://github.com/rafaelhdr/meteor-google-charts.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('rafaelhdr:google-charts.js');
  api.export(['drawChart'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rafaelhdr:google-charts');
  api.addFiles('rafaelhdr:google-charts-tests.js');
});
