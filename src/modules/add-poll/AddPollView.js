import React, { Component, PropTypes } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class AddPollView extends Component {
  static PropTypes = {
    question: PropTypes.string,
    answers: PropTypes.array,
    addAnswer: PropTypes.func.isRequired,
    setAnswer: PropTypes.func.isRequired,
    setQuestion: PropTypes.func.isRequired,
    deleteAnswer: PropTypes.func.isRequired
  };

  render() {
    const {
      question,
      answers,
      addAnswer,
      setAnswer,
      setQuestion,
      deleteAnswer
    } = this.props;
    return (
      <View style={styles.container}>
        <Text onPress={this.onNextPress}>
          Add Poll
        </Text>
        <TextInput
          style={styles.question}
          onChangeText={setQuestion}
          autoFocus={true}
          multiline={true}
          placeholder='What is your question?'
          value={question}
          maxLength={200}
        />

        {answers.map((choice, index) => (
          <View key={index} style={styles.answer}>
            <TextInput
              style={styles.answerText}
              onChangeText={(text) => setAnswer(index, text)}
              placeholder='Enter an answer option'
              value={choice.value}
              maxLength={100}
            />
            { index > 0
              ? <TouchableOpacity onPress={() => {
                deleteAnswer(index);
              }}>
                <Text style={[ styles.deleteAnswer ]}>X</Text>
              </TouchableOpacity>
              : null
            }
          </View>
        ))}

        {answers.length < 4
          ? <TouchableOpacity onPress={() => {
            addAnswer();
          }}>
            <Text style={styles.add}>+ Add Option</Text>
          </TouchableOpacity>
          : null
        }
        <View style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  question: {
    height: 180,
    padding: 4,
    borderColor: 'gray',
    borderWidth: 1
  },
  add: {
    color: '#9369e4',
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16
  },
  container: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  answer: {
    marginTop: 10,
    height: 60,
    flexDirection: 'row'
  },
  answerText: {
    padding: 4,
    flex: 1,
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1
  },
  deleteAnswer: {
    paddingLeft: 10,
    paddingTop: 10
  },
  submitButton: {
    backgroundColor: '#6428d8',
    padding: 10,
    borderRadius: 2
  },
  submitButtonText: {
    color: 'white'
  }
});
