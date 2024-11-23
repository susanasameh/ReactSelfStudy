import React from 'react'


//
const UpdatedComp = OriginalComp => {
    const UpdatedComp = OriginalComp => {
        class NewComp extends React.Component {
            render() {
                return <OriginalComp title={this.props.title} />;
            }
        }
        return NewComp;
    };
}
    export default UpdatedComp;
