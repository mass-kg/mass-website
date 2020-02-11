import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Image from 'grommet/components/Image';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';
// import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Robot from 'grommet/components/icons/base/Robot';

/*

import Label from 'grommet/components/Label';
import Notification from 'grommet/components/Notification';
import Value from 'grommet/components/Value';
import Meter from 'grommet/components/Meter';
import Spinning from 'grommet/components/icons/Spinning';
*/
// import { getMessage } from 'grommet/utils/Intl';

// import NavControl from '../components/NavControl';
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
    // const { error, tasks } = this.props;
    // const { intl } = this.context;

    return (
      <Article primary={true}>
        <Header
          colorIndex='grey-1'
          direction='row'
          justify='center'
          size='large'
          pad={{ horizontal: 'medium', between: 'small' }}
        >
          <Image src='/img/mass-logo.png' size='small' />
        </Header>

        <Section
          colorIndex='grey-4'
          texture='url(img/splash.png)'
          pad='xlarge'
          justify='center'
          align='center'
        >
          <Headline>
            Optimising processes.
          </Headline>

          <Headline>
            Maximising profits.
          </Headline>

        </Section>

        <Section
          pad='large'
          justify='center'
          align='center'
        >
          <Paragraph>
          We manufacture and supply mass measurement equipment for the mining and agricultural
          industry. Recently we have added software solutions to optimise the mass balancing and
          plant control processes through, remote monitoring, automated reporting and real time
          manager intervention. Innovation and quality remain at the top of our agendaallowing our
          products and services to add value to your process.
          </Paragraph>

        </Section>

        <Section
          pad='large'
          justify='center'
          align='center'
        >
          <Heading tag='h2' align='center'>
            Quality Mass Measurement Products:
          </Heading>

          <Columns justify='center'>
            <Box
              align='center'
              pad='medium'
              margin='small'>
              <List>
                <ListItem justify='between'
                  separator='bottom'>
                  <span>
                    Electromechanical Belt Scales
                  </span>
                </ListItem>
                <ListItem justify='between'
                  separator='bottom'>
                  <span>
                    Conveyor Belt Weigh Feeders
                  </span>
                </ListItem>
                <ListItem justify='between'
                  separator='bottom'>
                  <span>
                    Optical Conveyor Belt Scales
                  </span>
                </ListItem>
                <ListItem justify='between'
                  separator='bottom'>
                  <span>
                    In-Motion (axle) Truck Scales
                  </span>
                </ListItem>
                <ListItem justify='between'
                  separator='bottom'>
                  <span>
                    Truck Scales (Weighbridges)
                  </span>
                </ListItem>
                <ListItem justify='between'
                  separator='bottom'>
                  <span>
                    In-Motion Rail Wagon Scales
                  </span>
                </ListItem>
                <ListItem justify='between'
                  separator='bottom'>
                  <span>
                    Static Rail Wagon Scales
                  </span>
                </ListItem>
                <ListItem justify='between'
                  separator='bottom'>
                  <span>
                    Wheel Loader Scales
                  </span>
                </ListItem>

              </List>
            </Box>
            <Box
              align='center'
              pad='medium'
              margin='small'
            >
              <List>
                <ListItem justify='between'
                  separator='bottom'>
                  <span>
                    Livestock Scales
                  </span>
                </ListItem>
                <ListItem justify='between'
                  separator='bottom'>
                  <span>
                    Platform Scales
                  </span>
                </ListItem>
                <ListItem justify='between'
                  separator='bottom'>
                  <span>
                    Blending
                  </span>
                </ListItem>
                <ListItem justify='between'
                  separator='bottom'>
                  <span>
                    Batching
                  </span>
                </ListItem>
                <ListItem justify='between'
                  separator='bottom'>
                  <span>
                    Bagging
                  </span>
                </ListItem>
                <ListItem justify='between'
                  separator='bottom'>
                  <span>
                    Service
                  </span>
                </ListItem>
                <ListItem justify='between'
                  separator='bottom'>
                  <span>
                    Design
                  </span>
                </ListItem>
                <ListItem justify='between'
                  separator='bottom'>
                  <span>
                    Install
                  </span>
                </ListItem>

              </List>
            </Box>

          </Columns>
        </Section>

        <Section
          pad='large'
          justify='center'
          align='center'
        >
          <Heading tag='h2' align='center'>
            Unique Monitoring and Reporting Systems
          </Heading>

          <Box
            align='center'
            pad='medium'
            margin='small'
          >

            <List>
              <ListItem justify='between'
                separator='bottom'>
                <span>
                  Monitoring, Reporting, Management
                </span>
              </ListItem>

              <ListItem justify='between'
                separator='bottom'>
                <span>
                  Wash Plant Production Performance
                </span>
              </ListItem>

              <ListItem justify='between'
                separator='bottom'>
                <span>
                  MOO (Mining Optimisation Officer)
                </span>
              </ListItem>

              <ListItem justify='between'
                separator='bottom'>
                <span>
                  Camera Solutions (Thermal/CCTV)
                </span>
              </ListItem>

            </List>
          </Box>
        </Section>

        <Section
          pad='large'
          justify='center'
          align='center'
        >
          <Heading tag='h2' align='center'>
            New Developments
          </Heading>

          <Box
            align='center'
            pad='medium'
            margin='small'
          >

            <List pad='medium'>
              <ListItem justify='between'
                separator='bottom'>
                <span>
                  Pivot Optimisation Systems
                </span>
              </ListItem>

              <ListItem justify='between'
                separator='bottom'>
                <span>
                  Solar Power Solutions
                </span>
              </ListItem>
            </List>
          </Box>

        </Section>

        <Footer
          justify='between'
          pad='large'
        >
          <Title>
            <Robot />

          </Title>
          <Box direction='row'
            align='center'
            pad={{ between: 'medium' }}>
            <Anchor href='mailto:info@mass.kg'>
              Contact
            </Anchor>
            <Paragraph margin='none'>
              © 2018 Mass Accreditation Services and Solutions
            </Paragraph>

          </Box>
        </Footer>
      </Article>
    );
  }
}

Landing.defaultProps = {
  // error: undefined,
  // tasks: []
};

Landing.propTypes = {
  dispatch: PropTypes.func.isRequired,
  // error: PropTypes.object,
  // tasks: PropTypes.arrayOf(PropTypes.object)
};

Landing.contextTypes = {
  // intl: PropTypes.object
};

const select = state => ({ ...state.landing });

export default connect(select)(Landing);
