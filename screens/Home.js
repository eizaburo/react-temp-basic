import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { updateName } from '../actions/userAction';

class Home extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home</Text>
                <Button
                    title='Link to Detail'
                    onPress={() => this.props.navigation.navigate('Detail')}
                />
                <Text>{this.props.state.userData.user.name}</Text>
                <Button
                    title='updateName'
                    onPress={() => this.props.updateName('foo@Home')}
                />
            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        state: state,
    }
);

const mapDispatchToProps = dispatch => (
    {
        updateName: (name) => dispatch(updateName(name)),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;