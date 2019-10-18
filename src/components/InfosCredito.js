import React from "react";
// Styles
import "./InfosCredito.scss";
// Components
import { Card, Steps } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CardTitle(props) {
  return (
    <div className="cardTitle">
      <FontAwesomeIcon className="icon" icon="money-check-alt" />
      <span className="title">Crédito</span>
    </div>
  );
}

class CardContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditStatus: props.creditStatus
    };
  }

  render() {
    const { Step } = Steps;
    return (
      <>
        <span>{this.state.creditStatus}</span>
        <Steps>
          <Step
            status={this.state.creditStatus === 1 ? "process" : "finish"}
            title="Sem linha"
            icon={<FontAwesomeIcon icon="user" />}
          />
          <Step
            status={
              this.state.creditStatus === 2
                ? "process"
                : this.state.creditStatus > 2
                ? "finish"
                : "wait"
            }
            title="Disponível"
            icon={<FontAwesomeIcon icon="user" />}
          />
          <Step
            status={
              this.state.creditStatus === 3
                ? "process"
                : this.state.creditStatus > 3
                ? "finish"
                : "wait"
            }
            title="Solicitado"
            icon={<FontAwesomeIcon icon="user" />}
          />
          <Step
            status={
              this.state.creditStatus === 4
                ? "process"
                : this.state.creditStatus > 4
                ? "finish"
                : "wait"
            }
            title="Adquirido"
            icon={<FontAwesomeIcon icon="user" />}
          />
        </Steps>
      </>
    );
  }
}

class InfosCredito extends React.Component {
  render() {
    return (
      <div className="cardWrapper infosCredito">
        <Card
          title={CardTitle()}
          className="cardMain"
          headStyle={{ padding: "0 1rem" }}
        >
          <CardContent creditStatus={2}></CardContent>
        </Card>
      </div>
    );
  }
}

export default InfosCredito;
