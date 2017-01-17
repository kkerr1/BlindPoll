import React, { PropTypes } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import NavigationViewContainer from './navigation/NavigationViewContainer';

const AppView = React.createClass({
  propTypes: {
    isReady: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  },
  render() {
    if (!this.props.isReady) {
      return (
        <View>
          <ActivityIndicator style={styles.centered}/>
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <NavigationViewContainer />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignSelf: 'center'
  }
});

export default AppView;
