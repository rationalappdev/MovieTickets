import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import Option from './Option';

const { width } = Dimensions.get('window');
const optionWith = (width - 0) / 3 - 10;

export default class Options extends Component {

  static propTypes = {
    // Set of values to choose from
    values: PropTypes.array.isRequired,
    // Chosen value index
    chosen: PropTypes.number,
    // Gets called when user choses a value
    onChoose: PropTypes.func.isRequired,
  }

  render() {
    const { values, chosen, onChoose } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView
          ref={(scrollView) => { this._scrollView = scrollView; }}
          // Horizontall scrolling
          horizontal={true}
          // Decelerate fast after the user lifts their finger
          decelerationRate={0.1}
          // Hide all scroll indicators
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          // Do not adjust content automatically
          automaticallyAdjustContentInsets={false}
          // Snap interval to stop at option edges
          snapToInterval={optionWith}
          style={styles.options}
        >
          {values.map((value, index) =>
            <View style={{ width: optionWith }} key={index}>
              <Option
                value={value}
                isChosen={index === chosen}
                onChoose={() => onChoose(index)}
              />
            </View>
          )}
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  options: {
    flexDirection: 'row',
    marginRight: -10,
  },
});
