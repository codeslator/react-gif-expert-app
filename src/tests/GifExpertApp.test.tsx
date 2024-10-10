import { render } from "@testing-library/react"
import GifExpertApp from "../GifExpertApp"

describe('Test <GifExpertApp /> component.', () => {

  test('Should to match with the snapshot.', () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });
});