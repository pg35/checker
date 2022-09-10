import { useState, useEffect } from "react";
import { Container, Button, Table, Heading } from "./styled";

export default function CreditCheck(props) {
  const { state, setState } = props;
  const { step, status, credits } = state;
  useEffect(() => {
    setTimeout(() => {
      if (2 !== step && 1 !== status) return;
      setState({ ...state, status: 2, credits: 2, error: "something happend" });
    }, 2000);
  }, []);
  let heading = null;
  if (1 === status) heading = <h3>Checking credits</h3>;
  else if (2 === status)
    heading = <Heading success>Credit check completed</Heading>;
  else heading = <Heading>Credit check failed</Heading>;
  return (
    <div>
      <Container>
        {heading}
        {3 === status ? (
          <p>
            <strong>Reason:</strong> {state.error}
          </p>
        ) : null}
        <Table>
          <tbody>
            <tr>
              <th>Sandbox mode</th>
              <td>OFF</td>
            </tr>
            {2 === status ? (
              <tr>
                <th>Plagiarism check cost</th>
                <td>{credits} credits</td>
              </tr>
            ) : null}
          </tbody>
        </Table>
      </Container>
      <Button
        onClick={() => {
          if (1 === status) {
            if (
              confirm(
                "Currently, credit check is in progress.\nAre you sure you want to cancel it and restart?"
              )
            )
              setState({ ...state, step: 1, status: 1 });
          } else setState({ ...state, step: 1, status: 1 });
        }}
      >
        Restart
      </Button>
      {2 === status ? (
        <Button
          onClick={() => {
            if (
              confirm(
                `Plagiarism check will cost you ${credits} credits?\nAre you sure you want to continue?`
              )
            )
              setState({ ...state, step: 3, status: 1 });
          }}
        >
          Check plagiarism
        </Button>
      ) : null}
    </div>
  );
}
