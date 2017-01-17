import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const window = Dimensions.get('window');

export default class PollListView extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([ 'What is your favorite color?', 'What is your favorite drink?' ])
    };
  }

  renderRow(rowData) {
    return (
      <View style={styles.pollItem}>
        <Text style={styles.pollText}>
          {rowData}
        </Text>
        <TouchableOpacity style={styles.pollButton} onPress={() => {}}>
          <Text>Answer 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pollButton} onPress={() => {}}>
          <Text>Answer 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pollButton} onPress={() => {}}>
          <Text>Answer 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pollButton} onPress={() => {}}>
          <Text>Answer 4</Text>
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          style={styles.swiper}
          vertical={false}
          alwaysBounceVertical={false}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          bounces={true}
          loop={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc'
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  pollItem: {
    marginTop: 20,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    borderColor: '#6428d8',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 6,
    marginBottom: 5,
    overflow: 'hidden',
    width: window.width - 40,
    height: window.height - 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pollButton: {
    flex: 1,
    backgroundColor: '#9369e4',
    width: window.width - 60,
    marginBottom: 10,
    marginTop: 10,
    padding: 4,
    flexDirection: 'row'
  },
  pollText: {
    fontSize: 16
  },
  swiper: {
    flex: 1
  },
  linkButton: {
    textAlign: 'center',
    color: '#CCCCCC',
    marginBottom: 10,
    padding: 5
  }
});
