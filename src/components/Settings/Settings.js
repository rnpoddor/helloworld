import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import CnnSettings from 'metadata-react/FrmLogin/CnnSettings';

import withStyles from 'metadata-react/styles/paper600';
import withIface from 'metadata-redux/src/withIface';
import withPrm from 'metadata-redux/src/withPrm';

import compose from 'recompose/compose';

class Settings extends Component {

  componentDidMount() {
    this.shouldComponentUpdate(this.props);
  }

  shouldComponentUpdate({handleIfaceState, title}) {
    const ltitle = 'Настройки';
    if(title != ltitle) {
      handleIfaceState({
        component: '',
        name: 'title',
        value: ltitle,
      });
      return false;
    }
    return true;
  }



  render() {
    const {props} = this;
    return (
      <Paper className={props.classes.root} elevation={4}>
        <Typography type="title" style={{paddingTop: 16}}>Подключение к базе данных</Typography>
        <CnnSettings {...props} />
      </Paper>
    );
  }
}

export default compose(withStyles, withIface, withPrm)(Settings);