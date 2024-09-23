import Dropdown from './components/Dropdown';

export default function Home() {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div>
      <h1>Dropdown Component Demo</h1>
      <Dropdown label="Select an option:" options={options} />
    </div>
  );
}
