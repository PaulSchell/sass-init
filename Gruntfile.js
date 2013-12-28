module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    app: {
      path: "",
      domain: ""
    },

    mkdir: {
      development: {
        options:{
          create: ['scss', 
                   'scss/modules', 
                   'scss/partials',
                   'scss/vendor']
        },
      },
    },

    "file-creator": {
      "modules_all": {
      "scss/modules/_all.scss": function(fs, fd, done) {
        fs.writeSync(fd, '#Include to get all modules');
        done();
        },
      },
      "modules_utility": {
      "scss/modules/_utility.scss": function(fs, fd, done) {
        fs.writeSync(fd, '#Module name');
        done();
        },
      },
      "modules_colors": {
      "scss/modules/_colors.scss": function(fs, fd, done) {
        fs.writeSync(fd, '#Colors etc.');
        done();
        },
      },
      "partials_base": {
      "scss/partials/_base.scss": function(fs, fd, done) {
        fs.writeSync(fd, '#imports for all mixins + global project variables');
        done();
        },
      },
      "partials_buttons": {
      "scss/partials/_buttons.scss": function(fs, fd, done) {
        fs.writeSync(fd, '#buttons');
        done();
        },
      },
      "partials_grids": {
      "scss/partials/_grids.scss": function(fs, fd, done) {
        fs.writeSync(fd, '#grids');
        done();
        },
      },
      "partials_typography": {
      "scss/partials/_typography.scss": function(fs, fd, done) {
        fs.writeSync(fd, '#typograhpy');
        done();
        },
      },
      "partials_reset": {
      "scss/partials/_reset.scss": function(fs, fd, done) {
        fs.writeSync(fd, '#reset');
        done();
        },
      },
      "vendor_example": {
      "scss/vendor/_.scss": function(fs, fd, done) {
        fs.writeSync(fd, '#css or sass from other projects');
        done();
        },
      },
      "main.scss": {
      "scss/main.scss": function(fs, fd, done) {
        fs.writeSync(fd, '#primary sass file');
        done();
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-file-creator');

  grunt.registerTask('sass-init', ['mkdir', 'file-creator']);
};