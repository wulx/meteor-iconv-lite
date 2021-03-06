Package.describe({
  summary: "iconv-lite - pure javascript character encoding conversion (npm integrated for meteor)"
});

Npm.depends({
  // "vows": "0.7.0", // for test only
  "iconv": "2.0.5",
  "iconv-lite": "0.2.11"
});

Package.on_use(function (api) {
  api.add_files('iconv-lite.js', 'server');
  api.export('iconv', 'server');

  if (typeof api.export !== 'undefined') {
    api.use('webapp', 'server');
  }
});
