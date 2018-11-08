import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

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
            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        state: state,
    }
);

export default connect(mapStateToProps, null)(Home);

// export default Home;