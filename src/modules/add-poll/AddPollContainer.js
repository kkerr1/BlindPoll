import { connect } from 'react-redux';
import AddPollView from './AddPollView';
import { addAnswer, setAnswer, setQuestion, deleteAnswer } from './AddPollState';
const mapActionsToProps = {
  addAnswer, setAnswer, setQuestion, deleteAnswer
};
const mapStateToProps = (state) => state.get('addPoll').toJS();
export default connect(mapStateToProps, mapActionsToProps)(AddPollView);
