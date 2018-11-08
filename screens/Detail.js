import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

class Detail extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Detail</Text>
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

export default connect(mapStateToProps, null)(Detail);

// export default Detail;