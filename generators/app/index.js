'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var path = require('path');
var appFolder = 'app';
module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('name', { type: String, required: false });
    this.appName = this.name || path.basename(process.cwd()) || 'webpack-redux-react-starter';
    this.appPath = this.env.options.appPath;
    this.version = "0.0.1";
  },
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      chalk.red('Webpack Redux React')
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to include Matter.js for authentication?',
      default: false
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;
      done();
    }.bind(this));
  },
  writing: {
    app: function () {
      var filesArray = [
        {src:'_index.html', dest:'index.html'},
        {src:'app/**', dest: 'app'},
        {src:'assets/**', dest: 'assets'},
        {src:'bin/**', dest: 'bin'},
        {src:'lib/**', dest: 'lib'},
      ];
      this.copyFiles(filesArray);
    },
    projectfiles: function () {
      var filesArray = [
        {src:'_package.json', dest: 'package.json'},
        {src:'webpack-dev.config.js'},
        {src:'webpack.config.js'},
        {src:'gitignore', dest: '.gitignore'},
        {src:'eslintrc', dest: '.eslintrc'}
      ]
      this.copyFiles(filesArray);
    }
  },
  install: function () {
    this.npmInstall();
  },
  /**
   * @param {Array|Object} filesArray
   */
  copyFiles: function(filesArray){
    var array = [];
    if(_.isArray(filesArray)){
      array = filesArray;
    } else { //Handle array of arguments if first argument is not array
      array = arguments;
    }
    for(var i=0; i < array.length; i++){
      var src = '';
      var destination = '';
      if (!_.has(array[i],'src')) {
        if (_.isString(array[i])) {
          src = array[i];
        } else {
          console.error('Invalid source for file copying.');
          throw new Error('Invalid source for file copy.');
        }
      }
      if(_.isObject(array[i])){
        src = array[i].src;
        destination = array[i].dest || array[i].src; //Make destination source if not provided
      }
      if(src.charAt(0) === "_"){ //template if filename starts with _
        //Copy with templating
        this.template(src, destination, this.templateContext);
      } else if(src.indexOf('*') !== -1 || src.indexOf('/**') !== -1) {
        //TODO: make this work better (work with nested folders and use src correctly)
        src.replace("**", ""); //Remove /**
        src.replace("/", ""); //Remove /
        this.directory(destination, destination);
      } else {
        //Normal copy
        this.fs.copy(
          this.templatePath(src),
          this.destinationPath(destination)
        );
      }
    }
  },
});
