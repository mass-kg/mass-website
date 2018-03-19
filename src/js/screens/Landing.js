import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Notification from 'grommet/components/Notification';
import Paragraph from 'grommet/components/Paragraph';
import Value from 'grommet/components/Value';
import Meter from 'grommet/components/Meter';
import Spinning from 'grommet/components/icons/Spinning';
import { getMessage } from 'grommet/utils/Intl';

import NavControl from '../components/NavControl';
import {
  loadLanding, unloadLanding
} from '../actions/landing';

import { pageLoaded } from './utils';

class Landing extends Component {
  componentDidMount() {
    pageLoaded('Landing');
    this.props.dispatch(loadLanding());
  }

  componentWillUnmount() {
    this.props.dispatch(unloadLanding());
  }

  render() {
    const { error, tasks } = this.props;
    const { intl } = this.context;

    return (
      <Article primary={true}>
        <Header
          direction='row'
          justify='between'
          size='large'
          pad={{ horizontal: 'medium', between: 'small' }}
        >
          <NavControl />
        </Header>
        {errorNode}
        <Box pad='medium'>
          <Heading tag='h3' strong={true}>
            Running Tasks
          </Heading>
          <Paragraph size='large'>
            The backend here is using request polling (5 second interval).
            See <Anchor path='/tasks'
              label={getMessage(intl, 'Tasks')} /> page for an example
            of websocket communication.
          </Paragraph>
        </Box>
        {listNode}
      </Article>
    );
  }
}

Landing.defaultProps = {
  error: undefined,
  tasks: []
};

Landing.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  tasks: PropTypes.arrayOf(PropTypes.object)
};

Landing.contextTypes = {
  intl: PropTypes.object
};

const select = state => ({ ...state.landing });

export default connect(select)(Landing);
