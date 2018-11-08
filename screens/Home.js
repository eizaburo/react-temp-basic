import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { updateName, getHelloByThunk, getHelloBySaga } from '../actions/userAction';

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
                <Button
                    title='updateNameByThunk'
                    onPress={() => this.props.getHelloByThunk('foo@Thunk')}
                />
                <Button
                    title='updateNameBySaga'
                    onPress={() => this.props.getHelloBySaga('foo@Saga')}
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
        getHelloByThunk: () => dispatch(getHelloByThunk()),
        getHelloBySaga: () => dispatch(getHelloBySaga()),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;