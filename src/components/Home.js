import { Container, Textarea, Button, Table, Heading } from "./styled";

export default function Home(props) {
  const { state, setState } = props;
  return (
    <div>
      <Container>
        <Textarea
          onChange={(e) =>
            setState({
              ...state,
              text: e.target.value
            })
          }
          placeholder="Enter text to check plagiarism"
          rows="10"
        ></Textarea>
      </Container>
      <Button onClick={() => setState({ ...state, step: 2, status: 1 })}>
        Next
      </Button>
    </div>
  );
}
