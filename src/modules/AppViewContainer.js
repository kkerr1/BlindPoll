import { connect } from 'react-redux';
import AppView from './AppView';

export default connect(
  () => ({ isReady: true })
)(AppView);
