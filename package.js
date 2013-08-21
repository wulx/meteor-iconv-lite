Package.describe({
  summary: "iconv-lite - pure javascript character encoding conversion (repackaged for meteor)"
});

Npm.depends({
  // "vows": "0.7.0", // for test only
  "iconv": "2.0.5"
});

Package.on_use(function (api) {
  api.export('iconv', 'server');
  api.add_files('iconv-lite.js', 'server');

  if (typeof api.export !== 'undefined') {
    api.use('webapp', 'server');
  }
});
