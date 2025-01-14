import React from 'react';
import {
    Button,
    Bullseye,
} from '@patternfly/react-core';
import {
    PullSecretInputCard
} from '@code-ready/crc-react-components';
import '@code-ready/crc-react-components/dist/index.css';


export default class PullSecretChangeWindow extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          pullsecret: ""
      };
  
      this.handlePullSecretChanged = this.handlePullSecretChanged.bind(this);
      this.handleChangeClick = this.handleChangeClick.bind(this);
      this.handleCancelClick = this.handleCancelClick.bind(this);
    }
  
    handlePullSecretChanged = value => {
        this.setState(() => {
                return {pullsecret: value};
            }
        );
    };

    handleChangeClick() {
        window.api.pullsecretChange({pullsecret: this.state.pullsecret})

        // clear field
        this.setState({pullsecret: ""});

        window.close();
    }

    handleCancelClick() {
        // clear field
        this.setState({pullsecret: ""});

        window.close();
    }

    render() {
      return (
        <>
            <Bullseye>
                <PullSecretInputCard height="220px"
                    pullsecret={this.state.pullsecret}
                    onChanged={this.handlePullSecretChanged} />
            </Bullseye>
            <div style={{ textAlign: "right", paddingLeft: "30px", paddingRight: "30px" }}>
                <Button style={{width: 120}} variant="secondary"
                    onClick={this.handleCancelClick}>
                    Cancel
                </Button>{' '}
                <Button style={{width: 120}} variant="primary" type="submit"
                    onClick={this.handleChangeClick}>
                    Change
                </Button>
            </div>
        </>
      );
    }
}

