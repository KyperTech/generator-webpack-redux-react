'use strict';
var yeoman = require('yeoman-generator');
var _ = require('lodash');
var chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'The subgenerator name'
    });
    this.capsName = _.capitalize(this.name);
    this.camelName = this.name.toLowerCase().charAt(0).toUpperCase().slice(1); //Capitalize first letter only
    // this.log('You called the Container subgenerator with the argument ' + this.name + '.');
  },
  prompting: function () {
    var done = this.async();

    var prompts = [{
      type: 'confirm',
      name: 'addAction',
      message: 'Do you want to create an action file for this component?\n' + chalk.red('WARNING:This will overwrite an existing action file of the same name.') + '\n',
      default: false
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;
      done();
    }.bind(this));
  },
  writing: function () {
    if(this.props.addAction){
      this.template('_action.js', 'actions/' + this.name.toLowerCase() + '.js', this.templateContext);
    }
    this.template('_main.js', 'containers/'+ this.name + '/' + this.name + '.js', this.templateContext);
    this.template('_main.scss', 'containers/'+ this.name + '/' + this.name + '.scss',this.templateContext);
  }
});
