import React from "react";

// Higher-Order Component
const UpdatedComp = (OriginalComp) => {
  class NewComp extends React.Component {
    render() {
      return (
        <OriginalComp
          {...this.props} // Pass down all existing props
          title="the user " // Add a custom static prop
        />
      );
    }
  }
  return NewComp;
};

export default UpdatedComp;
